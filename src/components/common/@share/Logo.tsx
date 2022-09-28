import React from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { LogoIconW, LogoIconB, LogoBB, LogoBBB } from 'src/assets/icons';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <>
      <Div>
        <Link href="/" passHref>
          <a>{b ? <LogoBBB height={height ? height : '35px'} /> : <LogoIconW height={height ? height : '35px'} />}</a>
        </Link>
      </Div>
    </>
  );
};
