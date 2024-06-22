import { PrivateRoutes, PublicRoutes } from '@/models'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  privateValidaction: boolean
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

export const AuthGuard = ({ privateValidaction }: Props) => {
  const userState = useSelector((store: AppStore) => store.user)

  return userState.id
    ? privateValidaction
      ? PrivateValidationFragment
      : PublicValidationFragment
    : <Navigate replace to={PublicRoutes.LANDING} />
}

export default AuthGuard
