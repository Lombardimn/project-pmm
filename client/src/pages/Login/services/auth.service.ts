import axios from '@/services/axios.service'
import { ENDPOINTS } from '@/utilities'
import { FormDataLoginProps } from '@/pages'

export const LoginAPI = async (dataForm: FormDataLoginProps) => {
  const response = await axios.post(ENDPOINTS.LOGIN, dataForm)
  return response
}

export const LogoutAPI = async () => {
  const response = await axios.post(ENDPOINTS.LOGOUT)
  return response
}

export const ProfileAPI = async () => {
  const response = await axios.get(ENDPOINTS.PROFILE)
  return response
}

export const VerifyTokenAPI = async () => {
  const response = await axios.get(ENDPOINTS.VERIFY)
  return response
}
