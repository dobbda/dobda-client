import { Avatar } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { Tag } from 'src/components/common';
import { TagColorKey, TagColorType } from 'src/components/common/tagColor';
import { Maker, ImageProp } from 'src/interface';
import { MainImage } from './MainImage';
import { UserInfo, Wrap } from './style';

type Props = {
  data: Maker;
};

export const PortfolioCard = ({ data }: Props) => {
  let num = Math.floor(Math.random() * TagColorKey?.length - 1);
  return (
    <Wrap>
      <Link href={'/maker/' + data.userId}>
        <a>
          <MainImage {...data?.card} height="150px" />
        </a>
      </Link>
      <div className="contents">
        <UserInfo>
          <span
            css={{ display: 'flex', overflow: 'hidden', alignItems: 'center' }}
          >
            <Avatar
              css={{ minWidth: '25px' }}
              size={25}
              src={data.user?.avatar}
            />{' '}
            <span id="nickname">{data?.user?.nickname}</span>{' '}
          </span>
          <span id="job">
            {data?.job && (
              <Tag color={'blue'} css={{ marginRight: 3 }}>
                {data?.job}
              </Tag>
            )}
          </span>
        </UserInfo>
        <div id="field">
          <div className="work_field">
            {data?.position?.map((v, i) => (
              <Tag color="volcano" css={{ marginRight: 3 }} key={i} clickEvent>
                {v}
              </Tag>
            ))}
          </div>
          <div className="work_skill">
            {data?.skill?.map((v, i) => (
              <Tag
                color={TagColorKey[num] as TagColorType}
                css={{ marginRight: 3 }}
                key={i}
                clickEvent
              >
                {v}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
};
