import { createSlice } from '@reduxjs/toolkit'
import { RolStoreInfo, UserStoreInfo } from '@/models'

export const EmptyUserState: UserStoreInfo = {
  id: '',
  username: '',
  rol: {} as RolStoreInfo
}

export const getPersistUser = (userInfo: UserStoreInfo) => {
  localStorage.setItem('userSession', JSON.stringify({ ...userInfo }))
}

export const setPersistUser = () => {
  localStorage.removeItem('userSession')
}

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('userSession')
    ? JSON.parse(localStorage.getItem('userSession') as string)
    : EmptyUserState,
  reducers: {
    createUser: (_, action) => {
      getPersistUser(action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload }
      getPersistUser(result)
      return result
    },
    resetUser: () => {
      setPersistUser()
      return EmptyUserState
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
