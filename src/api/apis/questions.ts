import { QuestionDetail, Answer, Comment, CreateComment } from 'src/interface/index';
import { InfinityProps, CreateQuestion, Question } from 'src/interface/index';
import axios, { AxiosResponse } from 'axios';

// 질문글 전체조회 infinity
export const getInfinity = async (pageParam: number = 1, keyword?: string): Promise<InfinityProps<Question>> => {
  const res = await axios.get(`/api/questions?page=${pageParam}${keyword ? '&keyword=' + keyword : ''}`);
  if (!res.data.success) return null;
  return {
    result: res.data.response.result,
    pageNum: pageParam,
    isLast: pageParam >= res.data.response.totalPages,
    total: res.data.response?.total,
    totalPages: res.data.response.totalPages,
  };
};

//질문글 상세조회
export const questionDetail = async <T>(id: number | string): Promise<T> => {
  return (await axios.get(`/api/questions/${id}`)).data?.response;
  // .catch(err=>console.log("axios error: " + err))
};

// 질문생성
export const addQuestion = async (question: CreateQuestion, qid?: number | string): Promise<Question> => {
  return (await axios.post('/api/questions', question)).data.response;
};

// 질문 업데이트
export const updateQuestion = async (data: CreateQuestion, id: number | string): Promise<Question> => {
  return (await axios.patch(`/api/questions/${id}`, data)).data.response;
};

// 질문삭제
export const delQuestion = async <T>(id: number | string): Promise<T> => {
  return (await axios.delete(`/api/questions/${id}`)).data;
};

// 답변 생성
export const addAnswer = async (data: CreateComment): Promise<AxiosResponse> => {
  return await axios.post(`/api/answers`, data);
};

// 답변 업데이트
export const updateAnswer = async (id: number | string, data: CreateComment): Promise<AxiosResponse> => {
  return await axios.patch(`/api/answers/${id}`, data);
};

// 답변 불러오기
export const getAnswers = async (qid: number | string): Promise<Answer[]> => {
  return (await axios.get(`/api/answers/${qid}`)).data?.response.answers;
};

// 답변삭제
export const delAnswers = async (aid: number | string): Promise<Answer[]> => {
  return (await axios.delete(`/api/answers/${aid}`)).data;
};

// 댓글 생성
export const addComment = async (data: CreateComment): Promise<AxiosResponse> => {
  return await axios.post(`/api/comments`, data);
};
// 댓글 블로오기
export const getComments = async (aid: number | string): Promise<Comment[]> => {
  return (await axios.get(`/api/comments/${aid}`)).data.response.comments;
};

// 조회수
export const accept = async (aid: number | string) => {
  return (await axios.patch(`/api/answers/accept/${aid}`)).data.response;
};
