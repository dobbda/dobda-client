import React from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'src/components/common';
import styled from 'styled-components';
import { LogoIconW, LogoIconB, LogoBB, LogoBBB } from 'src/assets/icons';
import Image from 'next/image';
type Props = {
  b?: boolean;
  height?: string;
};

const Div = styled.span`
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 35px;
    color: #ffffff;
    text-align: center;
    user-select: none;
    cursor: pointer;
    display: inline-block;
  }
`;

export const Logo = ({ b, height }: Props) => {
  const queryClient = useQueryClient();
  return (
    <>
      <Div onClick={() => queryClient.invalidateQueries()}>
        <Link href="/">
          {b ? <LogoBBB height={height ? height : '35px'} /> : <LogoIconW height={height ? height : '35px'} />}
        </Link>
      </Div>
    </>
  );
};
