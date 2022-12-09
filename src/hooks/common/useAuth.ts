import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { reqAuth } from 'src/api';
import { variable } from 'src/config/defaultValue';
import { getLocalStorage } from 'src/lib/utils/localStorage';
import { Auth } from 'src/types';
import { keys } from '../queries/queryKeys';

export function useAuth(): { auth: Auth; refetch: any } {
  const queryClient = useQueryClient();

  const { data: auth, refetch } = useQuery(keys.auth, () => reqAuth.auth(), {
    // refetchOnMount: true,
    staleTime: Infinity,
  });
  useEffect(() => {
    if (getLocalStorage('exp', true)?.access_exp < Date.now() && getLocalStorage('exp', true)?.refresh_exp > Date.now()) {
      refetch;
    }
  }, []);

  return { auth, refetch };
}
