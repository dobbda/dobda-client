import { useQuery, useQueryClient } from 'react-query';


export const useClientValue = (key:string, initialData:string = "") =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data;
// ex: const username = useClientValue('key', '');