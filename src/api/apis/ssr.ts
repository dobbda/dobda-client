import {
  InfinityProps,
  Maker,
  Question,
  QuestionDetail,
} from '../../interface/index';
import { AxiosRequestConfig } from 'axios';
import { Auth } from 'src/interface';
import { http } from '../http';

export const auth = async (req: AxiosRequestConfig): Promise<Auth> => {
  try {
    return (
      await http.get('/auth', {
        headers: req?.headers,
      })
    ).data.response;
  } catch (e) {}
};

export const question = async (
  req: AxiosRequestConfig,
  id: string,
): Promise<QuestionDetail> => {
  try {
    return (
      await http.get(`/questions/` + id, {
        headers: req?.headers,
      })
    ).data?.response;
  } catch (e) {}
};
export const questions = async (
  pageParam: number = 1,
  title?: string,
): Promise<any> => {
  const res = await http.get(
    `/questions?page=${pageParam && pageParam}&title=${title && title}`,
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

export const sourcing = async (
  req: AxiosRequestConfig,
  id: string,
): Promise<QuestionDetail> => {
  try {
    return (
      await http.get(`/sourcing/` + id, {
        headers: req?.headers,
      })
    ).data?.response;
  } catch (e) {}
};

export const sourcings = async (
  pageParam: number = 1,
  title?: string,
): Promise<any> => {
  const res = await http.get(
    `/sourcing?page=${pageParam && pageParam}&title=${title && title}`,
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

export const portfolio = async (
  userId: number | string,
  req: AxiosRequestConfig,
): Promise<QuestionDetail> => {
  try {
    return (
      await http.get(`/users/pf?userId=` + userId, {
        headers: req?.headers,
      })
    ).data?.response;
  } catch (e) {}
};

export const getPf = async (userId: string | number): Promise<Maker> => {
  const res = await http.get(`/users/pf?userId=` + userId);
  return res.data.response;
};
