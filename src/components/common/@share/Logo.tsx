import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { keys } from 'src/hooks';
import { useRouter } from 'next/router';
import { NameB, NameW } from 'src/icons/Icon';

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
    <Div onClick={goHome}>{b ? <NameB height={height ? height : '35px'} /> : <NameW height={height ? height : '35px'} />}</Div>
  );
};
