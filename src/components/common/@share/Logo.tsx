import React from 'react';
import { useQueryClient } from 'react-query';
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
  const queryClient = useQueryClient();
  return (
    <>
      <Div onClick={() => queryClient.invalidateQueries()}>
        <Link href="/">
          <h1>{'Dev<Q>'}</h1>
        </Link>
      </Div>
    </>
  );
};
