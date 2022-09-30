import Image from 'next/image';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import styled from 'styled-components';

import { Popover, Avatar as AntAvatar } from 'antd';
import { UserInfo } from '../../UserInfo';
import { theme } from 'src/styles/Theme';

type Props = {
  nickname: string;
  id: number;
  url: string;
};

const Savatar = styled(AntAvatar)`
  border: 1px solid ${theme.color.border2};
  :hover {
    border: 1px solid ${theme.color.primary};
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0.5px 2px 3px;
  }
`;
const Div = styled.div`
  cursor: pointer;
  display: inline-flex;
  height: 30px;

  h3 {
    margin: 0;
    /* font-weight: 600; */
    padding-top: 5px;
    margin-left: 20px;
    text-align: center;
    font-size: 15px;
    color: #707070;
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
        <Savatar src={url}></Savatar>
        <h3>{nickname}</h3>
      </Div>
    </Popover>
  );
};
