import { ButtonToAction, CallToAction, Copyright, MdiEye, MdiEyeOff } from "@/components"
import { useForm } from "react-hook-form"
import { useState } from "react"

const LoginPage = () => {
  const [valueUsername, setValueUsername] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [showPwd, setShowPwd] = useState(true)

  const {register, handleSubmit, formState: {errors} } = useForm()

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueUsername(event.target.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePassword(event.target.value)
  }

  return (
    <>
      <main className="w-full h-full flex flex-col mx-auto mt-40">
        <section className="w-full px-4 flex flex-col justify-center content-center ">
          <img src="vite.svg" alt="logo de pagina" className="h-16" />
          <h2 className="text-3xl text-center font-bold mt-2">Inicio de Sesión</h2>
        </section>

        <section className="w-full px-4">
          <form 
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex flex-col gap-4"  
          >
            <div className="relative mt-8">
              <label 
                htmlFor="username" 
                className={
                  `
                    absolute left-4 text-xl text-gray-500 transition-all duration-200 ease-in-out transform
                    ${
                      valueUsername 
                        ? '-top-4 z-10 bg-white px-1 after:content-["*"] after:ml-0.5 after:text-red-500' 
                        : 'top-7 -translate-y-1/2'
                    } 
                    peer-focus:top-0 peer-focus:text-xl peer-focus:text-blue-500
                  `
                }
              >Usuario</label>
              <input 
                type="text" 
                id="username"
                placeholder="Usuario"
                autoComplete="username"
                aria-invalid="false"
                required
                className="block w-full px-2 py-3 mb-4 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
                {...register("username",
                  {
                    required: "Ingrese un usuario",
                    minLength: {value:3, message: "Mínimo 3 caracteres"},
                    maxLength: {value:20, message: "Máximo 20 caracteres"},
                    onChange: handleChangeUsername
                  }
                )}
              />

              {
                errors.username && typeof errors.username.message === 'string' &&
                  <span 
                    className="font-semibold text-red-500 italic mt-3 text-lg absolute top-11">
                    {errors.username.message}
                  </span>
              }

            </div>
            <div className="relative mt-4">
              <label 
                htmlFor="password" 
                className={
                  `
                    absolute left-4 text-xl text-gray-500 transition-all duration-200 ease-in-out transform
                    ${
                      valuePassword
                        ? '-top-4 z-10 bg-white px-1 after:content-["*"] after:ml-0.5 after:text-red-500' 
                        : 'top-1/2 -translate-y-1/2'
                    } 
                    peer-focus:top-0 peer-focus:text-xl peer-focus:text-blue-500
                  `
                }
              >Contraseña</label>
              <input 
                type={ showPwd ? 'password' : 'text' }
                id="password"
                placeholder="Contraseña"
                autoComplete="current-password"
                aria-invalid="false"
                required
                className="block w-full px-2 py-3 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
                {...register("password",
                  {
                    required: "Ingrese una contraseña",
                    minLength: {value:8, message: "Mínimo 8 caracteres"},
                    maxLength: {value:50, message: "Mínimo 50 caracteres"},
                    pattern: { value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/g, message: "Debe contener al menos una letra A-Z, una letra a-z y un 0-9" },
                    onChange: handleChangePassword
                  }
                )}
              />

              {
                errors.password && typeof errors.password.message === 'string' &&
                  <span 
                    className="font-semibold text-red-500 italic text-lg absolute top-13">
                    {errors.password.message}
                  </span>
              }
              <div className="absolute right-4 top-6 -translate-y-1/2">
                {
                  showPwd
                    ? <button
                        onClick={() => setShowPwd(false)}
                        type="button"
                      >
                        <MdiEyeOff className="w-6 h-6" />
                      </button>
                    : <button
                        onClick={() => setShowPwd(true)}
                        type="button"
                      >
                        <MdiEye className="w-6 h-6"/>
                      </button>
                }
              </div>
            </div>

            <ButtonToAction 
              className="px-2 py-3 mt-14 text-center text-xl font-semibold text-white border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
              type="submit"
            >
              Iniciar Sesion
            </ButtonToAction>

            <div className="flex mx-2 mb-3 justify-between">
              <CallToAction href="/" className="text-blue-500 text-lg text-left">
                ¿Ha olvidado su contraseña?
              </CallToAction>

              <CallToAction href="/" className="text-blue-500 text-lg text-right">
                ¿No tiene cuenta?
              </CallToAction>
            </div>
          </form>
        </section>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default LoginPage