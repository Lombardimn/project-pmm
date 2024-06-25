import { useEffect, useState } from 'react'
import { ButtonToAction, CallToAction } from '@/components'
import { useNavigate } from 'react-router-dom'
import { LogoutAPI, ProfileAPI } from '@/pages/Login'
import { Toaster, toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { resetUser } from '@/redux/states/user'
import axios from 'axios'
import { IMAGE_USER, KEY_SESSION, setPersistUser } from '@/utilities'
import { PrivateRoutes, PublicRoutes } from '@/models'

export const Profile = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [imgUrl, setImgUrl] = useState<string>(IMAGE_USER)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const getuserImg = () => {
      const dataUserLS = localStorage.getItem(KEY_SESSION)
      if (dataUserLS) {
        try {
          const parsetData = JSON.parse(dataUserLS)

          if (parsetData.img_url && parsetData.img_url.trim() !== '') {
            setImgUrl(parsetData.img_url)
          }
        } catch (error) {
          console.error('El objeto con la clave proporcionada no existe en el localStorage.')
        }
      }
    }

    getuserImg()
  }, [imgUrl])

  const handleChange = () => {
    setOpen(!open)
  }

  const Logout = async () => {
    try {
      const response = await LogoutAPI()

      if (response.status === 200) {
        toast.success('Sesión cerrada exitosamente', { duration: 1500 })
        setTimeout(() => {
          setPersistUser(KEY_SESSION)
          dispatch(resetUser())
          navigate(`/${PublicRoutes.LANDING}`, { replace: true })
        }, 2000)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          toast.error(error.response.data.message, { duration: 3000 })
        }
      }
    }
  }

  const Profile = async () => {
    try {
      const response = await ProfileAPI()
      console.log(response.data)

      setTimeout(() => {
        navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`, { replace: true })
        return response
      }, 2000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          toast.error(error.response.data.message, { duration: 3000 })
        }
      }
    }
  }

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
      <div className='relative flex flex-col'>
          <ButtonToAction
            type='button'
            className='h-12 w-12 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'
            onClick={handleChange}
          >
            <img src={imgUrl} className='h-12 w-12 rounded-full'/>
          </ButtonToAction>

          <section className='absolute top-14 -right-2 w-40 text-gray-400'>
            {open && (
              <div className='flex flex-col rounded-lg bg-slate-50 shadow-lg shadow-neutral-950/40  '>
                <ul className='text-xl py-2 px-4'>
                  <li className='py-1 hover:text-blue-500 focus:text-blue-500'>
                    <button onClick={Profile}>Perfil</button>
                  </li>
                  <li className='py-1 hover:text-blue-500 focus:text-blue-500'>
                    <CallToAction to='/private/customers'>
                      Ajustes
                    </CallToAction>
                  </li>
                  <li className='py-1 hover:text-blue-500 focus:text-blue-500'>
                    <button onClick={Logout}>Cerrar Sesión</button>
                  </li>
                </ul>
              </div>
            )}
          </section>
      </div>
    </>
  )
}
