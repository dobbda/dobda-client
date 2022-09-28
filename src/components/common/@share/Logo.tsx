import React from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { LogoIconW, LogoIconB, LogoBB, LogoBBB } from 'src/icons';
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
`;

export const Logo = ({ b, height }: Props) => {
  return (
    <>
      <Div>
        <Link href="/" passHref>
          {b ? <LogoBBB height={height ? height : '35px'} /> : <LogoIconW height={height ? height : '35px'} />}
        </Link>
      </Div>
    </>
  );
};
