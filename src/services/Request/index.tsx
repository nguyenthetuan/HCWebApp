import axios from "axios";

const BASE_URL = "http://192.168.2.59:8000"; // Thay bằng base URL của bạn

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${token}`, // Thêm nếu cần auth
  },
});

// Hàm xử lý lỗi chung (tùy chọn)
const handleError = (error) => {
  console.error("API Error:", error);
  throw error; // ném ra để bên ngoài xử lý nếu cần
};

// Các phương thức chuẩn
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
