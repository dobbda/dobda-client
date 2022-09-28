import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { reqAuth } from 'src/api';
import { variable } from 'src/config/defaultValue';
import { Auth } from 'src/types';
import { keys } from '../queries/queryKeys';

export function useAuth(): { auth: Auth; refetch: any } {
  const { data: auth, refetch } = useQuery(keys.auth, () => reqAuth.auth(), {
    // refetchOnMount: true,
    staleTime: Infinity,
  });
  return { auth, refetch };
}
