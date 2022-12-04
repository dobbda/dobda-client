export const Categories = {
  questions: '질문',
  outsourcing: '소・싱',
  developer: '메이커 프로필',
  teambuild: '팀 빌딩',
};
export const CategoryList = Object.keys(Categories) as CategoriesType[];
export type CategoriesType = keyof typeof Categories;

export const MyPost = {
  questions: '질문 목록',
  outsourcing: '소・싱 목록',
};
export const MyPostList = Object.values(MyPost) as PostType[];
export type PostType = keyof typeof Categories;

export type EditType = 'answers' | 'comments' | 'replies' | 'enquiry';

export interface Exp {
  access_exp?: number | null;
  refresh_exp?: number | null;
}
