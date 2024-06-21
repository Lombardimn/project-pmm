import { UserStoreInfo } from '@/models'
import userSliceReducer from './states/user'
import { configureStore } from '@reduxjs/toolkit'

export interface AppStore {
  user: UserStoreInfo
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer
  }
})
