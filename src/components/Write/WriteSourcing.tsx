import 'antd/dist/antd.css';

import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery, useQueryClient } from 'react-query';

import { Editor } from 'src/components/Editor';
import { Write_Wrapper, EnrQorl, Label, Group, Pilsu, CoinView } from './style/write.style';
import { DatePicker, DatePickerProps, Input as AntInput, message, Input } from 'antd';

import Hashtags from './atom/Hashtags';
import { atom, Loading, Popover } from 'src/components/common';
import { useAddSourcing as useAddSourcing, useAuth, useDidMountEffect, useErrMsg } from 'src/hooks';
import { CreateOutsource, Outsource, OutsourceDetail } from 'src/interface';

import { Button } from 'src/components/common/@share/Buttons';

import { o } from 'src/api';
import { Tips } from '../common/@share/Tips';
import Link from 'next/link';
import { useRouter } from 'next/router';
type Props = {
  data?: OutsourceDetail;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
};

const WriteOutsourcing = ({ data, setIsEdit }: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [deadline, setDeadline] = useState<string | null>(data?.deadline);
  const [contentTitle, setContentTitle] = useState<string>(data?.title);
  const [tags, setTags] = useState<string[]>(data?.tagNames.map((tags: any) => tags.name));
  const [html, setHtml] = React.useState<string>(data?.content);
  const [coin, setCoin] = useState<number>(data?.coin);
  const [image, setImage] = useState(data?.cardImage);

  const addSourcing = useAddSourcing(o.addOutsource);
  const editOutsource = useAddSourcing(o.updateOutsource, data?.id);
  const { errMsg } = useErrMsg();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth.id) {
      router.push('/');
    }
  }, []);
  useDidMountEffect(() => {
    if (addSourcing.isError || editOutsource?.isError) {
      message.error(errMsg);
    }
  }, [errMsg, addSourcing.isError, editOutsource?.isError]);

  useEffect(() => {
    if (!image) {
      fetch('https://source.unsplash.com/800x200/?computer').then((response) => {
        setImage(response.url);
      });
    }
  }, []);

  const onChangeCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoin(Number(`${e.target.value}`));
  };
  const onCangeData: DatePickerProps['onChange'] = useCallback((date, dateString) => {
    setDeadline(dateString);
  }, []);

  const onSubmit = useCallback(() => {
    if (!confirm(data?.id ? '수정된 정보를 저장합니다. ' : `등록합니다. `)) return;

    const newData: CreateOutsource = {
      title: contentTitle,
      content: html,
      tagNames: tags,
      coin: coin,
      deadline,
      cardImage: image,
    };

    if (data?.id) {
      editOutsource.mutateAsync(newData).then((v: Outsource) => {
        if (v.id) {
          if (confirm(`정상적으로 저장되었습니다. 페이지로 이동하시겠습니까? `)) {
            setCoin(0);
            setHtml('');
            setContentTitle('');
            setTags(['']);
            setIsEdit(false);
          }
        }
      });
    } else {
      addSourcing.mutateAsync(newData).then((v: Outsource) => {
        if (v.id) {
          setCoin(0);
          setHtml('');
          setContentTitle('');
          setTags(['']);
          if (confirm(`정상적으로 등록되었습니다. 페이지로 이동하시겠습니까? `)) {
            router.push(`/custom-project/requests/` + v.id);
          }
        }
      });
    }
  }, [contentTitle, html, tags, coin, deadline, image, data?.id, addSourcing, editOutsource]);

  const onSubmitCheck = useCallback(() => {
    if (!html) {
      return message.error('내용을 입력해주세요');
    }
    if (!tags?.length) {
      return message.error('필요로하는 기술스택을 추가해주세요.');
    }
    if (!contentTitle) {
      return message.error('제목을 입력해주세요.');
    }
    if (!coin) {
      return message.error('작업 금액은 필수 입니다.');
    }
    if (!deadline) {
      return message.info('마감기한을 입력해주세요');
    }

    onSubmit();
  }, [tags, html, contentTitle, coin, deadline, onSubmit]);

  const cancelHandler = useCallback(() => {
    if (confirm('수정된 정보는 저장되지 않습니다.')) setIsEdit(false);
  }, [setIsEdit]);

  return (
    <>
      <Write_Wrapper>
        <EnrQorl>
          <h1>{data?.id ? '소싱 수정 페이지' : '소싱 작성 페이지'}</h1>

          <div>
            <Group>
              <Label>마감기한</Label>
              <DatePicker onChange={onCangeData} placeholder="마감기한" disabledDate={(e) => e.valueOf() < Date.now()} />
            </Group>{' '}
          </div>
          <br />

          <div>
            <Label>
              작업 금액을 입력해주세요
              <Tips content="메이커 선택 완료시 현재 입력된 금액을 결제합니다" />
            </Label>
            <CoinView className="coin-setting-group">
              <Input type="number" placeholder="지불할 코인" value={coin} onChange={onChangeCoin} />
            </CoinView>
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
          <Editor html={html} setHtml={setHtml} height="600px" />
        </EditorContainer>
        <br />
        <atom.Flex>
          {data?.id && (
            <Button types="primary" onClick={cancelHandler} css={{ width: '150px', marginRight: '5px' }}>
              취소
            </Button>
          )}
          <Button onClick={onSubmitCheck} css={{ width: '150px' }} types="primary" $fill>
            {editOutsource.isSuccess || addSourcing.isSuccess ? <Loading loading={true} /> : data?.id ? '저장' : '등록'}
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
