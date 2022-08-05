import { type } from "os";
import React, { useState, useRef, PropsWithChildren } from "react";
import styled, { keyframes } from 'styled-components'

type Props = { 
	visible: boolean,
	onClickHandler: () => void,
}

export function Modal({children,visible, onClickHandler}:PropsWithChildren<Props>) {
  const onClickSide = (e:React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClickHandler()
    };
  }
  return (
    <>
		{visible&&
      <Container onClick={onClickSide} {...boxFade}>
        <Wrap>
          {children}
        </Wrap>
      </Container>
		}
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
`
const Container = styled.div`

    background-color: #1e15227f;
		animation: ${boxFade} 0.25s ease-in-out;
    z-index: 999999;
    position: fixed;
    top: 0;
    left: 0;
		bottom: 0;
		right: 0;
`
const Wrap = styled.div`
				width: fit-content;
				height: fit-content;
        position: absolute;
        left: 50%;
        top:40%;
        transform: translate(-50%, -50%);
        z-index:999;
        color:black;
`


