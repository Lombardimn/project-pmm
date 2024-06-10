import { Suspense } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { LoginPage } from "@/pages"
import { RoutesWithNotFound } from "@/utilities"

function App() {
  
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/login" element={<LoginPage />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
