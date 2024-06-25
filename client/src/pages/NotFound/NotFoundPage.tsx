import { CallToAction, Copyright } from '@/components'

const NotFoundPage = () => {
  return (
    <main className='relative h-screen w-screen flex flex-col bg-slate-200'>
      <section className='flex flex-col items-center '>
        <h1 className='text-center mt-20 font-bold text-3xl'>Página No Encontrada</h1>
        <CallToAction to='/' className='mt-8 left-0 text-lg text-blue-500 underline underline-offset-4' >
          🡠 Volver a la pagina principal
        </CallToAction>
        <img
            className='h-[400px] w-[375px] mx-auto mt-10'
            src='/svg/404.svg'
            alt='Un robot en el suelo al que se le salieron piezas internas y tiene un cartel indicando el error 404 de pagina no encontrada.'
        />
      </section>
      <footer>
        <Copyright />
      </footer>
    </main>
  )
}

export default NotFoundPage
