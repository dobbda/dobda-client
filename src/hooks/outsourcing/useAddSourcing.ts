import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { CreateOutsource, Outsource } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

//this hooks, used when creating and updating servers and queries
// 요청량이 많으면 커스텀 업데이트, 페이지 단위일시 invalidate사용
const useAddSourcing = (mutationFn: any, sid?: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation((data: CreateOutsource) => mutationFn(data, sid ? sid : null), {
    //sid가 있을시 수정, 없을시 생성

    onSuccess: async (newOutsource: Outsource) => {
      queryClient.cancelQueries([keys.sourcings()]);
      // 메인페이지에 새로 추가
      if (!sid) {
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
      if (sid) {
        // infinityQuery data 커스텀 업데이트
        queryClient.cancelQueries(keys.oDetail(newOutsource.id));
        queryClient.invalidateQueries(keys.oDetail(newOutsource.id));

        queryClient.cancelQueries(keys.sourcings());
        queryClient.setQueryData(keys.sourcings(), (oldData: any) =>
          produce(oldData, (draft: any) => {
            oldData?.pages.forEach((pages: any, i: number) =>
              pages.result.forEach((v: any, j: number) => {
                if (v.id === newOutsource.id) {
                  draft.pages[i].result[j] = newOutsource;
                  return false;
                }
              }),
            );
          }),
        );
      }
    },

    onError: (error: any) => {
      let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
      queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
    },
  });
};

export default useAddSourcing;
