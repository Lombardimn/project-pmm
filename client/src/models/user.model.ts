import { RolStoreInfo } from './roles.model'

export interface UserStoreInfo {
  id: string
  username: string
  rol: RolStoreInfo
}
