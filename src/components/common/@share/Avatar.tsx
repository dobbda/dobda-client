import Image from 'next/image';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import styled from 'styled-components';

import { Popover } from 'antd';
import { UserInfo } from '../../UserInfo';

type Props = {
  nickname: string;
  acceped_answer?: boolean;
  url: string;
};

const Div = styled.div<{ acceped_answer?: boolean }>`
  cursor: pointer;
  display: inline-flex;
  height: 30px;
  img {
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  h3 {
    margin: 0;
    font-weight: 600;
    padding-top: 5px;
    margin-left: 20px;
    text-align: center;
    font-size: 15px;
    color: ${({ acceped_answer, theme }) => (acceped_answer ? '#fff' : '#131313')};
    :hover {
      color: #013d4e;
    }
  }
`;

export const Avatar = ({ nickname, acceped_answer = false, url }: Props) => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <Popover trigger="click" placement="bottomLeft" content={<UserInfo />}>
      <Div acceped_answer={acceped_answer}>
        <img src={url} alt="avatar" />
        <h3>{nickname}</h3>
      </Div>
    </Popover>
  );
};
