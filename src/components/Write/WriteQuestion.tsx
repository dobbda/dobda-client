import 'antd/dist/antd.css';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import { Editor } from 'src/components/Editor';
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu, CoinView } from './style/write.style';
import { Input as AntInput, Input, message } from 'antd';
import 'antd/dist/antd.css';

import Hashtags from './atom/Hashtags';
import { atom, Loading } from 'src/components/common';
import { Button } from 'src/components/common/@share/Buttons';
import { useAddQuestion, useAuth, useDidMountEffect, useErrMsg } from 'src/hooks';
import { CreateQuestion, QuestionDetail } from 'src/types';
import { q } from 'src/api';
import Link from 'next/link';

type Props = {
  data?: QuestionDetail;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
};
const WriteQuestion = ({ data, setIsEdit }: Props) => {
  const queryClient = useQueryClient();
  const [saveLoading, setSaveLoading] = useState(false);
  const [contentTitle, setContentTitle] = useState<string>(data?.title);
  const [tags, setTags] = useState<string[] | null>(data?.tagNames.map((tags: any) => tags.name));
  const [html, setHtml] = React.useState<string>(data?.content);
  const [coin, setCoin] = useState<number>(data?.coin);

  const addQuestion = useAddQuestion(q.addQuestion);
  const editQuestion = useAddQuestion(q.updateQuestion, data?.id);

  const { errMsg } = useErrMsg();
  const { auth } = useAuth();

  const onChangeCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoin(Number(`${e.target.value}`));
  };

  const onSubmit = useCallback(() => {
    if (!confirm(`등록하시겠습니까? `)) return;
    const newData: CreateQuestion = {
      title: contentTitle,
      content: html,
      tagNames: tags,
      coin: coin,
    };
    if (data?.id) {
      editQuestion.mutate(newData);
    } else {
      addQuestion.mutate(newData);
    }
    setSaveLoading(true);
  }, [contentTitle, html, tags, coin, data?.id, editQuestion, addQuestion]);

  const onSubmitCheck = useCallback(() => {
    if (!(html && contentTitle && tags[0])) {
      message.error('비어있는 항목이 있습니다.');
      return;
    }
    if (coin > 0) {
      if (coin > auth?.coin) message.error('보유코인이 부족합니다');
    }
    onSubmit();
  }, [auth?.coin, coin, contentTitle, html, onSubmit, tags]);

  const cancelHandler = useCallback(() => {
    if (confirm('수정된 정보는 저장되지 않습니다.')) setIsEdit(false);
  }, [setIsEdit]);

  useDidMountEffect(() => {
    if (addQuestion.isSuccess || editQuestion?.isSuccess) {
      setHtml('');
      setSaveLoading(false);
      data?.id && setIsEdit(false);
    }
    if (addQuestion.isError || editQuestion?.isError) {
      message.error(errMsg);
    }
  }, [editQuestion?.isSuccess, addQuestion.isSuccess, data?.id, addQuestion.isError, editQuestion?.isError]);
  return (
    <>
      <h1>{data?.id ? '질문수정 페이지' : '질문작성 페이지'}</h1>

      <Write_Wrapper>
        <EnrQorl>
          <div>
            <Label>
              태그를 추가해 주세요(최대10개)
              <Pilsu />
            </Label>
            <Hashtags tags={tags} setTags={setTags} />
          </div>
          <br />
          <div>
            <Label>코인을 입력해주세요</Label>
            <CoinView className="coin-setting-group">
              <Input type="number" placeholder="지불할 코인" value={coin} onChange={onChangeCoin} />
              <div className="coin-data">
                <Link href="#">충전하기</Link> <span>보유코인: {auth?.coin}</span>{' '}
              </div>
            </CoinView>
          </div>
        </EnrQorl>

        <Label>
          제목을 입력해주세요 <Pilsu />
        </Label>
        <InputTitle value={contentTitle} onChange={(e) => setContentTitle(e.target.value)} />

        <EditorContainer>
          <Editor html={html} setHtml={setHtml} height="600px" />
        </EditorContainer>
        <br />
        <atom.Flex>
          {data?.id && (
            <Button onClick={cancelHandler} css={{ width: '150px', marginRight: '5px' }} types="danger">
              취소
            </Button>
          )}
          <Button onClick={onSubmitCheck} css={{ width: '150px' }} types="secondary" $fill>
            <Loading loading={saveLoading} />
            저장
          </Button>
        </atom.Flex>
      </Write_Wrapper>
    </>
  );
};

export default React.memo(WriteQuestion);

const InputTitle = styled(AntInput)`
  min-height: 46px;
  font-size: 15px;
  border-bottom: 1.5px solid #dee2e6;
`;

const EditorContainer = styled.div`
  margin-top: 20px;
`;
