import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { user } from "src/api";
import { variable } from "src/config/defaultValue";
import { Auth } from "src/types";
import { keys } from "../queries/queryKeys";


export function useAuth(data?: any): {auth:Auth, refetch:any} {

		const { data:checkAuth, refetch } = useQuery([keys.auth], user.auth?()=>user.auth(): null, {
			refetchOnMount:true,
			staleTime:1000*60*5, //5분후 api 요청
			// cacheTime:0,
			...(data?.user && { initialData: data.user || data}),
			onError: (err)=>{if(err==='Missing queryFn')console.log('auth err', err)}
		});
		const auth = checkAuth ? checkAuth as Auth : null;
		return {auth, refetch};

}
