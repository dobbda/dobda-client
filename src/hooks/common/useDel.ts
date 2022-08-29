import { AxiosError, AxiosResponse } from 'axios';
import { MutationFunction, QueryKey, useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { keys } from '../queries/queryKeys';
import { useQueryCount } from './useQueryCount';

export const useDelete = (id: number, queryKey: QueryKey) => {
  const queryClient = useQueryClient();
	const {setCount, setInfCount} = useQueryCount()

  return useMutation((fetch: MutationFunction<unknown, any>) => fetch(id), {
    onSuccess: (res: any) => {
      if (res.success) {
        const oldData = queryClient.getQueryData(queryKey) as any;
				queryClient.cancelQueries(queryKey);
        if (queryKey.includes('answers') || queryKey.includes("enquiries")) {
					console.log("여기: ",oldData[0]?.questionId, queryKey, queryKey.includes('answers'), queryKey.includes("enquiries"))
					oldData[0]?.questionId&& setInfCount(keys.questions(), 'answersCount', oldData[0].questionId, -1,);
					oldData[0]?.outSourcingId&& setInfCount(keys.outsources(), 'enquiriesCount', oldData[0].outSourcingId, -1);
          queryClient.invalidateQueries(queryKey);
        } 
				
				else if (queryKey.includes('Detail')){
          queryClient.removeQueries(queryKey);
				}
				
				else if (oldData.pages) {
          queryClient.invalidateQueries(queryKey);
        }
      }
    },

		onError: (error: AxiosError) => {
			queryClient.setQueryData("serverErrorMessage", error.response.data.error.message || "잘못된 요청입니다.");
		return error.response?.data?.error?.message || "잘못된 요청입니다."
	},
  });
};
