import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
let header = {};

console.log(baseURL);

if (localStorage.token) {
  header.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  header,
});

export default axiosInstance;
