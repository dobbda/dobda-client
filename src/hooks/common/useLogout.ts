import { auth } from './../../api/apis/ssr';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { user } from 'src/api';
import { removeLocalStorage } from 'src/lib/utils/localStorage';
import { useAuth } from './useAuth';
import { keys } from '..';

export const useLogout = () => {
  const { auth } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  const logout = () => {
    if (confirm('로그아웃 확인')) {
      try {
        axios.delete('/api/auth/logout');
      } catch (e) {}
      queryClient.invalidateQueries(keys.auth);
      queryClient.removeQueries(keys.auth);
      router.replace(router.asPath);
    }
  };
  return { logout };
};
