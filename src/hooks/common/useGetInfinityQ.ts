import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { q } from 'src/api';
import { InfinityProps, Question } from 'src/types';
import { keys } from '../queries/queryKeys';


type Props = {
	title?: string, 
	tag?:string, 
	fetch:(pageParam:number,title:string)=>Promise<InfinityProps>,
}

export const useGetInfinityQ = ({ title, tag, fetch}:Props) => {

  const query = useInfiniteQuery(keys.questions(title), ({pageParam})=>fetch(pageParam,title), {
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.isLast) return lastPage.pageNum+1;
      return undefined;
    },
		staleTime: Infinity,
  });

	return query;
};
