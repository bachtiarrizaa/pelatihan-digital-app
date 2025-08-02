// src/lib/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9000/api', // ganti jika port/backend kamu berbeda
  withCredentials: true, // jika nanti pakai cookie seperti Sanctum
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
