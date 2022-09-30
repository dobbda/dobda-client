import { QueryClient } from 'react-query';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: Infinity,
        retry: 2, //false, true,
      },
      mutations: {
        // useErrorBoundary: true,
      },
    },
  });
};
