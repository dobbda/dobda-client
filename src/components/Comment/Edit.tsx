import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { q } from 'src/api';
import { Button, Loading } from 'src/components/common';
import { Editor } from 'src/components/Editor';
import { keys, useQueryCount, useErrMsg, useDidMountEffect } from 'src/hooks';
import { EditType } from 'src/types/content-type';
import { CommentEditor } from './style/style';

type Props = {
  content: string;
  id: number;
  type: EditType;
  setCancel: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Edit({ content, type, id, setCancel }: Props) {
  const { setUpdate } = useQueryCount();
  const { errMsg, setErrMsg } = useErrMsg();
  const [mdStr, setMdStr] = useState(content);
  const router = useRouter();
  const { id: pid } = router.query as { id: string };
  const queryKey = (type === 'answers' && keys.answers(pid)) || (type === 'enquiries' && keys.enquiries(pid));
  const onSubmit = useCallback(() => {
    axios
      .patch(`/api/${type}/${id}`, { content: mdStr })
      .then((res) => {
        if (res.data.success) {
          setUpdate({
            queryKey: queryKey,
            changeKey: 'content',
            findId: id,
            value: res.data.response.content,
          });
          setMdStr('');
          setCancel(false);
        }
      })
      .catch((error) => message.error(errMsg));
  }, [mdStr, type, id, type, errMsg]);

  return (
    <CommentEditor>
      <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={false} height="200px" />

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
