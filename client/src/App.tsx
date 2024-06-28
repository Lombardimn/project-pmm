import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/utilities'
import { PrivateRoutes, PublicRoutes } from '@/models'
import { Loading } from '@/components'
import { AuthGuard } from '@/guards'
import { Provider } from 'react-redux'
import store from '@/redux/store'

const LandingPage = lazy(() => import('@/pages/Landing/LandingPage'))
const LoginPage = lazy(() => import('@/pages/Login/LoginPage'))
const PrivatePage = lazy(() => import('@/pages/Private/PrivatePage'))

function App () {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LANDING} element={<LandingPage />}/>
            <Route path={PublicRoutes.LOGIN} element={<LoginPage />}/>
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<PrivatePage />}/>
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export default App
