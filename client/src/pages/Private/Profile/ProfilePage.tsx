import { Copyright, Navbar } from "@/components"

const ProfliePage = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-700 px-4">
        <Navbar />
      </header>
      <main className="mt-28 w-full h-full">
        <section>
          <h2>Datos de Perfil</h2>
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </section>

        <section>
          <h3>Cuenta</h3>
          <div>
            <label htmlFor="">Usuario</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">Contraseña</label>
            <input type="text" />
            <input type="text" />
          </div>

          <div>
            <img src="" alt="Foto de perfil del usuario" />
            <button>Actualizar</button>
            <div>zona de carga</div>
          </div>
        </section>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default ProfliePage