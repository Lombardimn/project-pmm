import { createSlice } from '@reduxjs/toolkit'
import { UserStoreInfo } from '@/models'
import { KEY_SESSION, REDUCER_USER, getPersistUser, setPersistUser } from '@/utilities'
import Cookies from 'js-cookie'

export const EmptyUserState: UserStoreInfo = {
  username: 'unknown',
  index: 0,
  image: 'https://res.cloudinary.com/lombardidev/image/upload/v1718853742/users/baseusers.jpg'
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

      // Limpieza de caches
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name)
          })
        })
      }

      // Limpieza de cookies
      Cookies.remove('token')
      return EmptyUserState
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
