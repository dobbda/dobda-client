import { getLocalStorage } from 'src/lib/utils/localStorage';
import { QueryClient, useQueryClient } from 'react-query';
import { http } from 'src/api';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { Auth } from 'src/types';

export const auth = async (): Promise<Auth> => {
  if (getLocalStorage('exp', true)?.access_exp > Date.now()) {
    return (await axios.get('/api/auth')).data.response;
  } else if (getLocalStorage('exp', true)?.refresh_exp > Date.now()) {
    const ref = await axios.get('/api/auth/refresh').then((res) => res.data.response);

    return ref;
  }
};
