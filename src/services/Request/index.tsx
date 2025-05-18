import axios from "axios";

const BASE_URL = "http://localhost:8000";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm token vào header mỗi lần request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Bắt lỗi token hết hạn
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/"; // redirect về login
    }
    return Promise.reject(error);
  }
);

const handleError = (error) => {
  console.error("API Error:", error);
  throw error;
};

const request = {
  get: async (url, params = {}, config = {}) => {
    try {
      const res = await instance.get(url, { params, ...config });
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },

  post: async (url, data = {}, config = {}) => {
    try {
      const res = await instance.post(url, data, config);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },

  put: async (url, data = {}, config = {}) => {
    try {
      const res = await instance.put(url, data, config);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (url, config = {}) => {
    try {
      const res = await instance.delete(url, config);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default request;
