import { Copyright, Navbar } from "@/components"

const HomePage = () => {
  return (
    <>
      <header className="h-24 flex justify-between items-center px-4 bg-blue-200">
        <Navbar />
      </header>
      <main>
        <h1>Home</h1>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  )
}

export default HomePage