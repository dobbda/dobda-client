import 'antd/dist/antd.css';
import React, { useCallback } from 'react';
import { useAuth, useInput } from 'src/hooks';
import { Hashtags } from 'src/components/Write';
import { Button } from 'src/components/common';
import { useQuery, useQueryClient } from 'react-query';
import { UserUpdate } from 'src/types';
import axios from 'axios';
import * as S from './style/myInfo.style';
import { Avatar, message } from 'antd';
import { Refreshi } from 'src/icons';

type Props = {};

export const UserUpdateForm = (props: Props) => {
  const queryClient = useQueryClient();
  const { auth, refetch } = useAuth();
  const [nickname, onChangeNickname] = useInput<string>(auth?.id && auth?.nickname, 15);
  const [name, onChangeName] = useInput<string>(auth?.name, 10);
  const [avatar, onChangeAvatar] = useInput<string>(auth?.avatar);
  const [description, onChangeDescription] = useInput<string>(auth?.description, 260);
  const [skills, setSkills] = React.useState<string[]>((auth?.skill && auth.skill) || []);
  // const update = useQuery("auth",user.myInfoUpdate({""}), )

  const onSubmitUserUpdate = useCallback(async () => {
    const isValidate =
      auth.name === name &&
      auth.nickname == nickname &&
      auth.avatar == avatar &&
      auth.description == description &&
      auth.skill == skills;
    const data: UserUpdate = {
      name: name,
      nickname: nickname,
      avatar: avatar,
      skill: skills,
      description: description,
    };

    if (isValidate) {
      return message.warning('변경사항이 없습니다.');
    }
    const updateUser = await axios
      .patch('/api/users/myinfo', data)
      .then((res) => res.data?.response)
      .catch((err) => message.error(err?.data?.response));
    updateUser && queryClient.setQueryData('auth', updateUser);
    updateUser?.id && message.success('저장되었습니다');
  }, [auth, avatar, description, name, nickname, queryClient, skills]);

  return (
    <>
      {auth?.id ? (
        <>
          <S.EditInfoWrapper>
            <S.Culumn>
              <S.Value>
                {' '}
                <h3> {auth?.email}</h3>
              </S.Value>
            </S.Culumn>

            <S.Hr />

            <S.Culumn>
              <S.Label>닉네임: 다른 유저에게 보여지는 닉네임이에요.</S.Label>
              <S.Value>
                <Avatar src={auth?.avatar} /> <Refreshi css={{ marginRight: '10px', cursor: 'pointer' }} />
                <S.Input defaultValue={auth.nickname} onChange={onChangeNickname} />
              </S.Value>
            </S.Culumn>

            <S.Culumn>
              <S.Label>나에 대해 간단하게 소개해봐요~</S.Label>
              <S.Value>
                <S.Input.TextArea defaultValue={auth.description || '안녕하세요'} onChange={onChangeDescription} rows={4} />
              </S.Value>
            </S.Culumn>

            <S.Culumn>
              <S.Label>{'해시태그(10)'}</S.Label>

              <S.Value>
                <Hashtags tagColor="#465666" tags={skills} setTags={setSkills} />
              </S.Value>
            </S.Culumn>
            <S.Hr />

            <S.BtnWrp>
              <Button onClick={onSubmitUserUpdate} types="primary" $fill>
                저 장
              </Button>
              <S.Msg>저장하지 않으면 적용되지 않습니다.</S.Msg>
            </S.BtnWrp>
          </S.EditInfoWrapper>
        </>
      ) : null}
    </>
  );
};
