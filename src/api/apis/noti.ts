import { Auth, Noti, UserUpdate } from 'src/interface';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { http } from '../http';
import { variable } from 'src/config/defaultValue';
import { useQueryClient } from 'react-query';

export const getNotis = async (): Promise<Noti[]> => {
  return await axios.get('/api/notis').then((res) => res.data.response.notis);
};

export const getNoti = async (id: number | string): Promise<Noti> => {
  return await axios.get('/api/notis/' + id).then((res) => res.data.response);
};

export const createNoti = async () => {
  return await axios.post('/api/notis').then((res) => res.data.success);
};
