export const getPersistUser = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }))
}

export const setPersistUser = (key: string) => {
  localStorage.removeItem(key)
}
