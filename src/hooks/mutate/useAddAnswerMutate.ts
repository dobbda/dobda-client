import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateAnswer, CreateQuestion, Question } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';

const useAddAnswerMutate = (qid: number) => {
  const queryClient = useQueryClient();
  return useMutation((data: CreateAnswer) => q.addAnswer(data), {
    onSuccess: async (res: AxiosResponse) => {
      await queryClient.cancelQueries(keys.answers(qid));
      if (res.data.success) {
        await queryClient.invalidateQueries(keys.answers(qid));
      }
    },

    onError: (error) => {
      console.log('onError: ', error);
    },
  });
};

export default useAddAnswerMutate;
