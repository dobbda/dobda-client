import React, { useCallback, useState } from 'react';
import { Checkbox, Input } from 'antd';
import { Editor } from 'src/components/Editor';
import { Button } from 'src/components/common';
import { useAuth, useInput } from 'src/hooks';
import axios from 'axios';
import styled from 'styled-components';
type Props = {};

export default function CreateNoti({}: Props) {
  const [html, setHtml] = useState('');
  const [check, setCheck] = useState(false);
  const [title, onChangeTitle] = useInput('');
  const [url, onChangeUrl] = useInput('');
  const onSubmit = useCallback(async () => {
    const data = {
      content: html,
      title: title,
      link: url,
    };
    await axios.post('/api/notis', data).then((res) => console.log(res.data));
  }, [html, title, url, check]);
  const { auth } = useAuth();

  return (
    <>
      {auth?.role == 1 ? (
        <S>
          <div className="group">
            <p>notion? url</p>

            <Input placeholder="image url" value={url} onChange={onChangeUrl}></Input>
            <p>제목</p>
            <Input placeholder="title" onChange={onChangeTitle} value={title} />
          </div>
          <Editor html={html} setHtml={setHtml} height="800px" />
          <Button types="secondary" $fill css={{ width: '300px' }} $block onClick={onSubmit}>
            {' '}
            저장{' '}
          </Button>
        </S>
      ) : (
        <NotAdmin>관리자만 접근가능합니다.</NotAdmin>
      )}
    </>
  );
}

const S = styled.div`
  padding: 10px;
  margin: 20px 0;
  .group {
    padding: 10px;
    > * {
      margin-bottom: 15px;
    }
  }
  > * {
    margin-bottom: 15px;
  }
`;

const NotAdmin = styled.h2`
  width: 100%;
  /* height: 80vh; */
  text-align: center;
  color: #797979;
`;
