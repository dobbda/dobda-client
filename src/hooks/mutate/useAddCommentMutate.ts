import { Answer } from './../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateAnswer, CreateQuestion, Question } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { useRouter } from 'next/router';

const useAddCommentMutate = (aid: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { qid } = router.query;
  return useMutation((data: CreateAnswer) => q.addComment(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.comment(aid));
      if (res.data.success) {
        await queryClient.invalidateQueries(keys.comment(aid));

        // 답변갯수 업데이트,
        // why
        // 새로등록된 답변에 댓글 등록시 commentsCount가 0이라 refetch가 안됨
        // 서버요청 줄이기위함
        queryClient.setQueryData(keys.answers(Number(qid)), (oldData: any) => {
          const updateAnswer = produce(oldData, (draft: any) => {
            draft.map((answer: Answer) => {
              if (answer.id === aid) {
                return answer.commentsCount++;
              }
              return answer;
            });
          });
          return updateAnswer;
        });
      }
    },

    onError: (error) => {
      console.log('onError: ', error);
    },
  });
};

export default useAddCommentMutate;
