import { CoinReserv, CreatePortfolio, Maker } from '../../interface/index';
import { CoinHistory, InfinityProps, Outsource, Question } from 'src/interface';
import { Alarm, Auth, UserUpdate } from 'src/interface';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export const myInfo = async () => {
  //내정보 상세
  return await axios.get('/api/users/mynfo').then((res) => res.data?.response);
};

export const myInfoUpdate = async (data: UserUpdate) => {
  //내정보 업데이트
  return await axios
    .patch('/api/users/myinfo', data)
    .then((res) => res.data?.response);
};

export const getUserInfo = async (id: number): Promise<Auth> => {
  //내정보 상세

  return await axios.get(`/api/users/${id}`).then((res) => res.data?.response);
};

export const logout = async () => {
  return await axios.delete('/api/auth/logout');
};

export const alarms = async (): Promise<Alarm[]> => {
  return await axios
    .get('/api/alarms')
    .then((res) => res.data?.response.result);
};

export const alarmsAll = async (): Promise<Alarm[]> => {
  return await axios
    .get('/api/alarms/all')
    .then((res) => res.data?.response.result);
};

export const question = async (
  pageNum: number = 1,
): Promise<InfinityProps<Question>> => {
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

export const sourcing = async (
  pageNum: number = 1,
): Promise<InfinityProps<Outsource>> => {
  const res = await axios.get(`/api/sourcing/user?page=${pageNum && pageNum}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageNum,
    isLast: pageNum >= res.data.response.totalPages,
    total: res.data.response?.total,
    totalPages: res.data.response.totalPages,
  };
};

export const coinHistory = async (
  pageNum: number = 1,
): Promise<InfinityProps<CoinHistory>> => {
  const res = await axios.get(
    `/api/payments/history?page=${pageNum && pageNum}`,
  );
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageNum,
    isLast: pageNum >= res.data.response.totalPages,
    total: res.data.response?.total,
    totalPages: res.data.response.totalPages,
  };
};
export const coinReserv = async (
  pageNum: number = 1,
): Promise<InfinityProps<CoinReserv>> => {
  const res = await axios.get(
    `/api/payments/reserv?page=${pageNum && pageNum}`,
  );
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageNum,
    isLast: pageNum >= res.data.response.totalPages,
    totalPages: res.data.response.totalPages,
    total: res.data.response?.total,
  };
};

export const updatePf = async (data: CreatePortfolio) => {
  return await (
    await axios.patch(`/api/users/pf`, data)
  ).data;
};

export const getPf = async (userId: number): Promise<Maker> => {
  const res = await axios.get(`/api/users/pf?userId=` + userId);
  // const res = (await axios.get(`/api/users/pf?userId=` + userId)).data.response;
  return res.data.response;
};

export const getPfs = async (
  pageParam?: number,
  keyword?: string,
): Promise<InfinityProps<Maker>> => {
  const res = await axios.get(
    `/api/users/pfs?page=${pageParam}${keyword ? '&keyword=' + keyword : ''}`,
  );
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageParam,
    isLast: pageParam >= res.data.response.totalPages,
    total: res.data.response?.total,
    totalPages: res.data.response.totalPages,
  };
};
