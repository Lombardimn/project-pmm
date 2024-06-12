import { ButtonToAction, MdiMenu, Profile } from "@/components"

export const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-lg px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <ButtonToAction 
            type="button"
            className="flex justify-center items-center bg-gray-700 rounded p-1 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50" 
          >
            <MdiMenu className="w-10 h-10 text-gray-400" />
          </ButtonToAction>
          <section className="flex justify-center items-center">
            <img src="/vite.svg" alt="logo de la empresa" className="w-10 h-10"/>
          </section>
          <section className="flex justify-center items-center">
            <Profile />
          </section>
        </div>
      </div>
    </>
  )
}