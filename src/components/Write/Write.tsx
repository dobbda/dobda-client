import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import {Editor} from 'src/components/Editor'
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu } from './style/write.style';
import { Select, DatePicker, DatePickerProps, Input as AntInput, Tag } from 'antd';

import { Hashtags } from './atom/Hashtags';
import { atom, Link } from '../common';
import {useAddQuestionMutate} from 'src/hooks';
import { CreateQuestion } from 'src/types';
import {CoinView} from "./atom/CoinView"
import { q } from 'src/api';
type Props = {};
const Write = () => {
  const queryClient = useQueryClient();

  const [categorie, setCategorie] = useState<string | null>();
  const [deadline, setDeadline] = useState<string | null>();
  const [contentTitle, setContentTitle] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [mdStr, setMdStr] = React.useState<string>('');
  const [coin, setCoin] = useState(0)
	
	const addQuestion = useAddQuestionMutate(q.addQuestion)
  const onChangeCagegory = useCallback((v: string) => {
    setCategorie(v);
  }, []);

  const onCangeData: DatePickerProps['onChange'] = useCallback((date, dateString) => {
    setDeadline(dateString);
  }, []);

	const onSubmitQuestion = useCallback(() => {
		const data:CreateQuestion = {
			title: contentTitle,
			content: mdStr,
			tagNames: tags,
			coin: coin,
		}
		addQuestion.mutate(data)
	},[addQuestion, coin, contentTitle, mdStr, tags]);


	const onSubmitFeatureRequest = useCallback(() => {
		const data:CreateQuestion = {
			title: contentTitle,
			content: mdStr,
			tagNames: tags,
			coin: coin,
		}
		addQuestion.mutate(data)
	},[addQuestion, coin, contentTitle, mdStr, tags])


	const onSubmitCheck = useCallback(() => {
		if(!categorie) return  toast.info("카테고리를 선택해주세요",{autoClose: 1000,})
		if(!(tags&&mdStr&&contentTitle&&tags)) {return toast.error("입력 정보가 더 필요합니다",{autoClose: 1000,})}
		if(categorie=="request"&& !coin){return  toast.error("외주 요청은 코인이 필수 입니다",{autoClose: 1000,})}
		if(categorie=="request"&& !deadline){return  toast.info("마감기한을 입력해주세요",{autoClose: 1000,})}

		if(categorie=="question") onSubmitQuestion()
		else if(categorie=="request") onSubmitFeatureRequest()
	},[tags, mdStr, contentTitle, categorie, coin, deadline, onSubmitQuestion, onSubmitFeatureRequest])
	


  return (
    <Write_Wrapper>
      <EnrQorl>
        <div>
          <Group>
            <Label>카테고리<Pilsu /></Label>
            <Select style={{ width: 140 }} onChange={onChangeCagegory}>
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
          <Label>코인을 입력해주세요</Label><Link href='#'>충전</Link>
          {<CoinView coin={coin} setCoin={setCoin}/>}
        </div>
      </EnrQorl>
      <Label>
        제목을 입력해주세요 <Pilsu />
      </Label>
      <InputTitle value={contentTitle} onChange={(e) => setContentTitle(e.target.value)} />
      <EditorContainer>
        <Editor mdStr={mdStr} setMdStr={setMdStr}  height="600px"/>
      </EditorContainer>
			<atom.Flex ><SubmitBtn cancel={true} onClick={()=>toast.success("준비중...")} >임시저장</SubmitBtn> <SubmitBtn onClick={onSubmitCheck}>등록</SubmitBtn></atom.Flex>
			<ToastContainer
				position="bottom-right"
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

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

const SubmitBtn = styled.button<{cancel?:boolean}>`
cursor: pointer;
	background-color: #0057FF;
	border: solid 1px #0057FF;
	padding: 5px 20px;
	color: #fff;
	border-radius: 4px;
	margin: 0 10px;
	${({cancel})=>cancel&& "background-color: #fff; color:#000"}
`
