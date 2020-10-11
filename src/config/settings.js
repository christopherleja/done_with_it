import constants from 'expo-constants'

const settings = {
  dev: {
    baseURL: "http://192.168.1.24:9000/api"
  },
  staging: {
    baseURL: "http://192.168.1.24:9000/api"
  },
  prod: {
    baseURL: "http://192.168.1.24:9000/api"
  }
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (constants.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
}

export default getCurrentSettings();