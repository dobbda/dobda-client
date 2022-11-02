import { AxiosError } from 'axios';
import { InfiniteData, QueryKey, useInfiniteQuery, UseInfiniteQueryResult, QueryClient, useQueryClient } from 'react-query';

type Props = {
  title?: string;
  tag?: string;
  fetch: any;
  queryKey: QueryKey;
};

export const useGetInfinity = <T>({ title, tag, queryKey, fetch }: Props) => {
  const queryClient = useQueryClient();
  const {
    data: res,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    refetch,
    isLoading,
  }: UseInfiniteQueryResult = useInfiniteQuery(queryKey, ({ pageParam }) => fetch(pageParam, title), {
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.isLast) {
        return lastPage.pageNum + 1;
      }
      return undefined;
    },
    staleTime: Infinity,

    onError: (error: any) => {
      let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
      queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
    },
  });
  const data = res as InfiniteData<T>;
  return { data, fetchNextPage, hasNextPage, isSuccess, refetch, isLoading };
};
