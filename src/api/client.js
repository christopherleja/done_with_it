import { create } from 'apisauce';
import cache from '../utility/cache'
import authStorage from '../auth/storage'

import settings from '../config/settings'

export default client = create({
  baseURL: settings.baseURL
})

client.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken()
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
})

const get = client.get; 
client.get = async (url, params, axiosConfig) => {

  const response = await get(url, params, axiosConfig);

  if (response.ok){
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data} : response;
}