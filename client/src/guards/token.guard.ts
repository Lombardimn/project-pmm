import { VerifyTokenAPI } from '@/pages/Login'
import Cookies from 'js-cookie'

export const TokenGuard = async () => {
  let load: boolean = false
  let auth: boolean = false
  let rol = null

  const cookiesFound = Cookies.get()

  if (!cookiesFound.token) {
    auth = false
    load = false
    rol = null
    return { auth, load, rol }
  }
  try {
    const response = await VerifyTokenAPI()
    if (!response.data) {
      auth = false
      load = true
      rol = null

      return { auth, load, rol }
    }

    auth = true
    load = true
    rol = response.data.rol_id

    return { auth, load, rol }
  } catch (error) {
    auth = false
    load = false
    rol = null

    return { auth, load, rol }
  }
}
