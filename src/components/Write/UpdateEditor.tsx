import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useClientValue, useAddQuestion, keys, useAddOutsource } from 'src/hooks';

import { Editor } from 'src/components/Editor';
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu } from './style/write.style';
import { Select, DatePicker, DatePickerProps, Input as AntInput, Tag } from 'antd';

import { Hashtags } from './atom/Hashtags';
import { atom, Link } from '../common';
import { CreateOutsource, CreateQuestion, OutsourceDetail, Question, QuestionDetail } from 'src/types';
import { o, q } from 'src/api';
import { CoinView } from './atom/CoinView';
import moment from 'moment';

type Props = {
  oldData: any ;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  category: "outsource"|"question";
};

const UpdateEditor = ({ oldData, category, setIsEdit }: Props) => {
	const tdata = category === "outsource" && oldData as OutsourceDetail
  const queryClient = useQueryClient();
  const [deadline, setDeadline] = useState<string|null>(category=="outsource" ? tdata.deadline : null);
  const [contentTitle, setContentTitle] = useState<string>(oldData?.title);
  const [tags, setTags] = useState<string[]>(oldData?.tagNames.map((tags:any) => tags.name));
  const [mdStr, setMdStr] = React.useState<string>(oldData?.content);
  const [coin, setCoin] = useState(oldData?.coin);

  const editQuestion = useAddQuestion( q.updateQuestion , oldData?.id) 
	const editOutsource = useAddOutsource(o.updateOutsource, oldData?.id) 

  const onCangeData: DatePickerProps['onChange'] = useCallback((date, dateString) => {
    setDeadline(dateString);
  }, []);
	console.log(category)

  const onSubmit = useCallback(() => {
    const data: CreateQuestion|CreateOutsource = {
      title: contentTitle,
      content: mdStr,
      tagNames: tags,
      coin: coin,
			deadline: deadline
    };
    category=="question" ?  editQuestion.mutate(data): editOutsource.mutate(data)
  }, [contentTitle, mdStr, tags, coin, deadline, category, editQuestion, editOutsource]);

  useEffect(() => {
    if (editQuestion.isSuccess) setIsEdit(false);
    if (editQuestion.isError) {
      alert(editQuestion.error.response.data.error.message);
    }
  }, [setIsEdit, editQuestion.error, editQuestion.isSuccess, editQuestion.isError]);

  const onSubmitCheck = useCallback(() => {
    if (!(tags && mdStr && contentTitle && tags)) {
      return toast.error('입력 정보가 더 필요합니다', { autoClose: 1000 });
    }

    if (category == 'outsource' && !coin) {
      return toast.error('외주 요청은 코인이 필수 입니다', { autoClose: 1000 });
    }

    if (coin && coin < 1000) return toast.error('최소 1,000 코인 부터입니다', { autoClose: 1000 });

    if (category == 'outsource' && !deadline) {
      return toast.info('마감기한을 입력해주세요', { autoClose: 1000 });
    }

		onSubmit();
  }, [tags, mdStr, contentTitle, category, coin, deadline, onSubmit]);

  return (
    <Write_Wrapper>
      <EnrQorl>
        <div>
          <Group>
            <Label>
              카테고리
              <Pilsu />
            </Label>
            <Select style={{ width: 140 }} defaultValue={category} disabled>
              <Select.Option value="question">질문하기</Select.Option>
              <Select.Option value="outsource">기능요청</Select.Option>
            </Select>
          </Group>
          <Group>
            <Label>마감기한</Label>
            <DatePicker defaultValue={moment(oldData.deadline)} onChange={onCangeData} placeholder="마감기한"  disabledDate={(e)=>e.valueOf() < Date.now()}/>
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
        <SubmitBtn cancel={true} onClick={() => setIsEdit(false)}>
          취소
        </SubmitBtn>
        <SubmitBtn onClick={onSubmitCheck}>저장</SubmitBtn>
      </atom.Flex>
      <ToastContainer position="bottom-right" hideProgressBar draggable />
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
