export const Categories = {
  questions: '질문',
  outsourcing: '외주',
  myPost: '내 글 ',
};
export const CategoryList = Object.keys(Categories) as CategoriesType[];
export type CategoriesType = keyof typeof Categories;
