import { QuestionDetail, Answer, Comment, CreateAnswer } from 'src/types/index';
import { InfinityProps, CreateQuestion, Question } from 'src/types/index';
import axios, { AxiosResponse } from "axios";

export const addQuestion = async (question: CreateQuestion): Promise<Question> => {
	return (await axios.post('/api/questions',question)).data.response
}

// 질문글 전체조회 infinity
export const getInfinityQ = async (pageParam=1, title?: string): Promise<InfinityProps> => {
	const res = await axios.get(`/api/questions?page=${pageParam && pageParam}&title=${title && title}`);
	if (!res.data.success) return null;
	return {
		result: res.data.response.result,
		pageNum: pageParam,
		isLast: pageParam >= res.data.response.totalPages,
	};
};

//질문글 상세조회
export const questionDetail = async<T>(id:number) : Promise<T> => {
	return (await axios.get(`/api/questions/${id}`)).data?.response.question
	// .catch(err=>console.log("axios error: " + err))
};

export const updateQuestion = async({id, data}:{id:number, data: CreateQuestion}):Promise<Question> => {
	return (await axios.patch(`/api/questions/${id}`, data)).data
};

export const addAnswer = async(data:CreateAnswer) : Promise<AxiosResponse> => {
	return (await axios.post(`/api/answers`, data))
}
export const getAnswers = async(qid:number) : Promise<Answer[]> => {
	return (await axios.get(`/api/answers?qid=${qid}`)).data?.response.answers
}

export const addComment = async(data:CreateAnswer) : Promise<AxiosResponse> => {
	return (await axios.post(`/api/comments`, data))
}
export const getComments = async(aid:number):Promise<Comment[]> => {
	return (await axios.get(`/api/comments?aid=${aid}`)).data.response.comments
}




