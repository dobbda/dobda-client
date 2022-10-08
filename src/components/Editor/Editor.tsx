import React, { useState, useEffect, useCallback, useRef } from 'react';

import * as S from './style/style';
import { useAuth, useLoginModalhandler } from 'src/hooks';
import QuillEditor from './QuillEditor';

interface Props {
  mdStr: string;
  setMdStr: React.Dispatch<React.SetStateAction<string>>;
  onClickShow?: boolean;
  height: string;
}

const Editor = ({ mdStr, setMdStr, onClickShow = false, height }: Props) => {
  const { auth, refetch } = useAuth();
  const { setLoginModal } = useLoginModalhandler();

  // 에디터 보여지는 핸들러
  const [showEditor, setShowEditor] = React.useState(onClickShow ? false : true);
  const onClickShowEditorHandler = useCallback(() => {
    if (!auth?.id) {
      setLoginModal();
      return;
    }
    setShowEditor(!showEditor);
  }, [auth?.id, setLoginModal, showEditor]);

  return (
    <S.EditorStyle>
      {onClickShow && !showEditor && (
        <div onClick={onClickShowEditorHandler} id="clickEvent-handler">
          <S.ShowEditorBtn prefix={<S.ReplyIconS />} placeholder="답글 작성..." readOnly />
        </div>
      )}

      {showEditor && <QuillEditor html={mdStr} setHtml={setMdStr} height={height} />}
      {onClickShow && showEditor && <S.CloseEditor onClick={() => setShowEditor(false)}>Editor 접기</S.CloseEditor>}
    </S.EditorStyle>
  );
};

export default Editor;
