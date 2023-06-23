import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { reqAuth } from 'src/api';
import { Auth } from 'src/interface';
import { getLocalStorage } from 'src/lib/utils/localStorage';
import { keys } from '../queryKeys';

export function useAuth(): { auth: Auth; refetch: any } {
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
