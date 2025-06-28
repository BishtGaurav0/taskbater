import axios from 'axios';

const API = axios.create({
  baseURL: 'https://taskbater-backend.onrender.com/',
});

export default API;