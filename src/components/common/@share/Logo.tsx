import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { i } from 'src/icons';
import Image from 'next/image';
import Link from 'next/link';
import { keys } from 'src/hooks';
import { useRouter } from 'next/router';

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
    queryClient.invalidateQueries(keys.questions());
    router.push('/');
  }, [queryClient, router]);

  return (
    <Div onClick={goHome}>
      {b ? <i.LogoBBB height={height ? height : '35px'} /> : <i.LogoW height={height ? height : '35px'} />}
    </Div>
  );
};
