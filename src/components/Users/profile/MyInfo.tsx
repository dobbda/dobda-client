import 'antd/dist/antd.css';
import React from 'react';
import { useInput } from 'src/hooks';
import * as Lib from 'src/components/common';
import * as S from './style/myInfo.style';
import { UserUpdateForm } from './UpdateForm';
type Props = {};

export const MyInfo = (props: Props) => {
  const [nickname, onChangeNickname] = useInput('쭈꾸미', 10);
  const [discript, onChangeDiscript] = useInput('쭈꾸미', 260);
  const [skills, setSkills] = React.useState<string[]>([]);
  return (
    <>
      <S.InfoWrapper>
        <h1 css={{ margin: '10px' }}>내 정보</h1>
        <UserUpdateForm />
        <br />
        <br />
        <div>
          <S.Flex>
            <S.Label2>보유코인</S.Label2>
            <S.Coin>9999</S.Coin>

            <Lib.Link href="/user/coinhistory">
              <Lib.Button types="primary">보기</Lib.Button>
            </Lib.Link>
          </S.Flex>
          <S.Hr />

          <S.Flex>
            <S.Label2>활동점수</S.Label2>
            <S.Coin>99</S.Coin>
          </S.Flex>

          <S.Flex>
            <S.Label2>채택 글</S.Label2>
            <S.Coin>99</S.Coin>
          </S.Flex>

          <S.Flex>
            <S.Label2>내 글 목록</S.Label2>
            <S.Coin>99</S.Coin>
            <Lib.Link href="/user/poster-list">
              <Lib.Button types="secondary">보기</Lib.Button>
            </Lib.Link>
          </S.Flex>

          <S.Hr />
        </div>
      </S.InfoWrapper>
    </>
  );
};
