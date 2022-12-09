import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { q } from 'src/api';
import { Button, Loading } from 'src/components/common';
// import { Editor } from 'src/components/Editor';
import { keys, useQueryCount, useErrMsg, useDidMountEffect } from 'src/hooks';
import { EditType } from 'src/interface/content-type';
import { CommentEditor } from './style/style';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('src/components/Editor/Editor'));

type Props = {
  content: string;
  id: number;
  type: EditType;
  setCancel: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Edit({ content, type, id, setCancel }: Props) {
  const { setUpdate } = useQueryCount();
  const { errMsg, setErrMsg } = useErrMsg();
  const [html, setHtml] = useState(content);
  const router = useRouter();
  const { id: pid } = router.query as { id: string };
  const queryKey = (type === 'answers' && keys.answers(pid)) || (type === 'enquiry' && keys.enquiry(pid));
  const onSubmit = useCallback(() => {
    axios
      .patch(`/api/${type}/${id}`, { content: html })
      .then((res) => {
        if (res.data.success) {
          setUpdate({
            queryKey: queryKey,
            changeKey: 'content',
            findId: id,
            value: res.data.response.content,
          });
          setHtml('');
          setCancel(false);
        }
      })
      .catch((error) => message.error(errMsg));
  }, [html, type, id, type, errMsg]);

  return (
    <CommentEditor>
      <Editor html={html} setHtml={setHtml} onClickShow={false} height="200px" />
      <br />
      <div css={{ display: 'flex', gap: '10px', alignItem: 'center', justifyContent: 'center' }}>
        <Button onClick={() => setCancel(false)} types="primary" css={{ width: '150px' }}>
          취소
        </Button>
        <Button onClick={onSubmit} types="primary" $fill css={{ width: '150px' }}>
          저장
        </Button>
      </div>
    </CommentEditor>
  );
}
