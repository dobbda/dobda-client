import 'antd/dist/antd.css';
import React from 'react';
import { useInput } from 'src/hooks/useInput';
import { UserUpdate } from './UserUpdate';
import * as Lib from 'src/components/common';

import { Hashtags } from 'src/components/Write';
import * as S from './style/MyInfo.Element';
type Props = {};

export const MyInfo = (props: Props) => {
  const [nickname, onChangeNickname] = useInput('쭈꾸미', 10);
  const [discript, onChangeDiscript] = useInput('쭈꾸미', 260);
  const [skills, setSkills] = React.useState<string[]>([]);
  return (
    <>
      <S.InfoWrapper>
        <h1>내 정보</h1>
        <UserUpdate />
<br/>
<br/>
        <div>
          <S.Flex>
            <S.Label2>보유코인</S.Label2>
            <S.Coin>9999</S.Coin>

            <Lib.Link href="/user/coinhistory"><S.Btn>보기</S.Btn></Lib.Link>
          </S.Flex>
          <S.Hr/>

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
            <Lib.Link href="/user/poster-list"><S.Btn>보기</S.Btn></Lib.Link>

          </S.Flex>

          <S.Hr/>
        </div>
      </S.InfoWrapper>
    </>
  );
};
