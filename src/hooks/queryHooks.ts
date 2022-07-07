import { useQuery, useQueryClient } from 'react-query';
type InitialData = string |number 
type Key = string | string 

export const useClientValue = (key:Key, initialData:InitialData) =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data;
// ex: const username = useClientValue('key', '');


export const useSetClientValue = (key: Key) => {
  const queryClient = useQueryClient();
  return (value:any) => queryClient.setQueryData(key, value);
};
