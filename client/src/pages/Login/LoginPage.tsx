import { ButtonToAction, CallToAction, Copyright } from "@/components"
import { useState } from "react";

export const LoginPage = () => {
  const [valueUsername, setValueUsername] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  return (
    <>
      <main className="w-full h-full flex flex-col mx-auto mt-40">
        <section className="w-full px-4 flex flex-col justify-center content-center ">
          <img src="vite.svg" alt="logo de pagina" className="h-16" />
          <h2 className="text-3xl text-center font-bold">Inicio de Sesión</h2>
        </section>

        <section className="w-full px-4">
          <form 
            action=""
            className="flex flex-col gap-4"  
          >
            <div className="relative mt-8">
              <label 
                htmlFor="username" 
                className={
                  `
                    absolute left-4 text-lg text-gray-500 transition-all duration-200 ease-in-out transform
                    ${
                      valueUsername 
                        ? '-top-4 z-10 bg-white px-1' 
                        : 'top-1/2 -translate-y-1/2'
                    } 
                    peer-focus:top-0 peer-focus:text-lg peer-focus:text-blue-500
                  `
                }
              >Usuario</label>
              <input 
                type="text" 
                name="username" 
                id="username"
                placeholder="Usuario"
                autoComplete="username"
                aria-invalid="false"
                required
                onChange={(e) => setValueUsername(e.target.value)}
                className="block w-full px-2 py-3 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
              />
            </div>
            <div className="relative mt-4">
              <label 
                htmlFor="password" 
                className={
                  `
                    absolute left-4 text-xl text-gray-500 transition-all duration-200 ease-in-out transform
                    ${
                      valuePassword
                        ? '-top-4 z-10 bg-white px-1'
                        : 'top-1/2 -translate-y-1/2'
                    } 
                    peer-focus:top-0 peer-focus:text-xl peer-focus:text-blue-500
                  `
                }
              >Contraseña</label>
              <input 
                type="text" 
                name="password" 
                id="password"
                placeholder="Contraseña"
                autoComplete="current-password"
                aria-invalid="false"
                required
                onChange={(e) => setValuePassword(e.target.value)}
                className="block w-full px-2 py-3 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
              />
            </div>

            <ButtonToAction 
              className="px-2 py-3 text-center text-xl font-semibold text-white border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
              type="submit"
            >
              Iniciar Sesion
            </ButtonToAction>

            <div className="flex mx-2 justify-between">
              <CallToAction href="/" className="text-blue-500 text-md text-left">
                ¿Ha olvidado su contraseña?
              </CallToAction>

              <CallToAction href="/" className="text-blue-500 text-md text-right">
                ¿No tiene cuenta? Regístrese
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