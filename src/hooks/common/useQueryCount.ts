import produce from 'immer';
import { QueryKey, useInfiniteQuery, useQueryClient } from 'react-query';
import { Question } from 'src/types';
import { keys } from '../queries/queryKeys';

interface Props {
  queryKey: QueryKey;
  changeKey: string;
  findId?: number;
  upDown?: number;
  countVal?: number;
}
export const useQueryCount = () => {
  const queryClient = useQueryClient();

  const setCount = async ({ queryKey, changeKey, findId, upDown, countVal }: Props) => {
    await queryClient.cancelQueries(queryKey);
    const provider = queryClient.getQueryData<any>(queryKey);
    if (!provider) return;
    queryClient.setQueryData(queryKey, (oldData: any) => {
      const updateData = produce(oldData, (draft: any) => {
        if (findId) {
          draft?.map((data: any) => {
            if (data.id === findId) {
              return (data[changeKey] = countVal ? countVal : data[changeKey] + upDown);
            }
            return data;
          });
        } else draft[changeKey] = countVal ? countVal : draft[changeKey] + upDown;
      });
      return updateData;
    });
  };

  const setInfCount = async ({ queryKey, changeKey, findId, upDown, countVal }: Props) =>
    queryClient.setQueryData(queryKey, (oldData: any) => {
      if (oldData) {
        const updatedData = produce(oldData, (draft: any) => {
          draft.pages.map((pages: any) =>
            pages.result.map((page: any) => {
              if (page.id === findId) return (page[changeKey] = countVal ? countVal : page[changeKey] + upDown);
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
