import axios from 'axios'

import { Config } from '~/config'

type ApiError = {
  [key: string]: string[]
}

export interface ErrorResponse {
  message: string
  errors?: ApiError
}

const api = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'app',
  },
})

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status })
}

api.interceptors.response.use(
  response => response,
  ({ message, response }) => {
    if (response) {
      const { data, status } = response
      return handleError({ message, data, status })
    }
    return Promise.reject(message)
  },
)

export const getEachErrorMessage = (
  errors: ApiError,
  translate: any,
  setError: (field: string, message: string) => void,
) => {
  Object.keys(errors).forEach((key: string) => {
    const [message] = errors[key]
    // @ts-ignore
    setError(translate[key], message)
  })
}

export default api
