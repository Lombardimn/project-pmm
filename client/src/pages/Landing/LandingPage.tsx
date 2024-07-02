import { CallToAction } from '@/components'
import { LANDIN_COVER } from '@/utilities'
import { useEffect, useState } from 'react'

const LandingPage = () => {
  const [coverPage, setCoverPage] = useState<string>('')

  const randomObject = (obj: { [key: string]: string }) => {
    const keys = Object.keys(obj)
    const index = Math.floor(Math.random() * keys.length)
    return obj[keys[index]]
  }

  useEffect(() => {
    const result = randomObject(LANDIN_COVER)
    setCoverPage(result)
  }, [])

  return (
    <main className='relative h-screen w-screen flex flex-col gap-2 bg-background-primary text-primary-color'>
      <section className='flex justify-center items-center mx-4 mt-10'>
        <img
          src={coverPage}
          alt="imagen de Landing Page de la app"
        />
      </section>
      <section className='mx-4'>
        <img
          src="/images/logo-light.png"
          alt="Logo de empresa La cocina de moni, el gusto de comer en casa"
          className='mx-auto my-3'/>
        <p className='text-center text-lg text-balance mx-auto font-medium'>
          Bienvenidos a nuestra App, aquí podras realizar las gestiones del negocio de una manera rapida y sencilla.
        </p>
      </section>
      <section className='mx-4'>
        <CallToAction
          to='/login'
          className='px-2 py-3 mx-4 mt-4 text-center text-xl font-semibold text-white border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300'
        >Iniciar Sesion</CallToAction>
      </section>
    </main>
  )
}

export default LandingPage
