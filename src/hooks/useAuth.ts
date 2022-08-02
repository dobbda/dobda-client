import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { user } from "src/api";
import { variable } from "src/config/defaultValue";
import { getLocalStorage, setLocalStorage } from "src/lib/localStorage";
import { Auth } from "src/types";


export function useAuth(data?: any): Auth {

		const { data: auth } = useQuery(["auth"], ()=>user.auth(), {
			staleTime:Infinity,
			...(data?.user && { initialData: data.user || data}),
		});

		return auth;

}
