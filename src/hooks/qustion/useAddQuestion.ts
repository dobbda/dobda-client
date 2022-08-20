import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { CreateQuestion, Question } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';

// 요청량이 많으면 커스텀 업데이트, 페이지 단위일시 invalidate사용
const useAddQuestion = (mutationFn: any, qid?: number) => {
  const queryClient = useQueryClient();
  return useMutation((data: CreateQuestion) => mutationFn(data, qid ? qid : null), {
    onSuccess: async (newQuestion: Question) => {
      queryClient.cancelQueries([keys.questions()]);
      const oldData = queryClient.getQueryData(keys.questions());
      const oldDetail = queryClient.getQueryData(keys.qDetail(newQuestion.id));
      if (oldData) {
        queryClient.setQueryData(keys.questions(), (oldData: any) => {
          if (newQuestion.createdAt === newQuestion.updatedAt) {
            const updatedData = produce(oldData, (draft: any) => {
              draft.pages[0].result.unshift(newQuestion);
            });
            return updatedData;
          }
          if (oldData) {
            const updatedData = produce(oldData, (draft: any) => {
              draft.pages[0].result.unshift(newQuestion);
              draft.pages.map((pages: any) =>
                pages.result.map((page: Question) => {
                  if (page.id === newQuestion.id) return newQuestion;
                  return page;
                }),
              );
            });
            return updatedData;
          }
        });
      }
      if (oldDetail) {//수정시 상세페이지 업데이트
        queryClient.cancelQueries(keys.qDetail(newQuestion.id));
        queryClient.invalidateQueries(keys.qDetail(newQuestion.id));
      }
    },

    onError: (a, b, c) => {
      console.log(a, b, c);
    },
  });
};

export default useAddQuestion;
