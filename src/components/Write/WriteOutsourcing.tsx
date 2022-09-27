import 'antd/dist/antd.css';

import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';

import { Editor } from 'src/components/Editor';
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu } from './style/write.style';
import { Select, DatePicker, DatePickerProps, Input as AntInput, Tag, message } from 'antd';

import Hashtags from './atom/Hashtags';
import { atom, Button, Link, Loading } from '../common';
import { useAddOutsource, useAddQuestion, useDidMountEffect, useErrMsg } from 'src/hooks';
import { CreateOutsource, CreateQuestion, OutsourceDetail } from 'src/types';
import { CoinView } from './atom/CoinView';
import { q } from 'src/api';
import { o } from 'src/api';
type Props = {
  data?: OutsourceDetail;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const WriteOutsourcing = ({ data, setIsEdit }: Props) => {
  const queryClient = useQueryClient();
  const [saveLoading, setSaveLoading] = useState(false);

  const [deadline, setDeadline] = useState<string | null>(data?.deadline);
  const [contentTitle, setContentTitle] = useState<string>(data?.title);
  const [tags, setTags] = useState<string[]>(data?.tagNames.map((tags: any) => tags.name));
  const [mdStr, setMdStr] = React.useState<string>(data?.content);
  const [coin, setCoin] = useState<number>(data?.coin);
  const [image, setImage] = useState(data?.cardImage);

  const addOutsource = useAddOutsource(o.addOutsource);
  const editOutsource = useAddOutsource(o.updateOutsource, data?.id);

  const errMsg = useErrMsg();

  useEffect(() => {
    fetch('https://source.unsplash.com/800x200/?computer').then((response) => {
      setImage(response.url);
    });
  }, []);

  const onCangeData: DatePickerProps['onChange'] = useCallback((date, dateString) => {
    setDeadline(dateString);
  }, []);

  const onSubmit = useCallback(() => {
    if (!confirm(`등록하시겠습니까? `)) return;

    const newData: CreateOutsource = {
      title: contentTitle,
      content: mdStr,
      tagNames: tags,
      coin: coin,
      deadline,
      cardImage: image,
    };

    if (data?.id) {
      editOutsource.mutate(newData);
    } else addOutsource.mutate(newData);
    setSaveLoading(true);
  }, [contentTitle, mdStr, tags, coin, deadline, image, data?.id, addOutsource, editOutsource]);

  const onSubmitCheck = useCallback(() => {
    if (!(mdStr && contentTitle && tags[0])) {
      return message.error('입력 정보가 더 필요합니다');
    }
    if (!coin) {
      return message.error('작업 금액은 필수 입니다.');
    }
    if (!deadline) {
      return message.info('마감기한을 입력해주세요');
    }

    onSubmit();
  }, [tags, mdStr, contentTitle, coin, deadline, onSubmit]);

  const cancelHandler = useCallback(() => {
    if (confirm('수정된 정보는 저장되지 않습니다.')) setIsEdit(false);
  }, [setIsEdit]);

  useDidMountEffect(() => {
    if (editOutsource.isSuccess || addOutsource.isSuccess) {
      setMdStr('');
      setSaveLoading(false);
      data?.id && setIsEdit(false);
    }
    if (addOutsource.isError || editOutsource?.isError) {
      message.error(errMsg);
    }
  }, [addOutsource.isSuccess, editOutsource.isSuccess, errMsg, addOutsource.isError, editOutsource?.isError]);
  return (
    <>
      <h1>{data?.id ? '프로젝트 수정 페이지' : '프로젝트 생성 페이지'}</h1>
      <Write_Wrapper>
        <EnrQorl>
          <div>
            <Group>
              <Label>마감기한</Label>
              <DatePicker onChange={onCangeData} placeholder="마감기한" disabledDate={(e) => e.valueOf() < Date.now()} />
            </Group>{' '}
          </div>
          <br />

          <div>
            <Label>작업 금액을 입력해주세요</Label>
            {<CoinView coin={coin} setCoin={setCoin} />}
          </div>
          <br />
          <div>
            <Label>
              필요료하는 기술스택을 추가해주세요
              <Pilsu /> Ex. photoshop, react
            </Label>

            <Hashtags tags={tags} setTags={setTags} />
          </div>
          <br />
        </EnrQorl>
        <Label>
          제목을 입력해주세요 <Pilsu />
        </Label>
        <InputTitle value={contentTitle} onChange={(e) => setContentTitle(e.target.value)} />
        <EditorContainer>
          <Editor mdStr={mdStr} setMdStr={setMdStr} height="600px" />
        </EditorContainer>
        <atom.Flex>
          {data?.id && (
            <Button cancel onClick={cancelHandler} css={{ width: '150px', marginRight: '5px' }}>
              취소
            </Button>
          )}
          <Button onClick={onSubmitCheck} css={{ width: '150px' }}>
            <Loading loading={saveLoading} />
            등록
          </Button>
        </atom.Flex>
      </Write_Wrapper>
    </>
  );
};

export default React.memo(WriteOutsourcing);

const InputTitle = styled(AntInput)`
  min-height: 46px;
  font-size: 15px;
  border-bottom: 1.5px solid #dee2e6;
`;

const EditorContainer = styled.div`
  margin-top: 20px;
`;

const SubmitBtn = styled.button<{ cancel?: boolean }>`
  cursor: pointer;
  background-color: #0057ff;
  border: solid 1px #0057ff;
  padding: 5px 20px;
  color: #fff;
  border-radius: 4px;
  margin: 0 10px;
  ${({ cancel }) => cancel && 'background-color: #fff; color:#000'}
`;
