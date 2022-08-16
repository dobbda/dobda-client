import { Button } from 'antd';
import React, { useState } from 'react';
import { Editor, MarkDownViewer } from 'src/components/Editor';

type Props = {
  parentId: number;
  content: string;
	setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditAnswer = ({ parentId, content, setIsEdit }: Props) => {
  const [mdStr, setMdStr] = useState(content);

  return (
    <div>
      <Editor height="200px" mdStr={mdStr} setMdStr={setMdStr} />
      <Button>저장</Button>
    </div>
  );
};
