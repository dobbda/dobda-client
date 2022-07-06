import React from 'react'
import styled from 'styled-components'

interface Props {
  color?: string,
  border?: boolean,
  types?: string,
}


export const Button = styled.button<Props>`
  background-color: ${({ types }) => (types === 'cancel' ? 'rgba(255, 255, 255, 0.1)' : '#0088FF')};
  color: #fff;
  border: 1px solid ${({ types }) => (types === 'cancel' ? '#ACACAC' : '#0000')};
  padding: 2px 20px;
  border-radius: 2px;
  :hover {
    color: #9e08da;
  }
`;
