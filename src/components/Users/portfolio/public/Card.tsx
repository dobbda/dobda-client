import { Avatar } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Portfolio, ImageProp } from 'src/interface';
import { MainImage } from './MainImage';
import { UserInfo, Wrap } from './style';

type Props = {
  data: Portfolio;
};

export const PortfolioCard = ({ data }: Props) => {
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
            <Avatar size={25} src={data.user?.avatar} /> <span id="nickname">{data.user?.nickname}</span>{' '}
          </span>
          <span id="job">회사원</span>
        </UserInfo>
        <div id="field">
          <div className="work_field">
            <span>workField</span>
          </div>
          <div className="work_skill">
            <span>#skill </span>
            <span> #skill</span>
            <span> #skill</span>
          </div>
        </div>
      </div>
    </Wrap>
  );
};
