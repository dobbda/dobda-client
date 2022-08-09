import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { user } from "src/api";
import { variable } from "src/config/defaultValue";
import { getLocalStorage, setLocalStorage } from "src/lib/localStorage";
import { Auth } from "src/types";
import { queryKeys } from "./queries/queryKeys";


export function useAuth(data?: any): Auth {

		const { data: auth } = useQuery([queryKeys.AUTH], user.auth?()=>user.auth(): null, {
			refetchOnMount:true,
			staleTime:1000*60*5, //5분후 api 요청
			// cacheTime:0,
			...(data?.user && { initialData: data.user || data}),
			onError: (err)=>{if(err==='Missing queryFn')console.log('auth err', err)}
		});

		return auth;

}
