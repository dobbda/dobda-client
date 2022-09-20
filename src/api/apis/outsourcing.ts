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
export const outsourceDetail = async <T>(id: number): Promise<T> => {
  return (await axios.get(`/api/outsource/${id}`)).data?.response;
  // .catch(err=>console.log("axios error: " + err))
};

export const addOutsource = async (question: CreateOutsource, qid?: number): Promise<Outsource> => {
  return (await axios.post('/api/outsource', question)).data.response;
};
export const updateOutsource = async (data: CreateOutsource, id: number): Promise<Outsource> => {
  return (await axios.patch(`/api/outsource/${id}`, data)).data.response;
};
export const delOutsource = async <T>(id: number): Promise<T> => {
  return (await axios.delete(`/api/outsource/${id}`)).data;
};

// 답변
export const addEnquiry = async (data: CreateComment): Promise<AxiosResponse> => {
  return await axios.post(`/api/enquiries`, data);
};

export const updateEnquiry = async ({ id, data }: { id?: number; data: CreateComment }): Promise<AxiosResponse> => {
  return await axios.patch(`/api/enquiries/${id}`, data);
};
export const getEnquiries = async (id: number): Promise<Enquiry[]> => {
  return (await axios.get(`/api/enquiries?oid=${id}`)).data?.response.enquiries;
};
export const delEnquiry = async (id: number): Promise<AxiosResponse> => {
  return (await axios.delete(`/api/enquiries/${id}`)).data;
};

// 댓글
export const addReply = async (data: CreateComment): Promise<AxiosResponse> => {
  return await axios.post(`/api/replies`, data);
};
export const getReplies = async (eid: number): Promise<Reply[]> => {
  console.log(eid);
  return (await axios.get(`/api/replies?eid=${eid}`)).data.response.replies;
};
