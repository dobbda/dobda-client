import { OutsourceDetail, Answer, Comment, CreateAnswer } from 'src/types/index';
import { InfinityProps, CreateOutsource, Outsource } from 'src/types/index';
import axios, { AxiosResponse } from "axios";



// 질문글 전체조회 infinity
export const getInfinity = async (pageParam=1, title?: string): Promise<InfinityProps<Outsource>> => {
	const res = await axios.get(`/api/feature-request?page=${pageParam && pageParam}&title=${title && title}`);
	if (!res.data.success) return null;
	return {
		result: res.data.response.result,
		pageNum: pageParam,
		isLast: pageParam >= res.data.response.totalPages,
	};
};

//질문글 상세조회
export const outsourceDetail = async<T>(id:number) : Promise<T> => {
	return (await axios.get(`/api/feature-request/${id}`)).data?.response.outSourcing
	// .catch(err=>console.log("axios error: " + err))
};

export const addOutsource = async (question: CreateOutsource, qid?:number): Promise<Outsource> => {
	return (await axios.post('/api/feature-request',question)).data.response
}
export const updateOutsource = async(data:CreateOutsource, id:number, ):Promise<Outsource> => {
	return (await axios.patch(`/api/feature-request/${id}`, data)).data.response
};
export const delOutsource = async<T>(id:number) : Promise<T> => {
	return (await axios.delete(`/api/feature-request/${id}`)).data
};


// 답변
export const addAnswer = async(data:CreateAnswer) : Promise<AxiosResponse> => {
	return (await axios.post(`/api/answers`, data))
}
export const updateAnswer = async(data:CreateAnswer) : Promise<AxiosResponse> => {
	return (await axios.patch(`/api/answers`, data))
}
export const getAnswers = async(qid:number) : Promise<Answer[]> => {
	return (await axios.get(`/api/answers?qid=${qid}`)).data?.response.answers
}
export const delAnswers = async(aid:number) : Promise<Answer[]> => {
	return (await axios.delete(`/api/answers/${aid}`)).data
}

// 댓글
export const addComment = async(data:CreateAnswer) : Promise<AxiosResponse> => {
	return (await axios.post(`/api/comments`, data))
}
export const getComments = async(aid:number):Promise<Comment[]> => {
	return (await axios.get(`/api/comments?aid=${aid}`)).data.response.comments
}




