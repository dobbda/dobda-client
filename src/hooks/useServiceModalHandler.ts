import React, { useState, useEffect, useCallback } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { useClientValue } from 'src/hooks';

export const useLoginModalhandler = () => {
  const queryClient = useQueryClient();
  const loginModal = useClientValue(['loginModal'], false);
  const setLoginModal = () => {
    queryClient.setQueryData(['loginModal'], !loginModal);
  };
  return { loginModal, setLoginModal };
};

export const useWriteModalhandler = () => {
  const queryClient = useQueryClient();
  const writeModal = useClientValue(['writeModal'], false);
  const setWriteModal = (value?: boolean) => {
    queryClient.setQueryData(['writeModal'], value || !writeModal);
  };
  return { writeModal, setWriteModal };
};
