import { Question, ResQuestion } from 'src/types/index';
import axios, { AxiosResponse } from "axios";

const addQuestion = async (question: Question): Promise<AxiosResponse> => {
	return await axios.post('/api/questions',question)
	.then(res=>res.data).catch(err=>console.log("axios error: " + err.request || err.response))
}

// 질문글 전체조회
const getQuestions = async(): Promise<AxiosResponse<ResQuestion>> => {
	return await axios.get('/api/questions').then(res =>res.data.response.result)
	.catch(err=>console.log("axios error: " + err))
};

//질문글 상세조회
const detailQuestion = async(id:number) : Promise<AxiosResponse> => {
	return await axios.get(`/api/questions/${id}`).then(res =>res.data) 
};

const updateQuestion = async({id, data}:{id:number, data: Question}):Promise<AxiosResponse<ResQuestion>> => {
	return await axios.patch(`/api/questions/${id}`, data).then(res =>res.data) 
};


export {getQuestions, detailQuestion, updateQuestion, addQuestion }
