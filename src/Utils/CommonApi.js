import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URI, // Replace with your API base URL
  timeout: 50000, // Adjust as needed
});

// Common headers or configurations can be set here
axiosInstance.defaults.headers['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

const api = {
  get: (url, config = {}) => axiosInstance.get(url, config),
  post: (url, data, config = {}) => axiosInstance.post(url, data, config),
  put: (url, data, config = {}) => axiosInstance.put(url, data, config),
  delete: (url, config = {}) => axiosInstance.delete(url, config),
};

export default api;