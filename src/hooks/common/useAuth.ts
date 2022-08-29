import { AxiosError } from "axios";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { user } from "src/api";
import { variable } from "src/config/defaultValue";
import { Auth } from "src/types";
import { keys } from "../queries/queryKeys";


export function useAuth(): {auth:Auth, refetch:any} {

		const { data:auth, refetch } = useQuery([keys.auth], user.auth?()=>user.auth(): null, {
			refetchOnMount:true,
			staleTime:1000*60*5, //5분후 api 요청
			// cacheTime:0,
			onError: (err:AxiosError)=>(err.response.data.error.message)
		});
		return {auth, refetch};

}
