import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { q } from 'src/api';
import { Button, Loading } from 'src/components/common';
import { Editor } from 'src/components/Editor';
import { editContentType } from 'src/types/content-type';
import { CommentEditor } from './style/style';

type Props = {
  data: any;
  category: editContentType;
};

export default function Edit({ data, category }: Props) {
  const [mdStr, setMdStr] = useState('');
  const onSubmit = useCallback(() => {
    axios.patch(`/api/${category}/${data.id}`);
  }, []);
  return (
    <CommentEditor>
      <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />
      {mdStr && (
        <Button onClick={onSubmit} types="primary" $fill>
          등록
        </Button>
      )}
    </CommentEditor>
  );
}
