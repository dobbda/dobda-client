import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { keys } from 'src/hooks';
import { useRouter } from 'next/router';
import { NameBi, NameWi } from 'src/icons';

type Props = {
  b?: boolean;
  height?: string;
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Logo = ({ b, height }: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const goHome = useCallback(() => {
    queryClient.invalidateQueries(keys.auth);
    router.push('/');
  }, [queryClient, router]);

  return (
    <Div onClick={goHome}>{b ? <NameBi height={height ? height : '35px'} /> : <NameWi height={height ? height : '35px'} />}</Div>
  );
};
