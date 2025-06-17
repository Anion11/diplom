import axios from 'axios';

// 217.25.225.213 insureflow.ru
export const $api = axios.create({
  baseURL: 'https://insureflow.ru',
  headers: {
    Host: 'insureflow.ru'
  }
});
