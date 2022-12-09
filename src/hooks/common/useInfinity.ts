import { InfinityProps } from '../../interface/index';
import { AxiosError } from 'axios';
import produce from 'immer';
import { useCallback } from 'react';
import { QueryKey, useQueryClient, useQuery, QueryFunction } from 'react-query';

type Props<T> = {
  fetch: (page: number) => Promise<InfinityProps<T>>;
  queryKey: QueryKey;
};

export const useInfinity = <T>({ queryKey, fetch }: Props<T>) => {
  const queryClient = useQueryClient();
  const { data, refetch, isLoading } = useQuery(queryKey, () => fetch(1), { retry: 2, staleTime: 1000 * 60 * 10 });

  const nextPage = useCallback(
    async (page?: number) => {
      if (!data.isLast) {
        const res = await fetch(page ? page : data.pageNum + 1);
        queryClient.setQueryData(queryKey, (old: InfinityProps<T>) =>
          produce(old, (draft: InfinityProps<T>) => {
            draft.result.push(...res.result);
            draft.pageNum = res.pageNum;
            draft.isLast = res.isLast;
          }),
        );
        queryClient.fetchQuery(queryKey);
      }
    },
    [data],
  );
  const apply = () => {
    queryClient.fetchQuery(queryKey);
  };
  return { data, refetch, nextPage, isLoading };
};
