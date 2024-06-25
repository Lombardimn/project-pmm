export const getPersistUser = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }))
}

export const setPersistUser = (key: string) => {
  localStorage.removeItem(key)
}

export const getUserStore = (key: string) => {
  const data = localStorage.getItem(key)
  const result = data && JSON.parse(data)
  return result
}
