import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  // withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export default api
