import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { CreateOutsource, Outsource } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';


//this hooks, used when creating and updating servers and queries
// 요청량이 많으면 커스텀 업데이트, 페이지 단위일시 invalidate사용
const useAddOutsource = (mutationFn: any, qid?: number) => {
  const queryClient = useQueryClient();
  return useMutation((data: CreateOutsource) => mutationFn(data, qid ? qid : null), {
    onSuccess: async (newOutsource: Outsource) => {
			
      queryClient.cancelQueries([keys.outsources()]);

      const oldData = queryClient.getQueryData(keys.outsources());
      const oldDetail = queryClient.getQueryData(keys.oDetail(newOutsource.id));

      if (oldData) {
        queryClient.setQueryData(keys.outsources(), (oldData: any) => {
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
      if (oldDetail) {//수정시 상세페이지 업데이트
        queryClient.cancelQueries(keys.qDetail(newOutsource.id));
        queryClient.invalidateQueries(keys.qDetail(newOutsource.id));
      }
    },

    onError: (a, b, c) => {
      console.log(a, b, c);
    },
  });
};

export default useAddOutsource;
