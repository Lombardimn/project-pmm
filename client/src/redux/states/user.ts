import { createSlice } from '@reduxjs/toolkit'
import { RolStoreInfo, UserStoreInfo } from '@/models'

export const EmptyUserState: UserStoreInfo = {
  id: '',
  username: '',
  email: '',
  imageUrl: '',
  rol: {} as RolStoreInfo,
  token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: EmptyUserState,
  reducers: {
    createUser: (_, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmptyUserState
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
