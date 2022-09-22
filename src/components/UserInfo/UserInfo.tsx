import React from 'react';
import { Div, BaseInfo, UserActive, Item, P, UserTech } from './style/userInfo.style';
import Image from 'next/image';

import { Tag } from 'src/components/common';
import { useQuery } from 'react-query';
import { user } from 'src/api';
import { TagWrapper } from '../common/@share/atom';
import { Auth } from 'src/types';
import { Avatar } from 'antd';
type Props = { id: number };
export function UserInfo({ id }: Props) {
  const anyUser = useQuery(['users', id], () => user.getUserInfo(id));
  const data = anyUser?.data as Auth;
  return (
    <>
      {data && (
        <Div>
          <BaseInfo>
            <Avatar src={data.avatar} style={{ width: '35px' }} alt="" />
            <br />
            <p className="e-mail">{data.email}</p>
            <P>{data.description}</P>
          </BaseInfo>

          <UserActive>
            <Item>
              <P>활동점수</P>
              <em>10</em>
            </Item>
            <Item>
              <P>답변</P>
              <em>10</em>
            </Item>
            <Item>
              <P>채택</P>
              <em>10</em>
            </Item>

            <Item>
              <P>질문</P>
              <em>10</em>
            </Item>
          </UserActive>
          <UserTech>
            <h3>Tech Stacks</h3>
            <TagWrapper>
              <Tag bg={false}>python</Tag>
              <Tag bg={false}>frontend</Tag>
              <Tag bg={false}>python</Tag>
            </TagWrapper>
          </UserTech>
        </Div>
      )}
    </>
  );
}
