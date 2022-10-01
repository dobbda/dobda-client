import React from 'react';
import { Div, BaseInfo, UserActive, Item, P, UserTech } from './style/userInfo.style';
import Image from 'next/image';

import { Tag } from 'src/components/common';
import { useQuery } from 'react-query';
import { user } from 'src/api';
import { TagWrapper } from '../common/@share/atom';
import { Auth } from 'src/types';
import { Avatar } from 'antd';
import { theme } from 'src/styles/Theme';
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
              <P>채택된답변</P>
              <em>{data.getAccepted}</em>
            </Item>
            <Item>
              <P>질문</P>
              <em>{data.questionsCount}</em>
            </Item>

            <Item>
              <P>채택률</P>
              <em>{(data.setAccepted / data.questionsCount) * 100}</em>
            </Item>
          </UserActive>
          <UserTech>
            <h3>Tech Stacks</h3>
            <TagWrapper>
              {data.skill.map((tag) => (
                <Tag key={tag} bg={theme.color.prRgb(0.3)}>
                  {tag}
                </Tag>
              ))}
            </TagWrapper>
          </UserTech>
        </Div>
      )}
    </>
  );
}
