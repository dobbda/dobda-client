// import axios from 'axios';
// import React from 'react';
// import { useInfiniteQuery } from 'react-query';

// const useBlacklistQuery = () => {
//   const observerRef = React.useRef<IntersectionObserver>();
//   const boxRef = React.useRef<HTMLDivElement>(null);
//   // useInfiniteQuery에서 쓸 함수
//   const fetchBlacklist = async ({ pageParam = 1 }) => {
//     const response = await axios.get(`/api/---/${pageParam}`);
//     const result = response.data;
//     // axios로 받아온 데이터를 다음과 같이 변경!

//     return {
//       result: result.blacklist,
//       nextPage: pageParam + 1,
//       isLast: result.is_last,
//     };
//   };

//   const query = useInfiniteQuery('[blacklist]', fetchBlacklist, {
//     getNextPageParam: (lastPage, pages) => {
//       if (!lastPage.isLast) return lastPage.nextPage;
//       return undefined;
//     },
//     refetchOnWindowFocus: false,
//     refetchOnMount: true,
//     refetchOnReconnect: true,
//     retry: 1,
//   });

//   return query;
// };

import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { q } from 'src/api';
import { ResQuestion } from 'src/types';


// const useGetInfinityQ = ()=> {

type InfinityProps = {
  result: ResQuestion[];
  pageNum: number;
  isLast: boolean;
};
type Props = {
	title?: string, tag?:string, queryKey?:string
}

export const useGetInfinityQ = ({title, tag}:Props) => {

  const getInfinityQ = async (pageParam=1, title?: string): Promise<InfinityProps> => {
    const res = await axios.get(`/api/questions?page=${pageParam && pageParam}&title=${title && title}`);
    if (!res.data.success) return null;
    return {
      result: res.data.response.result,
      pageNum: pageParam,
      isLast: pageParam >= res.data.response.totalPages,
    };
  };
  const query = useInfiniteQuery(["allQuestion", {title:title&&title, tag:tag&&title}], ({pageParam})=>getInfinityQ(pageParam,title), {
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.isLast) return lastPage.pageNum+1;
      return undefined;
    },
		staleTime: Infinity,
  });

	return query;
};
