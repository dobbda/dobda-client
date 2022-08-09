import { QueryClient } from "react-query";

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
				refetchOnWindowFocus: false,
        // staleTime: 1000*10, // 마운트된후 데이터 만료시간
        retry:2,//false, true,
      },
    },
  });
};
