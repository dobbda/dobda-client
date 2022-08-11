import { QuestionDetail, Answer, Comment } from 'src/types/index';
import { InfinityProps, CreateQuestion, Question } from 'src/types/index';
import axios, { AxiosResponse } from "axios";

const addQuestion = async (question: CreateQuestion): Promise<Question> => {
	return await axios.post('/api/questions',question)
	.then(res=>{if(res.data.success) return res.data.response})
	.catch(err=>console.log("axios error: " + err.request || err.response))
}

// 질문글 전체조회 infinity
const getInfinityQ = async (pageParam=1, title?: string): Promise<InfinityProps> => {
	const res = await axios.get(`/api/questions?page=${pageParam && pageParam}&title=${title && title}`);
	if (!res.data.success) return null;
	return {
		result: res.data.response.result,
		pageNum: pageParam,
		isLast: pageParam >= res.data.response.totalPages,
	};
};

//질문글 상세조회
const questionDetail = async<T>(id:number) : Promise<T> => {
	return await axios.get(`/api/questions/${id}`).then<T>(res =>res.data?.response.question)
	// .catch(err=>console.log("axios error: " + err))
};

const updateQuestion = async({id, data}:{id:number, data: CreateQuestion}):Promise<Question> => {
	return await axios.patch(`/api/questions/${id}`, data).then(res =>res.data) 
};


const getAnswers = async(qid:number):Promise<Answer[]> => {

	return await axios.get(`/api/answers?qid=${qid}`).then(res => res.data.response.answers)
}
const getComments = async(aid:number):Promise<Comment[]> => {
	return await axios.get(`/api/comments?aid=${aid}`).then(res => res.data.response.comments)
}

export {getInfinityQ, questionDetail, updateQuestion, addQuestion, getAnswers , getComments}
