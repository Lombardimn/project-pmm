import { PrivateRoutes } from '@/models'
import { KEY_GUARD_ROL, KEY_SESSION, getData } from '@/utilities'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateValidationFragment = <Outlet />
const AdminValidationFragment = <Navigate replace to={PrivateRoutes.HOME} />

const RolGuard = () => {
  const roleUser = getData(KEY_SESSION)
  console.log(' datos obtenidos en rolguard ', roleUser)

  return roleUser === KEY_GUARD_ROL
    ? PrivateValidationFragment
    : AdminValidationFragment
}

export default RolGuard
