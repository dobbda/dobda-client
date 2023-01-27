import Image from 'next/image';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import styled from 'styled-components';

import { Popover, Avatar as AntAvatar } from 'antd';
import { UserProfile } from 'src/components/Users';
import { theme } from 'src/styles/Theme';

type Props = {
  nickname: string;
  id: number;
  url: string;
  size?: number;
};

const SImg = styled(AntAvatar)`
  border: 1px solid ${theme.color.border1};
  /* border-radius: 2px; */
  :hover {
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0.5px 1px 2px;
    transition: all 0.2s;
  }
`;
const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 30px;

  h3 {
    margin: 0;
    margin-left: 10px;
    text-align: center;
    font-size: 15px;
    color: #707070;
    :hover {
      /* text-decoration: underline;
      text-underline-offset: 3px; */
      text-decoration: underline;
      text-decoration-color: inherit;
      transition: all 0.2s;
    }
  }
`;

const Avatar = ({ nickname, url, id, size }: Props) => {
  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      content={<UserProfile id={id} />}
    >
      <Div>
        <SImg src={url} size={20}></SImg>
        <h3>{nickname}</h3>
      </Div>
    </Popover>
  );
};

export { SImg as AvatarImg, Avatar };
