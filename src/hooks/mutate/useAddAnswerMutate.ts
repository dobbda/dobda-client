import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateAnswer, CreateQuestion, Question, QuestionDetail } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';


//db query 요청량이 많으면 커스텀 업데이트, 페이지 단위는 invalidate사용
const useAddAnswerMutate = (qid: number) => {
  const queryClient = useQueryClient();
  return useMutation((data: CreateAnswer) => q.addAnswer(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.answers(qid));
      const oldDetail = queryClient.getQueryData<QuestionDetail>(keys.qDetail(qid));
      const oldData = queryClient.getQueryData(keys.questions());

      if (res.data.success) {
        //상세페이지 업데이트
        queryClient.setQueryData(
          keys.qDetail(qid),
          produce(oldDetail, (draft) => {
            draft.answersCount++;
          }),
        );
        await queryClient.invalidateQueries(keys.answers(qid));

        //전체 글에 업데이트 해주기
        queryClient.setQueryData(keys.questions(), (oldData: any) => {
          if (oldData) {
            const updatedData = produce(oldData, (draft: any) => {
              draft.pages.map((pages: any) =>
                pages.result.map((page: Question) => {
                  if (page.id === qid) return page.answersCount++;
                  return page;
                }),
              );
            });
            return updatedData;
          }
        });
      }
    },

    onError: (error) => {
      console.log('onError: ', error);
    },
  });
};

export default useAddAnswerMutate;
