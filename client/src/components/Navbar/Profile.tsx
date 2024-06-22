import { useState } from 'react'
import { ButtonToAction } from '@/components'
import { Link, useNavigate } from 'react-router-dom'
import { LogoutAPI, ProfileAPI } from '@/pages/Login'
import { Toaster, toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { resetUser } from '@/redux/states/user'
import axios from 'axios'

export const Profile = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = () => {
    setOpen(!open)
  }

  const Logout = async () => {
    try {
      const response = await LogoutAPI()

      if (response.status === 200) {
        toast.success(response.data.message, { duration: 1500 })
        setTimeout(() => {
          dispatch(resetUser())
          navigate('/landing')
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
        navigate('/private/profile')
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
            height: '40px',
            padding: '8px'
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
            <img src='https://i.pravatar.cc/300' className='h-12 w-12 rounded-full'/>
          </ButtonToAction>

          <section className='absolute top-14 -right-2 w-40 text-gray-400'>
            {open && (
              <div className='flex flex-col rounded-lg bg-slate-50 shadow-lg shadow-neutral-950/40  '>
                <ul className='text-xl py-2 px-4'>
                  <li className='py-1 hover:text-blue-500 focus:text-blue-500'><button onClick={Profile}>Perfil</button></li>
                  <li className='py-1 hover:text-blue-500 focus:text-blue-500'><Link to='/private/customers'>Ajustes</Link></li>
                  <li className='py-1 hover:text-blue-500 focus:text-blue-500'><button onClick={Logout}>Cerrar Sesión</button></li>
                </ul>
              </div>
            )}
          </section>
      </div>
    </>
  )
}
