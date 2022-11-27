import { type } from 'os';
import React, { useState, useRef, PropsWithChildren } from 'react';
import { theme } from 'src/styles/Theme';
import styled, { keyframes } from 'styled-components';

type Props = {
  visible: boolean;
  onClickHandler: () => void;
};

export function Modal({ children, visible, onClickHandler }: PropsWithChildren<Props>) {
  const onClickSide = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClickHandler();
    }
  };
  return (
    <>
      {visible && (
        <Container {...boxFade}>
          <Wrap onClick={onClickSide}>{children}</Wrap>
        </Container>
      )}
    </>
  );
}

const boxFade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

`;
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: saturate(180%) blur(5px);
  animation: ${boxFade} 0.25s ease-in-out;
  z-index: 999999;
  position: fixed;
  top: ${theme.media.headerHeight};
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
