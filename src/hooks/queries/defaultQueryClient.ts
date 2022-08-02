import { QueryClient } from "react-query";



export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: 5000,
        retry:0,
      },
    },
  });
};
