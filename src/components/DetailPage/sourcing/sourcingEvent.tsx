import React from 'react';
import { Steps } from 'antd';
import { Button } from 'src/components/common';
import { FolderMenu } from 'src/components/SideContent';
import { theme } from 'src/styles/Theme';
import { OutsourceDetail, Progress, ProgressStatus } from 'src/interface';
import styled from 'styled-components';
import { ProjectProgress } from '../style/Detail.style';
type Props = {
  data: OutsourceDetail;
};

export const ProgressState = ({ data }: Props) => {
  const p = Number(ProgressStatus[data?.progress]);
  return (
    <>
      <ProjectProgress>
        <Steps css={{ padding: '5px 10px', marginBottm: '10px' }} size="small" current={1}>
          <Steps.Step status="finish" title="프로젝트등록" />
          <Steps.Step status={p == 1 ? 'process' : p > 1 ? 'finish' : 'wait'} title="전문가선택" />
          <Steps.Step status={p == 2 ? 'process' : p > 2 ? 'finish' : 'wait'} title="결제" />
          <Steps.Step status={p == 3 ? 'process' : p > 3 ? 'finish' : 'wait'} title="작업" />
          <Steps.Step status={p == 4 ? 'process' : p > 4 ? 'finish' : 'wait'} title="제출" />
          <Steps.Step status={p == 5 ? 'process' : p > 5 ? 'finish' : 'wait'} title="완료" />
        </Steps>
        {/* <br /> */}
        <FolderMenu bg="#3e5b76" color="#fff" title={'⏳ 프로젝트 진행상황 ⏳'} css={{ margin: 'auto -1px' }}>
          <S>
            <h3 css={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>
              ♠ 프로젝트 금액 {data.coin.toLocaleString()}♠
            </h3>
            {p == 1 && <Text>🙋 메이커 선택 전 입니다. </Text>}
            {p >= 2 && (
              <Flex>
                <span>🐹 결제 전입니다. 결제후 다음단계가 진행됩니다</span>
                {p == 2 && (
                  <Button types="secondary" $fill>
                    결제하기
                  </Button>
                )}
              </Flex>
            )}

            {p >= 3 && (
              <>
                <Text>
                  💵 {data.coin.toLocaleString()}
                  원이 결제 되었습니다.
                </Text>
                <Text>
                  👌 {data.author.nickname}
                  유저가 작업중입니다.
                </Text>
              </>
            )}
            {p >= 4 && (
              <>
                <Text>작업완료하였습니다.</Text>
              </>
            )}
          </S>
        </FolderMenu>
      </ProjectProgress>
    </>
  );
};

const S = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffeefc;
  font-weight: bold;
  /* padding: 0 20px; */
`;
const Text = styled.span`
  color: #e9e9e9; // ${theme.color.seRgb(0.8)};
  font-weight: bold;
  margin-bottom: 5px;
`;
