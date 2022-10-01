export const Categories = {
  questions: '질문',
  outsourcing: '프로젝트 요청',
  myPost: '내 글 ',
};
export const CategoryList = Object.keys(Categories) as CategoriesType[];
export type CategoriesType = keyof typeof Categories;

export type editContentType = 'answers' | 'comments' | 'replies' | 'enquiries';
