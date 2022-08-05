import { ReqQuestion, ResQuestion } from 'src/types/index';
import axios, { AxiosResponse } from "axios";

const addQuestion = async (question: ReqQuestion): Promise<ResQuestion> => {
	return await axios.post('/api/questions',question)
	.then(res=>{if(res.data.success) return res.data.response})
	.catch(err=>console.log("axios error: " + err.request || err.response))
}

// 질문글 전체조회
const getQuestions = async(): Promise<ResQuestion> => {
	return await axios.get('/api/questions')
	.then(res=>{if(res.data.success) return res.data.response.result})
	.catch(err=>console.log("axios error: " + err))
};

//질문글 상세조회
const detailQuestion = async(id:number) : Promise<AxiosResponse> => {
	return await axios.get(`/api/questions/${id}`).then(res =>res.data)
	.catch(err=>console.log("axios error: " + err))
};

const updateQuestion = async({id, data}:{id:number, data: ReqQuestion}):Promise<ResQuestion> => {
	return await axios.patch(`/api/questions/${id}`, data).then(res =>res.data) 
};


export {getQuestions, detailQuestion, updateQuestion, addQuestion }
