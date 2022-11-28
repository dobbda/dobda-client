import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPf } from 'src/api/apis/user';
import { keys, useAuth } from 'src/hooks';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
import { FolderMenu } from '../SideContent';
// import { MyAlarm } from './alarms';
// import { MyCoin } from './coin';
// import { Poster } from './MyPoster';
// import { MyPortfolio } from './portfolio';
// import { MyInfo } from './profile/MyInfo';
import dynamic from 'next/dynamic';

const MyCoin = dynamic(() => import('./coin'));
const Poster = dynamic(() => import('./MyPoster'));
const MyPortfolio = dynamic(() => import('./portfolio'));
const MyInfo = dynamic(() => import('./profile/MyInfo'));
const MyAlarm = dynamic(() => import('./alarms'));

type Props = {
  children?: React.ReactNode;
};

export const AdminUser = ({ children }: Props) => {
  const { auth } = useAuth();
  const router = useRouter();
  const { id, cg } = router.query;
  console.log(id, cg);
  const setQueryPath = (cg: string) => {
    router.push({ pathname: 'user/', query: { id: 1, cg: cg } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cg]);

  const { data: pfData, isSuccess: pfSuccess } = useQuery(keys.pf(3), () => getPf(3), {
    staleTime: 1000 * 60 * 10,
    enabled: cg == 'portfolio',
  });
  return (
    <UserPageWrapper>
      <div css={{ width: '100%' }}>
        {(!cg || cg == 'info') && <MyInfo />}
        {cg == 'alarm' && <MyAlarm />}
        {cg == 'coin' && <MyCoin />}
        {cg == 'portfolio' && pfSuccess && <MyPortfolio data={pfData} />}
        {cg == 'post' && <Poster />}
      </div>
      <div className="navigator">
        <FolderMenu title="CATEGORIES" childOpen={true} height="197px">
          <ul css={{ margin: '0', padding: '0' }}>
            <Li $isPath={'info' == cg} onClick={() => setQueryPath('info')}>
              내정보
            </Li>
            <Li $isPath={'post' == cg} onClick={() => setQueryPath('post')}>
              내글목록
            </Li>
            <Li $isPath={'coin' == cg} onClick={() => setQueryPath('coin')}>
              코인관리
            </Li>
            <Li $isPath={'alarm' == cg} onClick={() => setQueryPath('alarm')}>
              전체알림
            </Li>
            <Li $isPath={'portfolio' == cg} onClick={() => setQueryPath('portfolio')}>
              포트폴리오
            </Li>
          </ul>
        </FolderMenu>
      </div>
    </UserPageWrapper>
  );
};

const UserPageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  gap: 20px;
  .navigator {
    background-color: #fff;
    height: fit-content;
    min-width: 250px;
    margin-top: 40px;
    border: 1px solid ${theme.color.border(0.1)};
    position: sticky;
    top: 80px;
    left: 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .navigator {
      position: static;
      width: 100%;
      margin-top: 10px;
    }
  }
`;

const Li = styled.li<{ $isPath?: boolean }>`
  user-select: none;
  margin: 1px;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 20px;
  color: #000000d9;
  cursor: pointer;
  * {
    letter-spacing: 3px;
  }

  ${({ $isPath }) => $isPath && `background-color: ${theme.color.prRgb(0.8)}`};
  ${({ $isPath }) => $isPath && `color: #fff`};
  :hover {
    transition: all 200ms;
    background-color: ${theme.color.prRgb(0.8)};
  }
`;
