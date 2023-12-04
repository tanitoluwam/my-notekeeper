import axios from "axios";

const token = localStorage.getItem("token");

const http = axios.create({
  baseURL: "https://notes-api-f9r7.onrender.com/",
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

http.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Update the Authorization header with the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { http };
