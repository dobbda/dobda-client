import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { q } from 'src/api';
import { InfinityProps, Question } from 'src/types';


type Props = {
	title?: string, 
	tag?:string, 
	queryKey:string,
	fetch:(pageParam:number,title:string)=>Promise<InfinityProps>,
}

export const useGetInfinityQ = ({queryKey, title, tag, fetch}:Props) => {

  const query = useInfiniteQuery([queryKey, {title:title&&title, tag:tag&&title}], ({pageParam})=>fetch(pageParam,title), {
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.isLast) return lastPage.pageNum+1;
      return undefined;
    },
		staleTime: Infinity,
  });

	return query;
};
