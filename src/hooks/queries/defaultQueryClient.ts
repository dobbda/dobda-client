import { QueryClient } from "react-query";

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
				refetchOnWindowFocus: false,
        staleTime: Infinity, // 마운트된후 데이터 만료시간
        cacheTime: 3000,//unmount 된후 데이터 유지시간
        retry:2,//false, true,
      },
    },
  });
};
