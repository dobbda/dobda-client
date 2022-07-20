import React from 'react';
import { Link } from 'src/components/common';
import styled from 'styled-components';

type Props = {};

const Div = styled.span`
  text-align: center;
  H1 {
    font-weight: bold;
    font-size: 30px;
    color: #4c42e1;
    text-align: center;
    
    cursor: pointer;
    display: inline-block;
  }
`;

export const Logo = (props: Props) => {
  return (
    <>
      <Div>
        <Link href="/">
          <h1>{'Dev<Q>'}</h1>
        </Link>
      </Div>
    </>
  );
};
