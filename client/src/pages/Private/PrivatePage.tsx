import { PrivateRoutes } from "@/models"
import { Route, Navigate } from "react-router-dom"
import { RoutesWithNotFound } from "@/utilities"
import { lazy } from "react"

const DashboardPage = lazy(() => import('@/pages/Private/Dashboard/DashboardPage'))
const ProfliePage = lazy(() => import('@/pages/Private/Profile/ProfilePage'))
const HomePage = lazy(() => import('@/pages/Private/Home/HomePage'))

const PrivatePage = () => {

  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<DashboardPage />} />
      <Route path={PrivateRoutes.PROFILE} element={<ProfliePage />} />
      <Route path={PrivateRoutes.HOME} element={<HomePage />} />
    </RoutesWithNotFound>
  )
}

export default PrivatePage