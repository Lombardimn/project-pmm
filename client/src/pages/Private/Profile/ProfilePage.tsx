import { ButtonToAction, Copyright, MdiEye, MdiEyeOff, Navbar } from "@/components"
import { CloudinaryUploadResult, updateProfile, uploadToCloudinary } from "@/pages"
import { useState } from "react"
import { useForm } from "react-hook-form"
import DropZone from "./components/DropZone"
import { FormDataProps } from '@/pages'

const ProfliePage: React.FC = () => {
  const [valueUsername, setValueUsername] = useState<string>('')
  const [valueEmail, setValueEmail] = useState<string>('')
  const [valuePassword, setValuePassword] = useState<string>('')
  const [valueRepeatPassword, setValueRepeatPassword] = useState<string>('')
  const [uploadStatus, setUploadStatus] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [showPwd, setShowPwd] = useState<boolean>(true)
  const [showRepeatPwd, setShowRepeatPwd] = useState<boolean>(true)

  const { register, handleSubmit, formState: { errors } } = useForm<FormDataProps>()

  const handleFilesAccepted = async (files: File[]) => {
    setUploadStatus('Uploading...')
    try {
      for (const file of files) {
        const result: CloudinaryUploadResult = await uploadToCloudinary(file)
        setImageUrl(result.toString())
      }

      setUploadStatus('Upload successful!')
    } catch (error) {
      setUploadStatus('Upload failed.')
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    switch (name) {
      case 'modifyUsername':
        setValueUsername(value)
        break
      case 'modifyEmail':
        setValueEmail(value)
        break
      case 'modifyPassword':
        setValuePassword(value)
        break
      case 'modifyConfirmPassword':
        setValueRepeatPassword(value)
        break
      default:
        break
    }
  }

  const onSubmit = () => {
    // const dataForm = {
    //   username: data.modifyUsername,
    //   email: data.modifyEmail,
    //   password: data.modifyPassword,
    // }

    return updateProfile()
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-700 px-4">
        <Navbar />
      </header>
      <main className="mt-28 w-full h-full">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Datos de Perfil</h2>
          <p className="text-lg italic pb-3">Lorem ipsum, dolor sit amet consectetur.</p>
        </section>

        <section className="mx-4 pt-4">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-bold text-xl mt-8">Cuenta</h3>
            <div className="relative">
              <label
                htmlFor="modifyUsername"
                className={
                  `
                    absolute left-4 text-xl text-gray-500 transition-all duration-200 ease-in-out transform
                    ${valueUsername
                    ? '-top-4 z-10 bg-white px-1 after:content-["*"] after:ml-0.5 after:text-red-500'
                    : 'top-7 -translate-y-1/2'
                  } 
                    peer-focus:top-0 peer-focus:text-xl peer-focus:text-blue-500
                  `
                }
              >Usuario</label>
              <input
                type="text"
                id="modifyUsername"
                placeholder="Usuario"
                autoComplete="username"
                aria-invalid="false"
                className="block w-full px-2 py-3 mb-4 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
                {...register("modifyUsername",
                  {
                    required: false,
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
                    maxLength: { value: 20, message: "Máximo 20 caracteres" },
                    onChange: handleInputChange
                  }
                )}
              />

              {
                errors.modifyUsername && typeof errors.modifyUsername.message === 'string' &&
                <span
                  className="font-semibold text-red-500 italic mt-3 text-lg absolute top-11">
                  {errors.modifyUsername.message}
                </span>
              }
            </div>

            <div className="relative mt-4">
              <label
                htmlFor="modifyEmail"
                className={
                  `
                    absolute left-4 text-xl text-gray-500 transition-all duration-200 ease-in-out transform
                    ${valueEmail
                    ? '-top-4 z-10 bg-white px-1 after:content-["*"] after:ml-0.5 after:text-red-500'
                    : 'top-7 -translate-y-1/2'
                  } 
                    peer-focus:top-0 peer-focus:text-xl peer-focus:text-blue-500
                  `
                }
              >Email</label>
              <input
                type="email"
                id="modifyEmail"
                placeholder="Email"
                autoComplete="email"
                aria-invalid="false"
                className="block w-full px-2 py-3 mb-4 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
                {...register("modifyEmail",
                  {
                    required: false,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    onChange: handleInputChange
                  }
                )}
              />

              {
                errors.modifyEmail && typeof errors.modifyEmail.message === 'string' &&
                <span
                  className="font-semibold text-red-500 italic mt-3 text-lg absolute top-11">
                  {errors.modifyEmail.message}
                </span>
              }
            </div>

            <h3 className="font-bold text-xl mt-2">Credenciales</h3>
            <div className="relative">
              <label
                htmlFor="modifyPassword"
                className={
                  `
                    absolute left-4 text-xl text-gray-500 transition-all duration-200 ease-in-out transform
                    ${valuePassword
                    ? '-top-4 z-10 bg-white px-1 after:content-["*"] after:ml-0.5 after:text-red-500'
                    : 'top-1/2 -translate-y-1/2'
                  } 
                    peer-focus:top-0 peer-focus:text-xl peer-focus:text-blue-500
                  `
                }
              >Contraseña</label>
              <input
                type={showPwd ? 'password' : 'text'}
                id="modifyPassword"
                placeholder="Contraseña"
                autoComplete="current-password"
                aria-invalid="false"
                required
                className="block w-full px-2 py-3 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
                {...register("modifyPassword",
                  {
                    required: "Ingrese una contraseña",
                    minLength: { value: 8, message: "Mínimo 8 caracteres" },
                    maxLength: { value: 50, message: "Mínimo 50 caracteres" },
                    pattern: { value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/g, message: "Debe contener al menos una letra A-Z, una letra a-z y un 0-9" },
                    onChange: handleInputChange
                  }
                )}
              />

              {
                errors.modifyPassword && typeof errors.modifyPassword.message === 'string' &&
                <span
                  className="font-semibold text-red-500 italic text-lg absolute top-13">
                  {errors.modifyPassword.message}
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
                      <MdiEye className="w-6 h-6" />
                    </button>
                }
              </div>
            </div>

            <div className="relative mt-4">
              <label
                htmlFor="modifyConfirmPassword"
                className={
                  `
                    absolute left-4 text-xl text-gray-500 transition-all duration-200 ease-in-out transform
                    ${valueRepeatPassword
                    ? '-top-4 z-10 bg-white px-1 after:content-["*"] after:ml-0.5 after:text-red-500'
                    : 'top-1/2 -translate-y-1/2'
                  } 
                    peer-focus:top-0 peer-focus:text-xl peer-focus:text-blue-500
                  `
                }
              >Repetir Contraseña</label>
              <input
                type={showRepeatPwd ? 'password' : 'text'}
                id="modifyConfirmPassword"
                placeholder="Repetir Contraseña"
                autoComplete="current-password"
                aria-invalid="false"
                required
                className="block w-full px-2 py-3 text-xl border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent peer"
                {...register("modifyConfirmPassword",
                  {
                    required: "Ingrese una contraseña",
                    minLength: { value: 8, message: "Mínimo 8 caracteres" },
                    maxLength: { value: 50, message: "Mínimo 50 caracteres" },
                    pattern: { value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/g, message: "Debe contener al menos una letra A-Z, una letra a-z y un 0-9" },
                    onChange: handleInputChange,
                    validate: (value) => value === valuePassword || 'Las contraseñas no coinciden',
                  }
                )}
              />

              {
                errors.modifyConfirmPassword && typeof errors.modifyConfirmPassword.message === 'string' &&
                <span
                  className="font-semibold text-red-500 italic text-lg absolute top-13">
                  {errors.modifyConfirmPassword.message}
                </span>
              }
              <div className="absolute right-4 top-6 -translate-y-1/2">
                {
                  showRepeatPwd
                    ? <button
                      onClick={() => setShowRepeatPwd(false)}
                      type="button"
                    >
                      <MdiEyeOff className="w-6 h-6" />
                    </button>
                    : <button
                      onClick={() => setShowRepeatPwd(true)}
                      type="button"
                    >
                      <MdiEye className="w-6 h-6" />
                    </button>
                }
              </div>
            </div>

            <ButtonToAction
              className="px-2 py-3 mt-14 text-center text-xl font-semibold text-white border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
              type="submit"
            >
              Actualizar
            </ButtonToAction>
            <div className="flex justify-evenly place-content-evenly items-center mt-4">
              <img
                src={imageUrl ? imageUrl : '/images/baseuser.jpg'}
                alt="Foto de perfil del usuario"
                className="w-24 h-24 rounded-full border border-gray-400"
              />
              <ButtonToAction
                className="px-2 py-3 h-14 text-center text-xl font-semibold text-white border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
                type="button"
              >
                Cambiar Imagen
              </ButtonToAction>
            </div>
            <DropZone onFilesAccepted={handleFilesAccepted} />
            <p>{uploadStatus}</p>
          </form>
        </section>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default ProfliePage