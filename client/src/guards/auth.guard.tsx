import { PrivateRoutes, PublicRoutes } from '@/models'
import { AppStore } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { TokenGuard } from './token.guard'
import { useEffect, useState } from 'react'
import { LogoutAPI } from '@/pages'
import { resetUser } from '@/redux/states/user'
import axios from 'axios'
import { toast, Toaster } from 'sonner'

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [privateValidaction, setPrivateValidaction] = useState<boolean>(false)

  useEffect(() => {
    const checkToken = async () => {
      const result = await TokenGuard()
      try {
        if (!result.auth && !result.load) {
          const response = await LogoutAPI()
          if (response.status === 200) {
            toast.error('Usuario No autorizado, Token Invalido', { duration: 1500 })

            setTimeout(() => {
              dispatch(resetUser())
              navigate(PublicRoutes.LANDING)
            }, 2000)

            setPrivateValidaction(false)
          }
        } else if (!result.auth && result.load) {
          toast.error('Usuario no autenticado, redireccionando...', { duration: 1500 })

          setTimeout(() => {
            navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
          }, 2000)

          setPrivateValidaction(false)
        } else {
          setPrivateValidaction(true)

          setTimeout(() => {}, 1000)
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response && error.response.status === 401) {
            dispatch(resetUser())
            navigate(PublicRoutes.LANDING)
          }
        }
      }
    }

    checkToken()
  }, [userState, dispatch, navigate])

  return (
    <>
      <Toaster
        richColors
        theme="system"
        toastOptions={{
          style: {
            height: '52px',
            padding: '4px'
          },
          className: 'class'
        }}
      />
      {
        userState.username
          ? privateValidaction
            ? PrivateValidationFragment
            : PublicValidationFragment
          : <Navigate replace to={PublicRoutes.LANDING} />
      }
    </>
  )
}

export default AuthGuard
