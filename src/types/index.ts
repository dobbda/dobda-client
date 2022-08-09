
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
}

export interface Comment extends Default {
	content: string,
	accepted: boolean,
	author:Author,
}

////////////////////////////////////////////////////////////////
//// 								questions 															////
////////////////////////////////////////////////////////////////

export type Tags = {
	name: string,
}
export interface ReqQuestion { // add
	title: string,
	content: string,
	coin: number,
	tagNames: Tags[]
}


export interface ResQuestion extends ReqQuestion, Default { //get
	title: string,
	watch: number,
	coin: number,
	authorId: number,
	accepteAnswerId: boolean,
  author: Author,
	answersCount: number,
}

export interface DetailQuestion extends ResQuestion {
	answer: Answer[]
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

