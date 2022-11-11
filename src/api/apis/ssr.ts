import { InfinityProps, Question, QuestionDetail } from './../../types/index';
import { AxiosRequestConfig } from 'axios';
import { Auth } from 'src/types';
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

export const question = async (req: AxiosRequestConfig, id: string): Promise<QuestionDetail> => {
  try {
    return (
      await http.get(`/questions/` + id, {
        headers: req?.headers,
      })
    ).data?.response;
  } catch (e) {}
};
export const questions = async (pageParam: number = 1, title?: string): Promise<any> => {
  const res = await http.get(`/questions?page=${pageParam && pageParam}&title=${title && title}`);
  if (!res.data.success) return null;
  return {
    pages: [
      {
        result: res.data.response.result,
        pageNum: pageParam,
        isLast: pageParam >= res.data.response.totalPages,
        total: res.data.response?.total,
        totalPages: res.data.response.totalPages,
      },
    ],
    pageParams: [0],
  };
};

export const sourcing = async (req: AxiosRequestConfig, id: string): Promise<QuestionDetail> => {
  try {
    return (
      await http.get(`/outsource/` + id, {
        headers: req?.headers,
      })
    ).data?.response;
  } catch (e) {}
};

export const sourcings = async (pageParam: number = 1, title?: string): Promise<any> => {
  const res = await http.get(`/outSource?page=${pageParam && pageParam}&title=${title && title}`);
  if (!res.data.success) return null;
  return {
    pages: [
      {
        result: res.data.response.result,
        pageNum: pageParam,
        isLast: pageParam >= res.data.response.totalPages,
        total: res.data.response?.total,
        totalPages: res.data.response.totalPages,
      },
    ],
    pageParams: [0],
  };
};
