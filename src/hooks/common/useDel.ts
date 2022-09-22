import { AxiosError, AxiosResponse } from 'axios';
import produce from 'immer';
import { useRouter } from 'next/router';
import { MutationFunction, QueryKey, useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { keys } from '../queries/queryKeys';
import { useQueryCount } from './useQueryCount';
interface Props {
  id: number;
}
export const useDelete = <T extends Props>(id: number, queryKey: QueryKey, parentId?: number) => {
  const queryClient = useQueryClient();
  const { setCount, setInfCount } = useQueryCount();
  const router = useRouter();
  // const befoUrl = router.locale(-1)
  return useMutation((fetch: MutationFunction<unknown, any>) => fetch(id), {
    onSuccess: (res: any) => {
      if (res.success) {
        queryClient.cancelQueries(queryKey);
        console.log(parentId);
        if (queryKey.includes('answers') || queryKey.includes('enquiries')) {
          queryClient.invalidateQueries(queryKey);
          queryKey.includes('answers') &&
            (setInfCount({ queryKey: keys.questions(), changeKey: 'answersCount', findId: parentId, upDown: -1 }),
            setCount({ queryKey: keys.qDetail(parentId), changeKey: 'answersCount', findId: parentId, upDown: -1 }));

          queryKey.includes('enquiries') &&
            (setInfCount({ queryKey: keys.outsources(), changeKey: 'enquiriesCount', findId: parentId, upDown: -1 }),
            setCount({ queryKey: keys.oDetail(parentId), changeKey: 'enquiriesCount', findId: parentId, upDown: -1 }));
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
      queryClient.setQueryData('serverErrorMessage', error.response?.data?.error?.message || '잘못된 요청입니다.');
      return error.response?.data?.error?.message || '잘못된 요청입니다.';
    },
  });
};
