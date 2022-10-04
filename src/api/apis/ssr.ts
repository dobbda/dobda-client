import { QuestionDetail } from './../../types/index';
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

export const outsourcing = async (req: AxiosRequestConfig, id: string): Promise<QuestionDetail> => {
  try {
    return (
      await http.get(`/outsource/` + id, {
        headers: req?.headers,
      })
    ).data?.response;
  } catch (e) {}
};
