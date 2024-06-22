import { CallToAction } from '@/components'

const LandingPage = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <p>Esta es la landing page</p>
      <CallToAction
        href='/login'
        className='px-2 py-3 mt-5 text-center text-xl font-semibold text-white border border-transparent bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300'
      >Iniciar Sesion</CallToAction>
    </>
  )
}

export default LandingPage
