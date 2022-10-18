import { Alarm, Auth, UserUpdate } from 'src/types';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { http } from '../http';
import { variable } from 'src/config/defaultValue';
import { useQueryClient } from 'react-query';

export const myInfo = async () => {
  //내정보 상세
  return await axios.get('/api/users/mynfo').then((res) => res.data?.response);
};

export const myInfoUpdate = async (data: UserUpdate) => {
  //내정보 업데이트
  return await axios.patch('/api/users/myinfo', data).then((res) => res.data?.response);
};

export const getUserInfo = async (id: number) => {
  //내정보 상세

  return await axios.get(`/api/users/${id}`).then((res) => res.data?.response);
};

export const logout = async () => {
  return await axios.delete('/api/auth/logout');
};

export const alarms = async (): Promise<Alarm> => {
  return await axios.delete('/api/alarms').then((res) => res.data?.response.result);
};
