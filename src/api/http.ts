import axios from "axios";

const createHttp = (baseURL: string) => {
  const http = axios.create({
    baseURL,
    // validateStatus: (status) => status >= 200 && status < 500,
  });
  return http;
};

export const http = createHttp(
  process.env.API_URL && process.env.API_URL
);


