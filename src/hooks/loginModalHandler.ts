import React, { useState, useEffect, useCallback } from 'react';
import { useQueryClient ,useQuery} from 'react-query';
import { useClientValue } from 'src/hooks/queryHooks';

export const useLoginModalhandler = () => { 
	const queryClient = useQueryClient();
	const loginModal = useClientValue('loginModal', false);
	console.log(loginModal);
	const setLoginModal = ()=>{
		queryClient.setQueriesData(loginModal, !loginModal);
	}
	return [loginModal, setLoginModal]
 }