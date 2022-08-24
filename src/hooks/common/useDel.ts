import { AxiosError, AxiosResponse } from 'axios';
import { MutationFunction, QueryKey, useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { CreateAnswer, CreateQuestion, Question, QuestionDetail } from 'src/types';
import { keys } from '../queries/queryKeys';
import produce from 'immer';
import { useQueryCount } from './useQueryCount';

export const useDelete = (id: number, queryKey: QueryKey) => {
  const queryClient = useQueryClient();
  return useMutation((fetch: MutationFunction<unknown, any>) => fetch(id), {
    onSuccess: (res: any) => {
      if (res.success) {
        const oldData = queryClient.getQueryData(queryKey) as any;
        // queryClient.cancelQueries(queryKey);
        // queryClient.invalidateQueries(queryKey);
        if (queryKey.includes('answers')) {
          queryClient.cancelQueries(queryKey);
          queryClient.invalidateQueries(queryKey);
        } else if (oldData.pages) {
					queryClient.cancelQueries(queryKey);
          queryClient.invalidateQueries(queryKey);
          // queryClient.cancelQueries(queryKey);
          // queryClient.setQueryData(queryKey, (oldData: any) =>
          //   produce(oldData, (draft: any) => {
          //     draft.pages?.map((pages: any) => pages?.result?.filter((page: any) => page.id !== id));
          //   }),
          // );
        }
      }
    },


    onError: (error: AxiosError) => {
      queryClient.invalidateQueries('serverErrorMessage');
      queryClient.setQueryData('serverErrorMessage', error?.response?.data?.error?.message);
    },
  });
};
