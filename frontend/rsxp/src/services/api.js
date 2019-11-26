import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.5:8000',
});

axios.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  if (error.response.status === 401) {
    const requestConfig = error.config;
    return axios(requestConfig);
  }
  return Promise.reject(error);
});

export default api;