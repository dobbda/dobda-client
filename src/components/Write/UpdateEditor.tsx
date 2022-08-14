import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useClientValue } from 'src/hooks/queries/queryHooks';

import { Editor } from 'src/components/Editor';
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu } from './style/write.element';
import { Select, DatePicker, DatePickerProps, Input as AntInput, Tag } from 'antd';

import { Hashtags } from './atom/Hashtags';
import { atom, Link } from '../common';
import useAddQuestionMutate from 'src/hooks/mutate/useAddQuestionMutate';
import { CreateQuestion, Question, QuestionDetail } from 'src/types';
import { q } from 'src/api';
import { keys } from 'src/hooks/queries/queryKeys';
import { CoinView } from './atom/CoinView';

type Props = {
  oldData: QuestionDetail;
	setIsEdit:  React.Dispatch<React.SetStateAction<boolean>>
  category: string;
};

const UpdateEditor = ({ oldData, category,setIsEdit }: Props) => {
  const queryClient = useQueryClient();
  const [deadline, setDeadline] = useState<string | null>();
  const [contentTitle, setContentTitle] = useState<string>(oldData?.title);
  const [tags, setTags] = useState<string[]>(oldData?.tagNames.map((tags) => tags.name));
  const [mdStr, setMdStr] = React.useState<string>(oldData?.content);
  const [coin, setCoin] = useState(oldData?.coin);
  const {mutate, isError, isSuccess, error} = useAddQuestionMutate(q.updateQuestion, oldData?.id);

  const onCangeData: DatePickerProps['onChange'] = useCallback((date, dateString) => {
    setDeadline(dateString);
  }, []);
  const onSubmitQuestion = useCallback(() => {
    const data: CreateQuestion = {
      title: contentTitle,
      content: mdStr,
      tagNames: tags,
      coin: coin,
    };
    mutate(data);
  }, [mutate, coin, contentTitle, mdStr, tags]);

  const onSubmitFeatureRequest = useCallback(() => {
    const data: CreateQuestion = {
      title: contentTitle,
      content: mdStr,
      tagNames: tags,
      coin: coin,
    };
    mutate(data);
  }, [mutate, coin, contentTitle, mdStr, tags]);

	useEffect(() => {
		if(isSuccess) setIsEdit(false);
		if(isError){alert(error)}
	},[isError, isSuccess, setIsEdit, error])
  const onSubmitCheck = useCallback(() => {
    if (!(tags && mdStr && contentTitle && tags)) {
      return toast.error('입력 정보가 더 필요합니다', { autoClose: 1000 });
    }
    if (category == 'request' && !coin) {
      return toast.error('외주 요청은 코인이 필수 입니다', { autoClose: 1000 });
    }
		if (coin <1000) return toast.error('최소 1,000 코인 부터입니다', { autoClose: 1000 });
    if (category == 'request' && !deadline) {
      return toast.info('마감기한을 입력해주세요', { autoClose: 1000 });
    }

    if (category == 'question') onSubmitQuestion();
    else if (category == 'request') onSubmitFeatureRequest();
  }, [tags, mdStr, contentTitle, category, coin, deadline, onSubmitQuestion, onSubmitFeatureRequest]);

  return (
    <Write_Wrapper>
      <EnrQorl>
        <div>
          <Group>
            <Label>
              카테고리
              <Pilsu />
            </Label>
            <Select style={{ width: 140 }} defaultValue="question" disabled>
              <Select.Option value="question">질문하기</Select.Option>
              <Select.Option value="request">기능요청</Select.Option>
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
          <CoinView coin={coin} setCoin={setCoin} />
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
			<SubmitBtn cancel={true} onClick={()=>setIsEdit(false)}>취소</SubmitBtn>
        <SubmitBtn onClick={onSubmitCheck}>저장</SubmitBtn>
      </atom.Flex>
      <ToastContainer position="bottom-right" pauseOnFocusLoss draggable pauseOnHover />
    </Write_Wrapper>
  );
};

export default React.memo(UpdateEditor);

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
