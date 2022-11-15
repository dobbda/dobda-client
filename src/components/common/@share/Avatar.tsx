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
};

const SImg = styled(AntAvatar)`
  border: 1px solid ${theme.color.border2};
  :hover {
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0.5px 1px 2px;
    transition: all 0.2s;
  }
`;
const Div = styled.div`
  cursor: pointer;
  display: inline-flex;
  height: 30px;

  h3 {
    margin: 0;
    padding-top: 5px;
    margin-left: 20px;
    text-align: center;
    font-size: 15px;
    color: #707070;
    :hover {
      /* text-decoration: underline;
      text-underline-offset: 3px; */
      box-shadow: inset ${theme.color.prRgb(0.5)} 0px -2px 0px 0px;
      transition: all 0.2s;
    }
  }
`;

const Avatar = ({ nickname, url, id }: Props) => {
  return (
    <Popover trigger="click" placement="bottomLeft" content={<UserProfile id={id} />}>
      <Div>
        <SImg src={url}></SImg>
        <h3>{nickname}</h3>
      </Div>
    </Popover>
  );
};

export { SImg as AvatarImg, Avatar };
