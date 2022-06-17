
interface BaseUser {
  nickname: string;
  id: string; // 
}

export interface Detail {
  id: string;
  title: string,
  hashtags: string[],
  deadline?: string,
  coin?: number,
  createdAt: string,
  content: string, //?
  watch: number,
  // addbells: BaseUser[],

  comments: Comment[],
  user: BaseUser,
  
  
}

export interface User {

}

export interface Me {

}

export interface Caard {

}

export interface Comment {

}