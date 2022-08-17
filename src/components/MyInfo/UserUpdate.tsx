import 'antd/dist/antd.css';
import React from 'react';
import { useInput } from 'src/hooks';

import { Input as AntInput, Button } from 'antd';

import { Hashtags } from 'src/components/Write';
import * as S from './style/MyInfo.style';
type Props = {};

export const UserUpdate = (props: Props) => {
  const [nickname, onChangeNickname] = useInput('쭈꾸미', 10);
  const [discript, onChangeDiscript] = useInput('쭈꾸미', 260);
  const [skills, setSkills] = React.useState<string[]>([]);

  const saveHandler = () => {};

  return (
    <>
      <S.EditInfoWrapper>
        <S.Culumn>
          <S.Label>이름</S.Label>
          <S.Value>
            <S.P>홍길동</S.P>
          </S.Value>
        </S.Culumn>

        <S.Culumn>
          <S.Label>이메일</S.Label>
          <S.Value>
            <S.P>example@e-mail.com</S.P>
          </S.Value>
        </S.Culumn>

        <S.Hr />

        <S.Culumn>
          <S.Label>닉네임</S.Label>
          <S.Value>
            <S.Input value={nickname} onChange={onChangeNickname} />
          </S.Value>
        </S.Culumn>

        <S.Culumn>
          <S.Label>discript</S.Label>
          <S.Value>
            <S.Input.TextArea value={discript} onChange={onChangeDiscript} />
          </S.Value>
        </S.Culumn>
        <S.Hr />

        <S.Culumn>
          <S.Label>스킬</S.Label>
          <S.Value>
            <Hashtags tagColor="#465666" tags={skills} setTags={setSkills} />
            <hr />
            <S.Msg>스킬 갯수는 최대10개 까지 가능합니다</S.Msg>
          </S.Value>
        </S.Culumn>
        <S.Hr />

        <S.BtnWrp>
          <Button htmlType="submit" type="primary" onClick={saveHandler} >
          {' '}
            저장
            {' '}
          </Button>
          <S.Msg>저장하지 않으면 적용되지 않습니다.</S.Msg>
        </S.BtnWrp>
      </S.EditInfoWrapper>
    </>
  );
};
