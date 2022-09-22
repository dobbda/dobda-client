import { http } from 'src/api';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { getCookie } from 'src/lib/getCookie';
import { Auth } from 'src/types';
import { REQUEST_URL } from '../REQUEST_URL';

export const auth = async (): Promise<Auth> => {
  //로그인확인용
  if (getCookie('access-expires')) {
    return (await axios.get(REQUEST_URL.get_auth)).data.response;
  } else if (getCookie('refresh-expires')) {
    return await axios.get('api/auth/refresh').then((res) => res.data.response.user);
  }
};

export const httpAuth = async (req: AxiosRequestConfig): Promise<Auth> => {
  try {
    return (
      await http.get('/auth', {
        headers: req?.headers,
      })
    ).data.response;
  } catch (e) {}
};
