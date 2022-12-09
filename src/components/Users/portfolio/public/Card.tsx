import { Avatar, Tag } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Portfolio, ImageProp } from 'src/interface';
import { MainImage } from './MainImage';
import { UserInfo, Wrap } from './style';

type Props = {
  data: Portfolio;
};

export const PortfolioCard = ({ data }: Props) => {
  const color = useMemo(
    () => ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'],
    [],
  );
  let num = Math.floor(Math.random() * color.length);
  return (
    <Wrap>
      <Link href={'/maker/' + data.userId}>
        <a>
          <MainImage {...data?.card} height="150px" />
        </a>
      </Link>
      <div className="contents">
        <UserInfo>
          <span>
            <Avatar size={25} src={data.user?.avatar} /> <span id="nickname">{data?.user?.nickname}</span>{' '}
          </span>
          <span id="job">
            {data?.job && (
              <Tag color={'blue'} style={{ marginRight: 3 }}>
                {data?.job}
              </Tag>
            )}
          </span>
        </UserInfo>
        <div id="field">
          <div className="work_field">
            {data?.workField?.map((v, i) => (
              <Tag color={color[num]} style={{ marginRight: 3 }} key={i}>
                {v}
              </Tag>
            ))}
          </div>
          <div className="work_skill">
            {data?.skill?.map((v, i) => (
              <Tag color={color[num]} style={{ marginRight: 3 }} key={i}>
                {v}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
};
