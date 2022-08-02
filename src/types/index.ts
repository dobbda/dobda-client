
export interface BaseUser {
  nickname: string,
  id: number, // 
}

export interface Default {
  id: string,
  createdAt?: Date,
	updatedAt?: Date,
}

export interface Auth extends Default{// 유저확인용
	email: string,
	name: string,
	avatar: string,
	nickname: string,
	coin: number,
	score: number,
}

export interface Comment extends Default {
	content: string,
	accepted: boolean,
	user:BaseUser,
}

////////////////////////////////////////////////////////////////
//// 								questions 															////
////////////////////////////////////////////////////////////////
export interface Question {
	title:string,
	content:string,
	coin: number,
	tagNames: string[],
}

export interface ResQuestion extends Question, Default {
  deadline: string,
  watch: number,
  user: BaseUser, 
  comments: Comment[],
	
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
  user: BaseUser, 
  comments: Comment[],
	
}

export interface MyInfo { //mypage

}


export interface UserProfile extends Default {

}

