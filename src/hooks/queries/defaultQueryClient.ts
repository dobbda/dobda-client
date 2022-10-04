import { QueryClient } from 'react-query';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 1000 * 60 * 10,
        retry: 2, //false, true,
      },
      mutations: {
        // useErrorBoundary: true,
      },
    },
  });
};
