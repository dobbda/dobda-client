import Image from 'next/image';
import React,{useState} from 'react';
import 'antd/dist/antd.min.css';
import styled from 'styled-components';


import { Popover } from 'src/components/common';
import {UserInfo} from '../../UserInfo'

type Props = {
  nickname: string;
  acceped_answer?: boolean;
  url: string;
};

const Div = styled.div<{ acceped_answer?: boolean }>`
  cursor: pointer;
  display:inline-flex;
  height: 25px;
  img {
    border-radius: 100%;
    position: static
  }
  h3 {
		font-weight: 600;
		padding-top:5px;
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
    <Popover 
      content={<UserInfo/>}
      trigger="click"
      visible={visible}
      
    >
      <Div acceped_answer={acceped_answer}>
        <img src={url} alt="avatar" />
        <h3>{nickname}</h3>
      </Div>
    </Popover>
  );
};


