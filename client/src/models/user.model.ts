import { RolStoreInfo } from './roles.model'

export interface UserStoreInfo {
  id: string
  username: string
  email: string
  imageUrl: string
  rol: RolStoreInfo
  token: string
}
