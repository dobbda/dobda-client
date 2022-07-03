import React from 'react';
import {A} from './Link';
import styled from 'styled-components';

type Props = {};

const H1 = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: #4c42e1;
  text-align: center;
  cursor: pointer;
`;

export const Logo = (props: Props) => {
  return (
    <>
      <A href="/">
        
          <H1>{'Dev<Q>'}</H1>
        
      </A>
    </>
  );
};
