import { QueryClient } from "react-query";

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
				refetchOnWindowFocus: false,
				useErrorBoundary: true,
        retry:2,//false, true,
      },
			mutations: {
				useErrorBoundary: true,
			},
    },
  });
};
