import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateQuestion, Question } from 'src/types';
import { queryKeys } from '../queries/queryKeys';



export default function useAddQuestionMutate() {
  const queryClient = useQueryClient();
  return useMutation(q.addQuestion, {
    onSuccess: async (newQuestion: Question) => { // mutate가 호출될 때
			console.log('성공', newQuestion)
      await queryClient.cancelQueries([queryKeys.QUESTIONS]);
      queryClient.invalidateQueries([queryKeys.QUESTIONS]);
      },

		onError: (error) => { // 요청에 에러가 발생된 경우
        console.log('onError');
    },
    onSettled: () => { // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
        console.log('onSettled');
    }
    },)
  
  }
