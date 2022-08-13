import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateQuestion, Question } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';

const useAddQuestionMutate = () => {
  const queryClient = useQueryClient();
  return useMutation((data: CreateQuestion) => q.addQuestion(data), {
		
    onSuccess: async (newQuestion: Question) => {
      queryClient.cancelQueries([keys.questions()]);
      const oldData = queryClient.getQueryData(keys.questions());
      if (oldData) {
        queryClient.setQueryData(keys.questions(), (oldData: any) => {
          const updatedData = produce(oldData, (draft: any) => {
            draft.pages[0].result.unshift(newQuestion);
          });
          return updatedData;
        });
      } else {
        queryClient.invalidateQueries(keys.questions());
      }
    },

    onError: (error) => {
      console.log('onError: ', error);
    },
  });
};

export default useAddQuestionMutate;
