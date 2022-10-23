import { InfinityProps, Outsource, Question } from 'src/types';
import { Alarm, Auth, UserUpdate } from 'src/types';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

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

export const alarms = async (): Promise<Alarm[]> => {
  return await axios.get('/api/alarms').then((res) => res.data?.response.result);
};

export const alarmsAll = async (): Promise<Alarm[]> => {
  return await axios.get('/api/alarms/all').then((res) => res.data?.response.result);
};

export const question = async (pageNum: number = 1): Promise<InfinityProps<Question>> => {
  const res = await axios.get(`/api/questions/user?page=${pageNum}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageNum,
    isLast: pageNum >= res.data.response.totalPages,
    totalLength: res.data.response?.totalLength,
  };
};

export const sourcing = async (pageParam: number = 1): Promise<InfinityProps<Outsource>> => {
  const res = await axios.get(`/api/outsource/user?page=${pageParam && pageParam}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageParam,
    isLast: pageParam >= res.data.response.totalPages,
    totalLength: res.data.response?.totalLength,
  };
};
