import axios from 'axios';

// 217.25.225.213 insureflow.ru
export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});
