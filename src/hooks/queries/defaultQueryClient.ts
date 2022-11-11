import { QueryClient } from 'react-query';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // cacheTime: 1000 * 60 * 10,
        staleTime: Infinity,
        retry: 2, //false, true,
        useErrorBoundary: false,
      },

      mutations: {
        useErrorBoundary: false,
      },
    },
  });
};

export const ssrQuery = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
