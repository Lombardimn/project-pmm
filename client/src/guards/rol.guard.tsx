import { PrivateRoutes } from '@/models'
import { AppStore } from '@/redux/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

const PrivateValidationFragment = <Outlet />
const AdminValidationFragment = <Link replace to={PrivateRoutes.HOME} />

const RolGuard = () => {
  const userState = useSelector((store: AppStore) => store.user)
  const [authValidation, setAuthValidation] = useState<number>(0)

  useEffect(() => {
    switch (userState.index) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        setAuthValidation(userState.index)
        break
      default:
        setAuthValidation(0)
        break
    }
  }, [userState.index])

  return authValidation === 0
    ? AdminValidationFragment
    : PrivateValidationFragment
}

export default RolGuard
