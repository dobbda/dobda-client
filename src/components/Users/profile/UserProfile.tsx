import React from 'react';
import { Div, BaseInfo, UserActive, Item, P, UserTech } from './style/userInfo.style';
import { Button, Link, Tag } from 'src/components/common';
import { useQuery } from 'react-query';
import { user } from 'src/api';
import { TagWrapper } from 'src/components/common/@share/atom';
import { Auth } from 'src/interface';
import { Avatar } from 'antd';
import { theme } from 'src/styles/Theme';
import { useAuth } from 'src/hooks';
import { Hr } from './style/myInfo.style';
type Props = { id: number };

export function UserProfile({ id }: Props) {
  const anyUser = useQuery(['users', id], () => user.getUserInfo(id));
  const data = anyUser?.data as Auth;
  const acceptedRate = Math.ceil((data?.setAcceptCount / data?.questionsCount) * 100) + '%';
  const { auth } = useAuth();
  return (
    <>
      {data && (
        <Div>
          <BaseInfo>
            <Avatar src={data.avatar} style={{ width: '35px' }} alt="" />
            <br />
            <p className="e-nickname">{data.nickname}</p>
            <P>{data.description}</P>
          </BaseInfo>

          <UserActive>
            <Item>
              <P>활동점수</P>
              <P>준비중...</P>
            </Item>
            <Item>
              <P>채택된답변</P>
              <P>{data.getAcceptCount}</P>
            </Item>
            <Item>
              <P>질문</P>
              <P>{data.questionsCount}</P>
            </Item>

            <Item>
              <P>채택률</P>
              <P>{acceptedRate}</P>
            </Item>
          </UserActive>
          <UserTech>
            <Button $fill types="secondary">
              <Link href={'/maker/' + id}> 메이커 프로필 방문하기</Link>
            </Button>
          </UserTech>
        </Div>
      )}
    </>
  );
}
