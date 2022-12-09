import 'antd/dist/antd.css';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import { Editor } from 'src/components/Editor';
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu, CoinView } from './style/write.style';
import { Input as AntInput, Input, message } from 'antd';
import 'antd/dist/antd.css';

import Hashtags from './atom/Hashtags';
import { atom, Loading, LoadingPage } from 'src/components/common';
import { Button } from 'src/components/common/@share/Buttons';
import { useAddQuestion, useAuth, useDidMountEffect, useErrMsg } from 'src/hooks';
import { CreateQuestion, Question, QuestionDetail } from 'src/types';
import { q } from 'src/api';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  data?: QuestionDetail;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
};
const WriteQuestion = ({ data, setIsEdit }: Props) => {
  const router = useRouter();
  const [contentTitle, setContentTitle] = useState<string>(data?.title);
  const [tags, setTags] = useState<string[] | null>(data?.tagNames.map((tags: any) => tags.name));
  const [html, setHtml] = React.useState<string>(data?.content);
  const [coin, setCoin] = useState<number>(data?.coin);

  const addQuestion = useAddQuestion(q.addQuestion);
  const editQuestion = useAddQuestion(q.updateQuestion, data?.id);

  const { errMsg } = useErrMsg();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth.id) {
      router.push('/');
    }
  }, []);
  useDidMountEffect(() => {
    if (addQuestion.isError || editQuestion?.isError) {
      message.error(errMsg);
    }
  }, [errMsg, addQuestion.isError, editQuestion?.isError]);

  const onChangeCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoin(Number(`${e.target.value}`));
  };

  const onSubmit = useCallback(() => {
    if (!confirm(data?.id ? '수정된 정보를 저장합니다.' : '질문을 등록합니다.')) return;
    const newData: CreateQuestion = {
      title: contentTitle,
      content: html,
      tagNames: tags,
      coin: coin,
    };
    if (data?.id) {
      editQuestion.mutateAsync(newData).then((v: Question) => {
        if (v.id) {
          if (confirm(`질문이 업데이트 되었습니다. 페이지로 이동하시겠습니까? `)) {
            setCoin(0);
            setHtml('');
            setContentTitle('');
            setTags(['']);
            setIsEdit(false);
          }
        }
      });
    } else {
      addQuestion.mutateAsync(newData).then((v: any) => {
        if (v.id) {
          setCoin(0);
          setHtml('');
          setContentTitle('');
          setTags(['']);
          if (confirm(`새로운 질문이 등록되었습니다. 페이지로 이동하시겠습니까? `)) {
            router.push(`/questions/` + v.id);
          }
        }
      });
    }
  }, [contentTitle, html, tags, coin, data?.id, editQuestion, addQuestion, router]);

  const onSubmitCheck = useCallback(() => {
    if (coin > 0) {
      if (coin > auth?.coin) message.error('보유코인이 부족합니다');
    }

    if (!contentTitle) {
      message.error('제목을 추가해주세요');
      return;
    }
    if (!html) {
      message.error('내용을 추가해주세요');
      return;
    }

    if (!tags?.length) {
      message.error('태그를 추가해주세요');
      return;
    }

    onSubmit();
  }, [auth?.coin, coin, contentTitle, html, onSubmit, tags]);

  const cancelHandler = useCallback(() => {
    if (confirm('수정된 정보는 저장되지 않습니다.')) setIsEdit(false);
  }, [setIsEdit]);

  return (
    <>
      <Write_Wrapper>
        <EnrQorl>
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
        <InputTitle value={contentTitle} onChange={(e) => setContentTitle(e.target.value)} placeholder="제목" />

        <EditorContainer>
          <Editor html={html} setHtml={setHtml} height="600px" />
        </EditorContainer>

        <div css={{ margin: '15px 0' }}>
          <Label>
            태그를 추가해 주세요(필수 <Pilsu />)
          </Label>
          <Hashtags tags={tags} setTags={setTags} />
        </div>
        <atom.Flex>
          {data?.id && (
            <Button onClick={cancelHandler} css={{ width: '150px', marginRight: '5px' }} types="danger">
              취소
            </Button>
          )}
          <Button onClick={onSubmitCheck} css={{ width: '150px', padding: '5px auto' }} types="secondary" $fill>
            {addQuestion?.isLoading || editQuestion?.isLoading ? <Loading loading={true} /> : data?.id ? '저장하기' : '등록하기'}
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
