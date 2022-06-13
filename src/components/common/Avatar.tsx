import Image from 'next/image';
import React from 'react';

import styled from 'styled-components';
type Props = {
  nickname: string;
  acceped_answer?: boolean;
  url: string;
};

const Div = styled.div<{ acceped_answer?: boolean }>`
  display:inline-flex;
  img {
    border-radius: 100%;
  }
  h3 {
    margin-left: 10px;
    display: inline-block;
    font-size: 18px;
    color: ${({ acceped_answer, theme }) => (acceped_answer ? '#fff' : '#484848')};
  }
`;

const Avatar = ({ nickname, acceped_answer = false, url }: Props) => {
  return (
    <Div acceped_answer={acceped_answer}>
      <Image src={url} alt="avatar" width={25} height={25} />
      <h3>{nickname}</h3>
    </Div>
  );
};

export default Avatar;
