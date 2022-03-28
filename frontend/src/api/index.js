import { responseStatus } from '../constants'

export const fetchData = async (url, method = 'GET', headers, body = null) => {
  try {
    const response = await fetch(url, {
      method,
      headers,
      body,
    })
    if (response.status === responseStatus.Created) {
      return await response.json()
    }
    const error = await response.json()
    return error.message
  } catch (e) {
    return e.message
  }
}
