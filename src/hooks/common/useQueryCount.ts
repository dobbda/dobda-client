import produce from 'immer';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { Question } from 'src/types';
import { keys } from '../queries/queryKeys';

export const useQueryCount = () => {
  const queryClient = useQueryClient();

  const setCount = async (queryKey: any, changeKey: string, int: number, findId?: number) => {
    await queryClient.cancelQueries(queryKey);
		const provider = queryClient.getQueryData<any>(queryKey)
		if(!provider) return ;
    queryClient.setQueryData(queryKey, (oldData: any) => {
      const updateData = produce(oldData, (draft: any) => {
        if (findId && oldData) {
          draft?.map((data: any) => {
            if (data.id === findId) {
              return (data[changeKey] = data[changeKey] + int);
            }
            return data;
          });
        } else draft[changeKey] = draft[changeKey] + int;
      });
      return updateData;
    });
  };

  const setInfCount = async (queryKey: any, changeKey: string, id: number, int: number) =>
    queryClient.setQueryData(queryKey, (oldData: any) => {
      if (oldData) {
        const updatedData = produce(oldData, (draft: any) => {
          draft.pages.map((pages: any) =>
            pages.result.map((page: any) => {
              if (page.id === id) return (page[changeKey] = page[changeKey] + int);
              return page;
            }),
          );
        });
        return updatedData;
      } else {
        queryClient.invalidateQueries(queryKey);
      }
    });

  return { setCount, setInfCount };
};
