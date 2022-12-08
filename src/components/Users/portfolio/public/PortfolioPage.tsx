import { Tag } from 'antd';
import React, { useMemo } from 'react';
import { HtmlViewer } from 'src/components/Editor';
import { Portfolio } from 'src/interface';
import styled from 'styled-components';
import CarouselsImages from '../Carousel';
import { MainImage } from './MainImage';

type Props = {
  data: Portfolio;
};

const PortfolioPage = ({ data }: Props) => {
  const color = useMemo(
    () => ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'],
    [],
  );
  return (
    <div>
      <MainImage {...data.card} height="250px" />
      <br />
      <br />
      <div>
        <TagsWrap>
          <h2>전문분야</h2>
          <div>
            {data?.workField?.map((v, i) => {
              let num = Math.floor(Math.random() * color.length);
              return (
                <Tag color={color[num]} style={{ marginRight: 3 }} key={i}>
                  {v}
                </Tag>
              );
            })}
          </div>
        </TagsWrap>

        <TagsWrap>
          <h2>기술스택</h2>
          <div>
            {data?.skill?.map((v, i) => {
              let num = Math.floor(Math.random() * color.length);
              return (
                <Tag color={color[num]} style={{ marginRight: 3 }} key={i}>
                  {v}
                </Tag>
              );
            })}
          </div>
        </TagsWrap>
      </div>
      {data.content?.map((v, i) => {
        return (
          <div key={i}>
            {v.content && <HtmlViewer content={v.content} key={i} />}{' '}
            {v.images.length > 0 && <CarouselsImages images={v.images} key={i} />}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioPage;

const TagsWrap = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  h1,
  h2,
  h3 {
    color: #767c91;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  span {
    padding: 3px 15px;
    background: #fff;
    border-radius: 19px;
    font-size: 15px;
    color: #555969;
  }
`;
