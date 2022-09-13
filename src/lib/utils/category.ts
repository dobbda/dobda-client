export const Categories = {
  questions: '질문',
  featureRequest: '외주',
  myPost: '내글',
};
export const CategoryList = Object.keys(Categories) as CategoriesType[];
export type CategoriesType = keyof typeof Categories;
