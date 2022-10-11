import { Auth, UserUpdate } from 'src/types';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { http } from '../http';
import { variable } from 'src/config/defaultValue';
import { useQueryClient } from 'react-query';

export const getNoti = async () => {
  //내정보 상세
  return await axios.get('/notis').then((res) => res.data.response.notis);
};
