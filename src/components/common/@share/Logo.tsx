import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { keys } from 'src/hooks';
import { useRouter } from 'next/router';
import { NameBi, NameWi } from 'src/icons';
import { theme } from 'src/styles/Theme';

type Props = {
  b?: boolean;
  height?: string;
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: ${theme.color.primary};
  opacity: 0.9;
  font-weight: 800;
  letter-spacing: 0.0625em;
`;
export const Logo = ({ b, height }: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const goHome = useCallback(() => {
    // queryClient.invalidateQueries(keys.auth);
    router.push('/');
  }, [queryClient, router]);

  return <Div onClick={goHome}>DOBDA</Div>;
};
