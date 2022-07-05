import React from 'react';
import { A } from './Link';
import styled from 'styled-components';

type Props = {};

const Div = styled.div`
  width: 100%;
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
        <A href="/">
          <h1>{'Dev<Q>'}</h1>
        </A>
      </Div>
    </>
  );
};
