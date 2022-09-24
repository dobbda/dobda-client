import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';

import { Editor } from 'src/components/Editor';
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu } from './style/write.style';
import { Select, DatePicker, DatePickerProps, Input as AntInput, Tag, message } from 'antd';

import Hashtags from './atom/Hashtags';
import { atom, Button, Link, Loading } from '../common';
import { useAddOutsource, useAddQuestion, useDidMountEffect } from 'src/hooks';
import { CreateOutsource, CreateQuestion } from 'src/types';
import { CoinView } from './atom/CoinView';
import { q } from 'src/api';
import { o } from 'src/api';
type Props = {};
const Write = () => {
  const queryClient = useQueryClient();
  const [saveLoading, setSaveLoading] = useState(false);
  const [categorie, setCategorie] = useState<string | null>();
  const [deadline, setDeadline] = useState<string | null>();
  const [contentTitle, setContentTitle] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [mdStr, setMdStr] = React.useState<string>('');
  const [coin, setCoin] = useState(0);

  const addQuestion = useAddQuestion(q.addQuestion);
  const addOutsource = useAddOutsource(o.addOutsource);
  const onChangeCagegory = useCallback((v: string) => {
    setCategorie(v);
  }, []);

  const onCangeData: DatePickerProps['onChange'] = useCallback((date, dateString) => {
    setDeadline(dateString);
  }, []);

  const onSubmit = useCallback(() => {
    if (!confirm(`등록하시겠습니까? `)) return;
    const data: CreateQuestion | CreateOutsource = {
      title: contentTitle,
      content: mdStr,
      tagNames: tags,
      coin: coin,
      deadline,
    };

    if (categorie == 'question') {
      addQuestion.mutate(data);
      setSaveLoading(true);
    }
    if (categorie == 'outsourcing') {
      addOutsource.mutate(data);
      setSaveLoading(true);
    }
  }, [contentTitle, mdStr, tags, coin, deadline, categorie, addQuestion, addOutsource]);

  const onSubmitCheck = useCallback(() => {
    if (!categorie) return message.info('카테고리를 선택해주세요');
    if (!(tags && mdStr && contentTitle && tags)) {
      return message.error('입력 정보가 더 필요합니다');
    }
    if (categorie == 'outsourcing' && !coin) {
      return message.error('외주 요청은 코인이 필수 입니다');
    }
    if (categorie == 'outsourcing' && !deadline) {
      return message.info('마감기한을 입력해주세요');
    }

    onSubmit();
  }, [categorie, tags, mdStr, contentTitle, coin, deadline, onSubmit]);
  useDidMountEffect(() => {
    if (addQuestion.isSuccess || addOutsource.isSuccess) {
      setMdStr('');
      setSaveLoading(false);
    }
  }, [addOutsource.isSuccess, addQuestion.isSuccess]);
  return (
    <Write_Wrapper>
      <EnrQorl>
        <div>
          <Group>
            <Label>
              카테고리
              <Pilsu />
            </Label>
            <Select style={{ width: 140 }} onChange={onChangeCagegory}>
              <Select.Option value="question">질문하기</Select.Option>
              <Select.Option value="outsourcing">외주요청</Select.Option>
            </Select>
          </Group>
          <Group>
            <Label>마감기한</Label>
            <DatePicker onChange={onCangeData} placeholder="마감기한" />
          </Group>{' '}
        </div>
        <br />
        <div>
          <Label>
            태그를 생성해 주세요(최대10개)
            <Pilsu />
          </Label>

          <Hashtags tags={tags} setTags={setTags} />
        </div>
        <br />
        <div>
          <Label>코인을 입력해주세요</Label>
          <Link href="#">충전</Link>
          {<CoinView coin={coin} setCoin={setCoin} />}
        </div>
      </EnrQorl>
      <Label>
        제목을 입력해주세요 <Pilsu />
      </Label>
      <InputTitle value={contentTitle} onChange={(e) => setContentTitle(e.target.value)} />
      <EditorContainer>
        <Editor mdStr={mdStr} setMdStr={setMdStr} height="600px" />
      </EditorContainer>
      <atom.Flex>
        <Button onClick={onSubmitCheck} css={{ width: '150px', marginTop: '10px' }}>
          <Loading loading={saveLoading} />
          등록
        </Button>
      </atom.Flex>
    </Write_Wrapper>
  );
};

export default React.memo(Write);

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
