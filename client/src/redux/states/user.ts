import { createSlice } from '@reduxjs/toolkit'
import { RolStoreInfo, UserStoreInfo } from '@/models'
import { KEY_SESSION, REDUCER_USER, getPersistUser, idRolValidator, setPersistUser } from '@/utilities'

export const EmptyUserState: UserStoreInfo = {
  id: '',
  username: '',
  rol: {} as RolStoreInfo
}

export const userSlice = createSlice({
  name: REDUCER_USER,
  initialState: localStorage.getItem(KEY_SESSION)
    ? JSON.parse(localStorage.getItem(KEY_SESSION) as string)
    : EmptyUserState,
  reducers: {
    createUser: (_, action) => {
      const rolDescription = idRolValidator(action.payload.rol_id)
      console.log('id rol: ', typeof (action.payload.rol_id))
      const payloadFinished = {
        ...action.payload,
        rol_name: rolDescription
      }
      console.log('store user create:', payloadFinished)
      getPersistUser<UserStoreInfo>(KEY_SESSION, payloadFinished)
      return payloadFinished
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
