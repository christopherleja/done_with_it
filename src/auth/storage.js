import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'


const key = "authToken"
const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing authToken")
  }
}

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token): null;
}

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key)
  } catch (error) {
    console.log("Could not retrieve authToken")
  }
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key)
  } catch (error) {
    console.log("Error removing the auth token")
  }
}

export default {
  getUser,
  getToken,
  removeToken,
  storeToken,
}