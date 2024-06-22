import { UserStoreInfo } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './states/user'

export interface AppStore {
  user: UserStoreInfo
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer
  }
})
