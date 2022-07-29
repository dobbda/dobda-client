import { useQueryClient ,useQuery} from 'react-query';
import { useClientValue } from 'src/hooks/queryHooks';


export const useCookie = ()=>{
	const queryClient = useQueryClient();
	const useCookies = useClientValue('loginModal', false);
	const useSetCookies = (cooies:string)=>{
		queryClient.setQueriesData(['jwt-access', 'jwt-refresh'], cooies,{
			
		});
	}
	return [useCookies, useSetCookies]
}