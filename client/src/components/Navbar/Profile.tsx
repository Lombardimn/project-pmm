import { useState } from "react"
import { ButtonToAction } from "@/components"

export const Profile = () => {
  const [open, setOpen] = useState(false)

  const handleChange = () => {
    setOpen(!open)
  }

  return (
    <div className="relative flex flex-col">
        <ButtonToAction 
          type="button" 
          className="h-12 w-12 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
          onClick={handleChange}
        >
          <img src="https://i.pravatar.cc/300" className="h-12 w-12 rounded-full"/>
        </ButtonToAction>

        <section className="absolute top-14 -right-2 w-40 text-gray-400">
          {open && (
            <div className="flex flex-col rounded-lg bg-slate-50 shadow-lg shadow-neutral-950/40  ">
              <ul className="text-xl py-2 px-4">
                <li className="py-1 hover:text-blue-500 focus:text-blue-500"><a href="/private/profile">Perfil</a></li>
                <li className="py-1 hover:text-blue-500 focus:text-blue-500"><a href="/private/customers">Ajustes</a></li>
                <li className="py-1 hover:text-blue-500 focus:text-blue-500"><a href="/login">Cerrar Sesión</a></li>
              </ul>
            </div>
          )}
        </section>
    </div>
  )
}