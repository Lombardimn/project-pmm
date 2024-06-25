import { ROLES_LIST, getUserStore } from '@/utilities'

export const idRolValidator = (id: number, name?: string) => {
  if (id) {
    const result = Object.prototype.hasOwnProperty.call(ROLES_LIST, id)
      ? ROLES_LIST[id]
      : null
    console.log('result: ', result)
    if (result === null) throw new Error(`Invalid id: ${id}`)

    return result
  } else {
    for (const [id, value] of Object.entries(ROLES_LIST)) {
      if (value === name) {
        return id
      }
    }
  }
}

export const getData = (keyRole: string) => {
  const userData = getUserStore(keyRole)

  if (userData) {
    const userRol = userData.rol_name
    return userRol
  }
}
