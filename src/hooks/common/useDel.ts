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
        if (queryKey.toString().includes('answers') || queryKey.includes('enquiry')) {
          queryClient.invalidateQueries(queryKey);
          console.log('답변삭제 1');
          queryKey.includes('answers') &&
            (setInfCount({ queryKey: keys.questions(), changeKey: 'answersCount', findId: parentId, upDown: -1 }),
            setCount({ queryKey: keys.qDetail(parentId), changeKey: 'answersCount', findId: parentId, upDown: -1 }));

          console.log('답변삭제 2');

          queryKey.includes('enquiry') &&
            (setInfCount({ queryKey: keys.sourcings(), changeKey: 'enquiryCount', findId: parentId, upDown: -1 }),
            setCount({ queryKey: keys.oDetail(parentId), changeKey: 'enquiryCount', findId: parentId, upDown: -1 }));
        } else if (queryKey.toString().includes('detail')) {
          queryClient.setQueryData(
            queryKey.toString().includes('question') ? keys.questions() : keys.sourcings(),
            (oldData: any) =>
              produce(oldData, (draft: any) => {
                draft.result = draft.result.filter((item: any) => item.id !== id);
              }),
          );
          queryClient.removeQueries(queryKey);
        }
      }
    },

    onError: (error: any) => {
      let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
      queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
    },
  });
};
