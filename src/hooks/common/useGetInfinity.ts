import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { QueryKey, useInfiniteQuery } from 'react-query';
import { q } from 'src/api';
import { InfinityProps, Question } from 'src/types';
import { keys } from '../queries/queryKeys';


type Props = {
	title?: string, 
	tag?:string, 
	fetch:any,
	queryKey: QueryKey,
}

export const useGetInfinity = ({ title, tag, queryKey, fetch}:Props) => {

  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(queryKey, ({pageParam})=>fetch(pageParam,title), {
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.isLast) return lastPage.pageNum+1;
      return undefined;
    },
		staleTime: Infinity,
  });
	
	return { data, fetchNextPage, hasNextPage, isSuccess };
};
