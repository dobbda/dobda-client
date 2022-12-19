import { QueryClient } from 'react-query';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // cacheTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 10,
        retry: false, //false, true,
        useErrorBoundary: false,
      },

      mutations: {
        useErrorBoundary: false,
      },
    },
  });
};

export const ssrQuery = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 30,
      },
    },
  });
};
