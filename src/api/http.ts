import axios from 'axios';
const prod = process.env.NODE_ENV === 'production';

const createHttp = (baseURL: string) => {
  const http = axios.create({
    baseURL,
    // validateStatus: (status) => status >= 200 && status < 500,
  });
  return http;
};

export const http = createHttp(prod ? process.env.API_KEY : process.env.API_KEY_DEV);
