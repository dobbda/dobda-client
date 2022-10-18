export interface Author {
  nickname: string;
  id: number; //
  avatar: string;
  email?: string;
  hashId: string;
}

export interface Default {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface Alarm extends Default {
  type: string;
}

export interface Noti {
  title: string;
  createdAt: string;
  content: string;
  image: string;
  id: number;
  link?: string;
}

export interface UserUpdate {
  name?: string;
  description?: string;
  nickname?: string;
  avatar: string;
  skill: string[];
}
////////////////////////////////////////////////////////////////
//// 								common 															////
////////////////////////////////////////////////////////////////

export interface IDTYPE {
  oid?: number; //outsourcing id
  eid?: number; // enquiry id
  qid?: number; //question id
  aid?: number; //answer id
}

export interface CreateComment extends IDTYPE {
  content: string;
}

export type Tags = {
  name: string;
  id: number;
};
export interface Auth extends Default {
  email: string;
  name: string;
  avatar: string;
  nickname: string;
  coin: number;
  score: number;
  skill: string[];
  role: number;
  description: string;
  getAcceptCount: number;
  setAcceptCount: number;
  questionsCount: number;
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
  acceptedAnswerId: number;
  author: Author;
  answersCount: number;
  tagNames: Tags[];
}

export interface QuestionDetail extends Question {
  content: string;
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
////////////////////////////////////////////////////////////////
//// 						OutSourcing 							     							////
////////////////////////////////////////////////////////////////

export enum ProgressStatus {
  Pending = 1, // 답변 기다리는 중
  Pick, //유저선택 => 결제 대기중
  Proceeding, //결제 완료 => 작업 시작
  Submit, //작업물 제출 => 등록유저 완료 대기중
  Clear, // 캐쉬 전달 => clear
}
export enum Progress {
  Pending = 'Pending', // 답변 기다리는 중
  Pick = 'Pick', //유저선택 => 결제 대기중
  Proceeding = 'Proceeding', //결제 완료 => 작업 시작
  Submit = 'Submit', //작업물 제출 => 등록유저 완료 대기중
  Clear = 'Clear', // 캐쉬 전달 => clear
}

export interface CreateOutsource {
  // add
  title: string;
  content: string;
  coin: number;
  tagNames: string[];
  deadline: string;
  cardImage?: string;
}

export interface Outsource extends Default {
  title: string;
  watch: number;
  coin: number;
  authorId: number;
  accepteAnswerId: boolean;
  author: Author;
  enquiryCount: number;
  tagNames: Tags[];
  deadline: string;
  cardImage?: string;
  progress: Progress;
}

export interface OutsourceDetail extends Outsource {
  content: string;
  pickEnId: number | null;
}

export interface Enquiry extends Default {
  content: string;
  accepted: boolean;
  author: Author;
  repliesCount: number;
  authorId: number;
  outSourcingId: number;
  selected: boolean;
}

export interface Reply extends Default {
  content: string;
  authorId: number;
  answerId?: number;
  enquiryId?: number;
  author: Author;
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

////////////////////////////////////////////////////////////////
//// 						card InfinityProps 							     							////
////////////////////////////////////////////////////////////////
export type InfinityProps<T> = {
  result: T;
  pageNum: number;
  isLast: boolean;
};
