import axios from 'axios';

export const $api = axios.create({
  baseURL: 'http://176.124.222.147:8096'
});
