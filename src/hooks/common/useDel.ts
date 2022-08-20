import { AxiosError, AxiosResponse } from 'axios';
import { MutationFunction, QueryKey, useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateAnswer, CreateQuestion, Question, QuestionDetail } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { useQueryCount } from './useQueryCount';

export const useDelete = (id:number,queryKey:QueryKey)=> {
	const queryClient = useQueryClient();
	return useMutation((fetch:MutationFunction<unknown, any> ) => fetch(id),{
		onSuccess: (res:any) => {
			if(res.success){
				queryClient.cancelQueries(queryKey);
				const oldData = queryClient.getQueryData(queryKey)
				if(oldData) {
					queryClient.invalidateQueries(queryKey)
				}
			}
		},
		onError:()=> {
			const mutationCache = queryClient.getMutationCache();
			// mutationCache.clear();
		}
	})
}


