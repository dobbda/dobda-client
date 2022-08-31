import { AxiosError, AxiosResponse } from 'axios';
import produce from 'immer';
import { useRouter } from 'next/router';
import { MutationFunction, QueryKey, useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { keys } from '../queries/queryKeys';
import { useQueryCount } from './useQueryCount';
interface Props {
  id: number;
}
export const useDelete = <T extends Props>(id: number, queryKey: QueryKey) => {
  const queryClient = useQueryClient();
  const { setCount, setInfCount } = useQueryCount();
  const router = useRouter();
  // const befoUrl = router.locale(-1)
  return useMutation((fetch: MutationFunction<unknown, any>) => fetch(id), {
    onSuccess: (res: any) => {
      if (res.success) {
        const oldData = queryClient.getQueryData(queryKey) as any;
        queryClient.cancelQueries(queryKey);
        if (queryKey.includes('answers') || queryKey.includes('enquiries')) {
          queryClient.invalidateQueries(queryKey);
        } else if (queryKey.includes('detail')) {
          queryClient.setQueryData(queryKey.includes('question') ? keys.questions() : keys.outsources(), (oldData: any) =>
            produce(oldData, (draft: any) => {
              draft.pages = draft.pages.map((page: any) => {
                page.result = page.result.filter((item: any) => item.id !== id);
                return page;
              });
            }),
          );
          queryClient.removeQueries(queryKey);
        }
      }
    },

    onError: (error: AxiosError) => {
      queryClient.setQueryData('serverErrorMessage', error.response.data.error.message || '잘못된 요청입니다.');
      return error.response?.data?.error?.message || '잘못된 요청입니다.';
    },
  });
};
