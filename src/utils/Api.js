import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_URL_LINK,
});

// Attach a token to each request
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error (e.g., when no token is available)
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
