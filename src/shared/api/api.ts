import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://217.25.225.213:8101'
});

export const $apiApp = axios.create({
  baseURL: 'http://217.25.225.213:8102'
});
