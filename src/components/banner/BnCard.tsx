import React, { useCallback } from 'react';
import { useWriteModalhandler } from 'src/hooks';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
import * as s from './style/style';
interface ButtonProps {
  color?: string;
  bg?: string;
}

interface Props extends ButtonProps {
  title: string;
  sub: string;
  buttonName?: string;
  image?: string;
  secondImg?: string;
}

export default function BnCard(props: Props) {
  const { setWriteModal } = useWriteModalhandler();
  const showWrite = useCallback(() => {
    setWriteModal();
  }, [setWriteModal]);
  return (
    <s.PrWrapper url={props.image}>
      <s.Content secondImg={props.secondImg}>
        {props.buttonName && (
          <Button onClick={() => setWriteModal()} color={props.color} bg={props.bg}>
            {props.buttonName}
          </Button>
        )}
        <h1>{props.title}</h1>
        <h3>{props.sub}</h3>
      </s.Content>
    </s.PrWrapper>
  );
}

const Button = styled.button<ButtonProps>`
  padding: 5px 25px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 1rem;
  color: ${({ color }) => (color ? color : '#fff')};
  background-color: ${({ bg }) => (bg ? bg : theme.color.primary)};
  border: solid 1px ${({ bg }) => (bg ? bg : theme.color.primary)};
  max-width: 300px;
  transition: all 150ms;
  :hover {
    box-shadow: #ebebeb9f 0px 0px 0px 3px;
  }

  @media screen and (max-width: ${theme.media.small}) {
    width: fit-content;
    font-size: 14px;
    font-weight: 500;
  }
`;
