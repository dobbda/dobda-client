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
    margin-left: 10px;
    display: inline-block;
    font-size: 18px;
    color: ${({ acceped_answer, theme }) => (acceped_answer ? '#fff' : '#484848')};
    :hover {
      color: #00C6FF;
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
        <Image src={url} alt="avatar" width={25} height={25} />
        <h3>{nickname}</h3>
      </Div>
    </Popover>
  );
};


