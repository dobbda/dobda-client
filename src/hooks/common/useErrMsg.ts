import { AxiosError } from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { useClientValue } from 'src/hooks';

export const useErrMsg = () => {
  const queryClient = useQueryClient();
  const errMsg = queryClient.getQueryData(['serverErrorMessage']) as string;
  const setErrMsg = (error: any) => {
    let message = typeof error.response !== 'undefined' ? error.response.data?.error?.message : error.message;
    queryClient.setQueryData('serverErrorMessage', message || '잘못된 요청입니다.');
  };
  return { errMsg, setErrMsg };
};
