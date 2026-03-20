import axios from "axios";

const api = axios.create({
  baseURL: "http://automatadev-001-site16.atempurl.com/api/v1",
});

// http://automatadev-001-site16.atempurl.com/api/v1

// Dev - https://automatadev-001-site15.atempurl.com/api/v1

// Interceptor to add the token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Or wherever you store it
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
