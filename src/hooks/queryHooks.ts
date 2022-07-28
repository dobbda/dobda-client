import { useQuery, useQueryClient } from 'react-query';
type InitialData = string |number |boolean;
type Key = string | string 

export const useClientValue = (key:any, initialData:any) =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data;
// ex: const username = useClientValue('key', '');


export const useSetClient = (key: Key, value:any) => {
  const queryClient = useQueryClient();
  queryClient.setQueryData(key, value);
};
