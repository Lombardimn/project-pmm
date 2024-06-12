import { Copyright, Navbar } from "@/components"

const HomePage = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-700 px-4">
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