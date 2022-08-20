export interface Author {
  nickname: string;
  id: number; //
  avatar: string;
  email?: string;
}

export interface Default {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateAnswer {
  qid?: number;
  answerId?: number;
  content: string;
}
export interface CreateComment {
  qid: number;
  content: string;
}

export interface Auth extends Default {
  // 유저확인용
  email: string;
  name: string;
  avatar: string;
  nickname: string;
  coin: number;
  score: number;
  skill: string[];
  description: string;
}

export interface Answer extends Default {
  content: string;
  accepted: boolean;
  author: Author;
  commentsCount: number;
  authorId: number;
  questionId: number;
}

export interface Comment extends Default {
  content: string;
  authorId: number;
  answerId: number;
  author: Author;
}

export type Tags = {
  name: string;
};

////////////////////////////////////////////////////////////////
//// 								questions 															////
////////////////////////////////////////////////////////////////
export interface CreateQuestion {
  // add
  title: string;
  content: string;
  coin: number;
  tagNames: string[] | Tags[];
}

export interface Question extends Default {
  //get
  title: string;
  watch: number;
  coin: number;
  authorId: number;
  accepteAnswerId: boolean;
  author: Author;
  answersCount: number;
  tagNames: Tags[];
}

export interface QuestionDetail extends Question {
  // answer: Answer[],
  content: string;
}

////////////////////////////////////////////////////////////////
//// 						OutSourcing 							     							////
////////////////////////////////////////////////////////////////
export interface CreateOutsource {
  // add
  title: string;
  content: string;
  coin: number;
  tagNames: string[];
	deadline: string;
}

export interface Outsource extends Default {
  title: string;
  watch: number;
  coin: number;
  authorId: number;
  accepteAnswerId: boolean;
  author: Author;
  answersCount: number;
  tagNames: Tags[];
  deadeline: Date;
}

export interface OutsourceDetail extends Question {
  content: string;
}

////////////////////////////////////////////////////////////////
//// 						users 							     							////
////////////////////////////////////////////////////////////////

export interface MyInfo {
  //mypage
}

export interface UserProfile extends Default {
  email: string;
  avatar: string;
  nickname: string;
  score: 0;
  skill: string[];
  description: string;
	outsourceCount: 0;
	questionCount: 0;
	accepteRate: 0;
}

export type InfinityProps<T> = {
  result: T;
  pageNum: number;
  isLast: boolean;
};
