import Image from 'next/image';
import React from 'react';
import { ImageProp } from 'src/interface';
import styled from 'styled-components';

interface Props {
  bgImg?: ImageProp;
  bgColor?: string;
  title?: string;
  titleColor?: string;
  isImg?: boolean;
  height?: string;
}

export const MainImage = (props: Props) => {
  return (
    <Wrap {...props}>
      {props.isImg && props.bgImg.url ? (
        <NextImage src={props?.bgImg.url} layout="fill" id="bgimage" />
      ) : (
        <ImageLayer bgColor={props?.bgColor} id="bgimage" />
      )}
      {props.title && <h1>{props.title}</h1>}
    </Wrap>
  );
};

const Wrap = styled.div<{ titleColor?: string; height?: string }>`
  width: 100%;
  height: ${({ height }) => height || '150px'};
  position: relative;
  overflow: hidden;
  h1 {
    color: ${(props) => props?.titleColor || '#fff'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ImageLayer = styled.div<{ bgColor?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  transition: all 0.2s;
`;
const NextImage = styled(Image)`
  height: auto !important;
  position: relative !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  object-fit: cover;
  transition: all 0.2s;
`;
