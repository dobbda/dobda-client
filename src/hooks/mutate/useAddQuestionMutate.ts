import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateQuestion, Question } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';

const useAddQuestionMutate = (mutationFn: any, qid?: number) => {
  const queryClient = useQueryClient();
  return useMutation((data: CreateQuestion) => mutationFn(data, qid ? qid : null), {
    onSuccess: async (newQuestion: Question) => {
      queryClient.cancelQueries([keys.questions()]);
      const oldData = queryClient.getQueryData(keys.questions());
      const oldDetail = queryClient.getQueryData(keys.qDetail(newQuestion.id));
      let update = false;
      if (oldData) {
        queryClient.setQueryData(keys.questions(), (oldData: any) => {
					if(newQuestion.createdAt === newQuestion.updatedAt){
						const updatedData = produce(oldData, (draft: any) => {
							draft.pages[0].result.unshift(newQuestion);
						});
						return updatedData;
					}
					if(oldData) {
						const updatedData = produce(oldData, (draft: any) => {
							draft.pages[0].result.unshift(newQuestion);
							draft.pages.map((pages: any)=> pages.result.map((page: Question) =>{
								if(page.id === newQuestion.id) return newQuestion;
								return page;
							}))
						});
						return updatedData;
					}


        });
      } 
			if(oldDetail){
				queryClient.cancelQueries(keys.qDetail(newQuestion.id));
				queryClient.invalidateQueries(keys.qDetail(newQuestion.id))
			}
    },

    onError: (a, b, c) => {
			console.log(a,b,c)
		}
  });
};

export default useAddQuestionMutate;
