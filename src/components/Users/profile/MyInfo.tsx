import 'antd/dist/antd.css';
import React from 'react';
import { useAuth, useInput } from 'src/hooks';
import * as Lib from 'src/components/common';
import * as S from './style/myInfo.style';
import { UserUpdateForm } from './UpdateForm';
import { Divider } from 'antd';
type Props = {};

export const MyInfo = (props: Props) => {
  const { auth } = useAuth();
  return (
    <div css={{ paddingBottom: '15px' }}>
      <Divider orientation="left">
        <h2>내정보</h2>
      </Divider>
      <S.InfoWrapper>
        <UserUpdateForm />
        <br />
        <br />
        <div>
          <S.Flex>
            <S.Label2>보유코인</S.Label2>
            <S.Coin>{auth?.coin.toLocaleString()}</S.Coin>

            <Lib.Link href="/user/my-coin">
              <Lib.Button types="primary">보기</Lib.Button>
            </Lib.Link>
          </S.Flex>
          <S.Hr />

          <S.Flex>
            <S.Label2>활동점수</S.Label2>
            <S.P>준비중...</S.P>
          </S.Flex>

          <S.Flex>
            <S.Label2>채택 받은 답변</S.Label2>
            <S.P>{auth?.getAcceptCount}</S.P>
          </S.Flex>

          <S.Flex>
            <S.Label2>질문 수</S.Label2>
            <S.P>{auth?.questionsCount}</S.P>
          </S.Flex>
        </div>
      </S.InfoWrapper>
    </div>
  );
};

export default MyInfo;
