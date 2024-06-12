import { ButtonToAction, MdiMenu } from "@/components"

export const Navbar = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-gray-500 rounded-full p-2 shadow-md">
        <MdiMenu className="w-8 h-8 text-slate-100" />
      </section>
      <section className="flex justify-center items-center">
        <img src="/vite.svg" alt="logo de la empresa" />
      </section>
      <section className="flex justify-center items-center">
        <ButtonToAction 
          type="button" 
          className="px-2 py-3 text-center text-lg font-semibold text-white border border-transparent bg-gradient-to-r from-red-800 from-10% via-red-700 via-30% bg-red-600 to-90% rounded-lg hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
        >
          Cerrar Sesión
        </ButtonToAction>
      </section>
    </>
  )
}