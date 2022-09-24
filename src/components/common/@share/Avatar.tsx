import Image from 'next/image';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import styled from 'styled-components';

import { Popover, Avatar as AntAvatar } from 'antd';
import { UserInfo } from '../../UserInfo';

type Props = {
  nickname: string;
  id: number;
  url: string;
};

const Div = styled.div`
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
    :hover {
      color: #013d4e;
    }
  }
`;

export const Avatar = ({ nickname, url, id }: Props) => {
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <Popover trigger="click" placement="bottomLeft" content={<UserInfo id={id} />}>
      <Div>
        <AntAvatar src={url}></AntAvatar>
        <h3>{nickname}</h3>
      </Div>
    </Popover>
  );
};
