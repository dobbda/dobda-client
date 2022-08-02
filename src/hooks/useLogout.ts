import { useQueryClient } from "react-query";
import { removeLocalStorage } from "src/lib/localStorage";

export const useLogout = ():Promise<null> => {
  const queryClient = useQueryClient();
  queryClient.setQueriesData(['loginUser'], null);
  queryClient.removeQueries(['loginUser']);
  removeLocalStorage('accessExpires');
  removeLocalStorage('refreshExpires');
  // user.logout();
	return null;
};