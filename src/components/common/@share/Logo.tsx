import React from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { LogoIconW, LogoBBB } from 'src/icons';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  b?: boolean;
  height?: string;
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  a {
    margin-top: 3px;
  }
`;

export const Logo = ({ b, height }: Props) => {
  return (
    <Div>
      <Link href="/" passHref>
        <a>{b ? <LogoBBB height={height ? height : '35px'} /> : <LogoIconW height={height ? height : '35px'} />}</a>
      </Link>
    </Div>
  );
};
