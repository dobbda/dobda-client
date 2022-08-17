import React from 'react';
import { ContentWrapper, Group, BodyWrapper, Title, FooterWrapper, HeaderWrapper } from './style/R.style';
import * as Lib from 'src/components/common';
import getDate from 'src/lib/dateForm';
import { atom } from '../common';
import * as I from 'src/assets/icons';

type Props = {
  question?: number[];
};

const RCard = ({ question }: Props) => {
  const tagList = ['python', 'Java', 'JavaScript'];

  return (
    <ContentWrapper type="R">
      <HeaderWrapper>
        <Group>
          {' '}
          <p color="#8400EC">2200</p> <I.CoinIcon />
          <p>D-3일</p>
        </Group>
        <Group>
          <p className="createdAt">{getDate('2021-10-09T00:44:52+09:00', true)}</p>
        </Group>
      </HeaderWrapper>
      <div className="diff-styles">
        <BodyWrapper>
          <div className="body-column">
            <Lib.Link href={`/requests/${encodeURIComponent(10)}`} scroll={false}>
              <Title>
                battery cathodes. He earned a BS in Mechanical Engineeringbattery battery cathodes. He earned a BS in Mechanical
                Engineering ....cathodes. He earned a BS in Mechanical Engineering .... ....
              </Title>
            </Lib.Link>
          </div>
          <atom.TagWrapper>
            {tagList.map((tag, i) => (
              <Lib.Tag key={i}>{tag}</Lib.Tag>
            ))}
          </atom.TagWrapper>
        </BodyWrapper>
        <FooterWrapper>
          <Group>
            <I.WatchIcon />
            <p>(10)</p>
          </Group>
          <Group>
            <I.ChatIcon />
            <p>(10)</p>
          </Group>
        </FooterWrapper>
      </div>
    </ContentWrapper>
  );
};

export default RCard;
