import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://89.111.136.6:8902'
});
