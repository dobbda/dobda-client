import React, { useState, useEffect, useCallback } from 'react';
import { useQueryClient ,useQuery} from 'react-query';
import { useClientValue } from 'src/hooks';

export const useErrMsg = () => { 
	const queryClient = useQueryClient();
	const msg = queryClient.getQueryData(['serverErrorMessage']) as string;
	// const reset = () => {
	// 	queryClient.setQueriesData(["loginModal"], "");
	// }
	return msg
 }