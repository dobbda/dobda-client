import React, { useMemo } from 'react';
import { Div, BaseInfo, UserActive, Item, P, UserTech } from './style/userInfo.style';
import { Button, Link } from 'src/components/common';
import Tag from 'src/components/common/@share/Tag';
import { useQuery } from 'react-query';
import { user } from 'src/api';
import { Avatar } from 'antd';

import { keys, useAuth } from 'src/hooks';
import { getPf } from 'src/api/apis/user';
import { TagColorKey } from 'src/components/common/tagColor';
type Props = { id: number };

export function UserProfile({ id }: Props) {
  const { data } = useQuery(['users', id], () => user.getUserInfo(id));
  const acceptedRate = Math.ceil((data?.setAcceptCount / data?.questionsCount) * 100) || 0 + '%';
  const {
    data: pf,
    error,
    isError,
    isSuccess,
  } = useQuery(keys.pf(id), () => getPf(Number(id)), {
    retry: 0,
    staleTime: Infinity,
  });

  let num = Math.floor(Math.random() * TagColorKey.length);
  return (
    <>
      {data && (
        <Div>
          <BaseInfo>
            <Avatar src={data.avatar} style={{ width: '35px' }} alt="" />
            <br />
            <p className="e-nickname">{data.nickname}</p>
          </BaseInfo>

          <UserActive>
            <Item>
              <span>활동점수</span>
              <span>준비중...</span>
            </Item>
            <Item>
              <span>채택답변</span>
              <span>{data.getAcceptCount}</span>
            </Item>
            <Item>
              <span>질문</span>
              <span>{data.questionsCount}</span>
            </Item>

            <Item>
              <span>채택률</span>
              <span>{acceptedRate}</span>
            </Item>
          </UserActive>
          <UserTech>
            <div className="tagWrap">
              {pf?.workField?.map((v, i) => (
                <Tag color={'green'} key={i}>
                  {v}
                </Tag>
              ))}
            </div>

            <div className="tagWrap">
              {pf?.skill?.map((v, i) => (
                <Tag color={'gold'} key={i}>
                  {v}
                </Tag>
              ))}
            </div>
            <br />
            <Button $fill types="secondary" id="maker_page_link">
              <Link href={'/maker/' + id}> 메이커 프로필 방문하기</Link>
            </Button>
          </UserTech>
        </Div>
      )}
    </>
  );
}
