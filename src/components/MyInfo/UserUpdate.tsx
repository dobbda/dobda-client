import 'antd/dist/antd.css';
import React, { useCallback } from 'react';
import { useAuth, useInput } from 'src/hooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Hashtags } from 'src/components/Write';
import * as S from './style/MyInfo.style';
import { Button } from '../common';
import { useQuery, useQueryClient } from 'react-query';
import { user } from 'src/api';
import { UserUpdate } from 'src/types';
import axios from 'axios';

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
    console.log(isValidate, data);

    if (isValidate) {
      return toast.warning('변경사항이 없습니다.', { autoClose: 1000 });
    }
    const updateUser = await axios
      .patch('/api/users/myinfo', data)
      .then((res) => res.data?.response)
      .catch((err) => toast(err?.data?.response));
    updateUser && queryClient.setQueryData('auth', updateUser);
    updateUser?.id && toast.success('저장되었습니다', { autoClose: 2000 });
  }, [auth, avatar, description, name, nickname, skills]);

  return (
    <>
      {auth?.id ? (
        <>
          <S.EditInfoWrapper>
            <S.Culumn>
              <S.Label>이름</S.Label>
              <S.Value>
                <S.P>{name}</S.P>
              </S.Value>
            </S.Culumn>

            <S.Culumn>
              <S.Label>이메일</S.Label>
              <S.Value>
                <S.P>{auth.email}</S.P>
              </S.Value>
            </S.Culumn>

            <S.Hr />

            <S.Culumn>
              <S.Label>닉네임</S.Label>
              <S.Value>
                <S.Input defaultValue={auth.nickname} onChange={onChangeNickname} />
              </S.Value>
            </S.Culumn>

            <S.Culumn>
              <S.Label>discript</S.Label>
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
              <Button htmlType="submit" type="primary" onClick={onSubmitUserUpdate}>
                저 장
              </Button>
              <S.Msg>저장하지 않으면 적용되지 않습니다.</S.Msg>
            </S.BtnWrp>
          </S.EditInfoWrapper>
        </>
      ) : null}
      <ToastContainer position="top-center" hideProgressBar draggable />
    </>
  );
};
