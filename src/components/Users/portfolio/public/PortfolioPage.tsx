import React, { useMemo } from 'react';
// import Tag from 'src/components/common/@share/Tag';
import { TagColorKey, TagColorType } from 'src/components/common/tagColor';
import { HtmlViewer } from 'src/components/Editor';
import { Portfolio } from 'src/interface';
import styled from 'styled-components';
import { UserProfile } from '../../profile/UserProfile';
import CarouselsImages from '../Carousel';
import { MainImage } from './MainImage';
import dynamic from 'next/dynamic';
import { Button } from 'src/components/common';
import Link from 'next/link';
import { useAuth } from 'src/hooks';
import { theme } from 'src/styles/Theme';

const Tag = dynamic(() => import('src/components/common/@share/Tag'));
type Props = {
  data: Portfolio;
};

const PortfolioPage = ({ data }: Props) => {
  const { auth } = useAuth();
  return (
    <Container>
      <div className="wrap">
        <MainImage {...data.card} height="250px" />
        <br />
        {data.userId == auth?.id && (
          <div css={{ textAlign: 'right' }}>
            <Button>
              <Link
                href={{
                  pathname: '/user',
                  query: { id: auth?.id, cg: 'portfolio' },
                }}
              >
                정보 수정
              </Link>
            </Button>
          </div>
        )}

        <br />
        <div>
          <TagsWrap>
            {data?.position?.length > 0 && (
              <>
                <h2>활동 분야</h2>
                <div>
                  {data?.position?.map((v, i) => {
                    let num = Math.floor(Math.random() * TagColorKey.length);
                    return (
                      <Tag color={TagColorKey[num] as any} key={i}>
                        {v}
                      </Tag>
                    );
                  })}
                </div>
              </>
            )}
          </TagsWrap>

          <TagsWrap>
            {data?.skill.length > 0 && (
              <>
                <h2>기술스택</h2>
                <div>
                  {data?.skill?.map((v, i) => {
                    let num = Math.floor(Math.random() * TagColorKey.length);
                    return (
                      <Tag color={TagColorKey[num] as any} key={i}>
                        {v}
                      </Tag>
                    );
                  })}
                </div>
              </>
            )}
          </TagsWrap>
        </div>
        {data.content?.map((v, i) => {
          return (
            <div key={i}>
              {v.content && <HtmlViewer content={v.content} key={i} />}{' '}
              {v.images.length > 0 && (
                <CarouselsImages images={v.images} key={i} />
              )}
            </div>
          );
        })}
      </div>
      <div className="userinf">
        <UserProfile id={Number(data?.userId)} />
      </div>
    </Container>
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

const Container = styled.div`
  button#maker_page_link {
    display: none;
  }
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  justify-content: space-between;
  gap: 20px;
  .wrap {
    width: 100%;
  }
  .userinf {
    width: 250px;
  }
  @media screen and (max-width: ${theme.media.medium}) {
    .userinf {
      display: none;
    }
  } ;
`;
