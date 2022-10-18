import { Reply } from './../../types/index';
import { OutsourceDetail, Answer, Comment, CreateComment, Enquiry } from 'src/types/index';
import { InfinityProps, CreateOutsource, Outsource } from 'src/types/index';
import axios, { AxiosResponse } from 'axios';

// 질문글 전체조회 infinity
export const getInfinity = async (pageParam = 1, title?: string): Promise<InfinityProps<Outsource>> => {
  const res = await axios.get(`/api/outsource?page=${pageParam && pageParam}&title=${title && title}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageParam,
    isLast: pageParam >= res.data.response.totalPages,
  };
};

//질문글 상세조회
export const outsourceDetail = async <T>(id: number | string): Promise<T> => {
  return (await axios.get(`/api/outsource/${id}`)).data?.response;
};

export const addOutsource = async (question: CreateOutsource): Promise<Outsource> => {
  return (await axios.post('/api/outsource', question)).data.response;
};

export const updateOutsource = async (data: CreateOutsource, id: number | string): Promise<Outsource> => {
  return (await axios.patch(`/api/outsource/${id}`, data)).data.response;
};
export const delOutsource = async <T>(id: number | string): Promise<T> => {
  return (await axios.delete(`/api/outsource/${id}`)).data;
};

// 답변
export const addEnquiry = async (data: CreateComment): Promise<AxiosResponse> => {
  return await axios.post(`/api/enquiry`, data);
};

export const updateEnquiry = async ({ id, data }: { id?: number | string; data: CreateComment }): Promise<AxiosResponse> => {
  return await axios.patch(`/api/enquiry/${id}`, data);
};
export const getEnquiry = async (id: number | string): Promise<Enquiry[]> => {
  return (await axios.get(`/api/enquiry/${id}`)).data?.response.enquiry;
};
export const delEnquiry = async (id: number | string): Promise<AxiosResponse> => {
  return (await axios.delete(`/api/enquiry/${id}`)).data;
};

// 댓글
export const addReply = async (data: CreateComment): Promise<AxiosResponse> => {
  return await axios.post(`/api/replies`, data);
};
export const getReply = async (eid: number | string): Promise<Reply[]> => {
  return (await axios.get(`/api/replies/${eid}`)).data.response.replies;
};

// pick enquiry

export const pick = async (oid: number | string, eid: number | string): Promise<Reply[]> => {
  return (await axios.patch(`/api/enquiry/pick?eid=${eid}&oid=${oid}`)).data.response.success;
};
