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
  value?: string;
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
          let found = draft.find((v: any) => v.id == findId);
          found[changeKey] = countVal ? countVal : found[changeKey] + upDown;
        } else {
          draft[changeKey] = countVal ? countVal : draft[changeKey] + upDown;
        }
      });
      return updateData;
    });
  };

  const setInfCount = async ({ queryKey, changeKey, findId, upDown, countVal }: Props) =>
    queryClient.setQueryData(queryKey, (oldData: any) => {
      if (oldData) {
        const updatedData = produce(oldData, (draft: any) => {
          draft.result = draft.result.map((page: any) => {
            if (page.id === findId) {
              page[changeKey] = countVal ? countVal : page[changeKey] + upDown;
              return page;
            }
            return page;
          });
        });
        return updatedData;
      } else {
        queryClient.invalidateQueries(queryKey);
      }
    });

  const setUpdate = async ({ queryKey, changeKey, findId, value }: Props) => {
    await queryClient.cancelQueries(queryKey);
    const provider = queryClient.getQueryData<any>(queryKey);
    if (!provider) return;
    queryClient.setQueryData(queryKey, (oldData: any) => {
      const updateData = produce(oldData, (draft: any) => {
        draft?.map((data: any) => {
          if (data.id === findId) {
            return (data[changeKey] = value);
          }
          return data;
        });
      });
      return updateData;
    });
  };

  return { setCount, setInfCount, setUpdate };
};
