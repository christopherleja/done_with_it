import client from './client'

const endpoint = '/expoPushTokens'

const register = (pushToken) => client.post(endpoint, { token: pushToken})

export default {
  register,
}