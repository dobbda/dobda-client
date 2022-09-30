import React from 'react';
import styled from 'styled-components';
export default function Banner() {
  return <Container>Side</Container>;
}

const Container = styled.aside`
  position: fixed;
  left: ${({ theme }) => theme.media.large};
  top: 50px;
  max-width: 180px;
  height: 500px;
  border: 1px solid #0005;
`;
