import { CoinReserv, Portfolio } from './../../types/index';
import { CoinHistory, InfinityProps, Outsource, Question } from 'src/types';
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
    total: res.data.response?.total,
    totalPages: res.data.response.totalPages,
  };
};

export const sourcing = async (pageParam: number = 1): Promise<InfinityProps<Outsource>> => {
  const res = await axios.get(`/api/outsource/user?page=${pageParam && pageParam}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageParam,
    isLast: pageParam >= res.data.response.totalPages,
    total: res.data.response?.total,
    totalPages: res.data.response.totalPages,
  };
};

export const coinHistory = async (pageParam: number = 1): Promise<InfinityProps<CoinHistory>> => {
  const res = await axios.get(`/api/payments/history?page=${pageParam && pageParam}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageParam,
    isLast: pageParam >= res.data.response.totalPages,
    total: res.data.response?.total,
    totalPages: res.data.response.totalPages,
  };
};
export const coinReserv = async (pageParam: number = 1): Promise<InfinityProps<CoinReserv>> => {
  const res = await axios.get(`/api/payments/reserv?page=${pageParam && pageParam}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageParam,
    isLast: pageParam >= res.data.response.totalPages,
    totalPages: res.data.response.totalPages,
    total: res.data.response?.total,
  };
};

export const patchPf = async (data: Portfolio) => {
  let strData = { card: JSON.stringify(data.card), content: JSON.stringify(data.content) };
  return await axios.patch(`/api/users/pf`, strData);
};
export const getPf = async (userId: number) => {
  const data = (await axios.get(`/api/users/pf?userId=` + userId)).data;
  console.log(data);
};
