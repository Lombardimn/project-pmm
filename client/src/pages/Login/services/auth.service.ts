import axios from 'axios'
import { ENDPOINTS } from '@/utilities'
import { FormDataLoginProps } from '@/pages'

export const LoginAPI = async (dataForm: FormDataLoginProps) => {
  const response = await axios.post(ENDPOINTS.LOGIN, dataForm, {
    withCredentials: true
  })
  return response
}

export const LogoutAPI = async () => await axios.post(ENDPOINTS.LOGOUT)

export const ProfileAPI = async () => {
  const response = await axios.get(ENDPOINTS.PROFILE, {
    withCredentials: true
  })
  return response
}
