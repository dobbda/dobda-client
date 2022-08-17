
export interface Author {
  nickname: string,
  id: number, // 
	avatar: string,
	email?: string,
}

export interface Default {
  id: number,
  createdAt: Date,
	updatedAt: Date,
}
export interface CreateAnswer {
	qid?:number,
	answerId?:number,
	content: string,
}
export interface CreateComment {
	qid:number,
	content: string,
}

export interface Auth extends Default{// 유저확인용
	email: string,
	name: string,
	avatar: string,
	nickname: string,
	coin: number,
	score: number,
	skill: string[],
}

export interface Answer extends Default  {
	content: string,
	accepted: boolean,
	author:Author,
	commentsCount:number,
	authorId:number,
	questionId:number,
}

export interface Comment extends Default {
	content: string,
	authorId:number,
	answerId:number,
	author:Author,
}

////////////////////////////////////////////////////////////////
//// 								questions 															////
////////////////////////////////////////////////////////////////

export type Tags = {
	name: string,
}
export interface CreateQuestion { // add
	title: string,
	content: string,
	coin: number,
	tagNames: string[]|Tags[],
}


export interface Question extends Default { //get
	title: string,
	watch: number,
	coin: number,
	authorId: number,
	accepteAnswerId: boolean,
  author: Author,
	answersCount: number,
	tagNames:Tags[],
	
}

export interface QuestionDetail extends Question {
	// answer: Answer[],
	content: string,

}

////////////////////////////////////////////////////////////////
//// 						featureRequest 							     						////
////////////////////////////////////////////////////////////////

export interface FeatureRequest {
	title:string,
	content:string,
	coin:string,
	deadeline: Date,
	tagNames: string[],
}

export interface ResFeatureRequest extends FeatureRequest, Default {
  deadline: string,
  watch: number,
  author: Author, 
  comments: Comment[],
	
}

export interface MyInfo { //mypage

}


export interface UserProfile extends Default {

}


export type InfinityProps = {
  result: Question[];
  pageNum: number;
  isLast: boolean;
};