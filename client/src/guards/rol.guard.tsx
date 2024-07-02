import { PrivateRoutes } from '@/models'
import { AppStore } from '@/redux/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

const PrivateValidationFragment = <Outlet />
const AdminValidationFragment = <Navigate replace to={PrivateRoutes.HOME} />

const RolGuard = () => {
  const userState = useSelector((store: AppStore) => store.user)
  const [authValue, setAuthValue] = useState<number>(1)

  const index = userState.index

  /* State machine:
    900 = Initial state
    904 = Unauthorized
    999 = User not found
  */

  const checkAutorization = (value: number | undefined) => {
    if (value === 1) {
      setAuthValue(value)
      toast.warning('Rol autorizado', { duration: 1500 })
    } else if (value !== undefined && value >= 2 && value <= 5) {
      setAuthValue(904)
      toast.error('Rol no autorizado', { duration: 1500 })
    } else {
      setAuthValue(999)
    }
  }

  useEffect(() => {
    checkAutorization(index)
  }, [index])

  useEffect(() => {
    console.log('authValue: ', authValue)
  }, [authValue])

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
        authValue === 1
          ? PrivateValidationFragment
          : AdminValidationFragment
      }
    </>
  )
}

export default RolGuard
