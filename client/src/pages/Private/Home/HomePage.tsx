import { CardSelector, Copyright, MdiAccountGroup, MdiCashRegister, MdiFood, MdiInvoiceTextEdit, MdiPackageVariant, Navbar } from '@/components'
import { PrivateRoutes } from '@/models'

const HomePage = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-700 px-4">
        <Navbar />
      </header>
      <main className="mt-28 w-full h-full">
        <section className="mx-4 pt-4">
          <h2 className="font-bold text-3xl">Inicio</h2>
          <p className="text-lg italic pb-3">Lorem ipsum dolor sit amet.</p>
        </section>

        <section className="mx-3 grid grid-cols-1 gap-2 text-slate-50">
          <CardSelector
            to={PrivateRoutes.MENUS}
            className="py-6 font-bold border border-solid border-transparent rounded-xl h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="Menus">
            <MdiFood className="scale-[2.0] ml-5 mr-5" />
          </CardSelector>

          <CardSelector
            to={PrivateRoutes.CLIENTS}
            className="py-6 font-bold border border-solid border-transparent rounded-xl h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="clientes">
            <MdiAccountGroup className="scale-[2.0] ml-5 mr-5" />
          </CardSelector>

          <CardSelector
            to={PrivateRoutes.PRODUCTS}
            className="py-6 font-bold border border-solid border-transparent rounded-xl border-y-slate-950 h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="Productos">
            <MdiPackageVariant className="scale-[2.0] ml-5 mr-5" />
          </CardSelector>

          <CardSelector
            to={PrivateRoutes.INVOICES}
            className="py-6 font-bold border border-solid border-transparent rounded-xl h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="Finanzas">
            <MdiCashRegister className="scale-[2.0] ml-5 mr-5" />
          </CardSelector>

          <CardSelector
            to={PrivateRoutes.ANALYTICS}
            className="py-6 font-bold border border-solid border-transparent rounded-xl h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="Analiticas">
            <MdiInvoiceTextEdit className="scale-[2.0] ml-5 mr-5" />
          </CardSelector>

          <CardSelector
            replace={true}
            to={PrivateRoutes.BACKOFFICE}
            className="py-6 font-bold border border-solid border-transparent rounded-xl h-auto w-auto bg-gradient-to-r from-blue-700 from-10% via-sky-700 via-30% bg-cyan-700 to-90% hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 focus:ring focus:ring-cyan-300"
            title="Backoffice">
            <MdiInvoiceTextEdit className="scale-[2.0] ml-5 mr-5" />
          </CardSelector>

        </section>
      </main>

      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default HomePage
