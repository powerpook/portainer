import axios from 'axios';

import { get as localStorageGet } from '../hooks/useLocalStorage';

import {
  portainerAgentManagerOperation,
  portainerAgentTargetHeader,
} from './http-request.helper';

const axiosApiInstance = axios.create({ baseURL: '/api' });

export default axiosApiInstance;

axiosApiInstance.interceptors.request.use(async (config) => {
  const newConfig = { ...config };

  const jwt = localStorageGet('JWT', '');
  if (jwt) {
    newConfig.headers = {
      Authorization: `Bearer ${jwt}`,
    };
  }

  return newConfig;
});

axiosApiInstance.interceptors.request.use((config) => {
  const newConfig = { ...config };

  if (newConfig.url?.includes('/docker/')) {
    newConfig.headers['X-PortainerAgent-Target'] = portainerAgentTargetHeader();
    if (portainerAgentManagerOperation()) {
      newConfig.headers['X-PortainerAgent-ManagerOperation'] = '1';
    }
  }
  return newConfig;
});
