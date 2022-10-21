import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { CreateOutsource, Outsource } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

//this hooks, used when creating and updating servers and queries
// 요청량이 많으면 커스텀 업데이트, 페이지 단위일시 invalidate사용
const useAddOutsource = (mutationFn: any, qid?: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation((data: CreateOutsource) => mutationFn(data, qid ? qid : null), {
    //qid가 있을시 수정, 없을시 생성

    onSuccess: async (newOutsource: Outsource) => {
      queryClient.cancelQueries([keys.sourcings()]);

      const oldData = queryClient.getQueryData(keys.sourcings());
      const oldDetail = queryClient.getQueryData(keys.oDetail(newOutsource.id));

      // 메인페이지에 새로 추가
      if (oldData) {
        queryClient.setQueryData(keys.sourcings(), (oldData: any) => {
          if (newOutsource.createdAt === newOutsource.updatedAt) {
            const updatedData = produce(oldData, (draft: any) => {
              draft.pages[0].result.unshift(newOutsource);
            });
            return updatedData;
          }

          if (oldData) {
            const updatedData = produce(oldData, (draft: any) => {
              draft.pages[0].result.unshift(newOutsource);
              draft.pages.map((pages: any) =>
                pages.result.map((page: Outsource) => {
                  if (page.id === newOutsource.id) return newOutsource;
                  return page;
                }),
              );
            });
            return updatedData;
          }
        });
      }

      //  patch
      if (qid) {
        // infinityQuery data 커스텀 업데이트
        queryClient.cancelQueries(keys.oDetail(newOutsource.id));
        queryClient.invalidateQueries(keys.oDetail(newOutsource.id));

        queryClient.setQueryData(keys.questions(), (oldData: any) => {
          if (oldData) {
            const updatedData = produce(oldData, (draft: any) => {
              draft.pages.map((pages: any) =>
                pages.result.map((page: any) => {
                  if (page.id === qid) return (page = { ...newOutsource });
                  return page;
                }),
              );
            });

            return updatedData;
          }
        });
      }
      router.push(`/custom-project/requests/` + newOutsource.id);
    },

    onError: (error: any) => {
      let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
      queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
    },
  });
};

export default useAddOutsource;
