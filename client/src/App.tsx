import { Suspense, lazy } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "@/utilities"
import { PrivateRoutes, PublicRoutes } from "@/models"
import { Loading } from "@/components"

const LoginPage = lazy(() => import('@/pages/Login/LoginPage'))
const PrivatePage = lazy(() => import('@/pages/Private/PrivatePage'))

function App() {
  
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<LoginPage />}/>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivatePage />}/>
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
