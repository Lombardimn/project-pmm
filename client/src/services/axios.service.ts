import axios from 'axios'

const BASE_URL = import.meta.env.VITE_URL_BASE_API

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export default instance
