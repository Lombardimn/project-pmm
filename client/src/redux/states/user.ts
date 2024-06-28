import { createSlice } from '@reduxjs/toolkit'
import { UserStoreInfo } from '@/models'
import { KEY_SESSION, REDUCER_USER, getPersistUser, setPersistUser } from '@/utilities'

export const EmptyUserState: UserStoreInfo = {
  username: '',
  index: 0,
  image: ''
}

export const userSlice = createSlice({
  name: REDUCER_USER,
  initialState: localStorage.getItem(KEY_SESSION)
    ? JSON.parse(localStorage.getItem(KEY_SESSION) as string)
    : EmptyUserState,
  reducers: {
    createUser: (_, action) => {
      const result = getPersistUser<UserStoreInfo>(KEY_SESSION, action.payload)
      return result
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload }
      getPersistUser<UserStoreInfo>(KEY_SESSION, result)
      return result
    },
    resetUser: () => {
      setPersistUser(KEY_SESSION)
      return EmptyUserState
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
