import { getLocalStorage } from 'src/lib/utils/localStorage';
import { QueryClient, useQueryClient } from 'react-query';
import { http } from 'src/api';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { Auth } from 'src/types';
import { REQUEST_URL } from '../REQUEST_URL';

export const auth = async (): Promise<Auth> => {
  if (getLocalStorage('exp', true)?.access_exp > Date.now()) {
    return (await axios.get(REQUEST_URL.get_auth)).data.response;
  } else if (getLocalStorage('exp', true)?.refresh_exp > Date.now()) {
    return await axios.get('api/auth/refresh').then((res) => res.data.response);
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
