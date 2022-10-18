import React, { useState, useEffect, useCallback, useRef } from 'react';

import * as S from './style/style';
import { useAuth, useLoginModalhandler } from 'src/hooks';
import QuillEditor from './QuillEditor';

interface Props {
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  onClickShow?: boolean;
  height?: string;
  submitBtn?: React.ReactNode;
}

const Editor = ({ html, setHtml, onClickShow = false, height, submitBtn }: Props) => {
  const { auth, refetch } = useAuth();
  const { setLoginModal } = useLoginModalhandler();
  const [showSubmit, setshowSubmit] = useState(false);
  const [focus, setFocus] = useState(false);
  // 에디터 보여지는 핸들러
  const [showEditor, setShowEditor] = React.useState(onClickShow ? false : true);
  const onClickShowEditorHandler = useCallback(() => {
    if (!auth?.id) {
      setLoginModal();
      return;
    }
    setShowEditor(!showEditor);
    setFocus(!showEditor);
  }, [auth?.id, setLoginModal, showEditor]);

  useEffect(() => {
    let text = html?.substring(0, 14).replace(/\<p\>|\<\/p\>|\<br\>/g, '').length >= 2;
    setshowSubmit(text);
  }, [html, setshowSubmit, showSubmit]);
  return (
    <S.EditorStyle>
      {onClickShow && !showEditor && (
        <div onClick={onClickShowEditorHandler} id="clickEvent-handler">
          <S.ShowEditorBtn prefix={<S.ReplyIconS />} placeholder="답글 작성..." readOnly />
        </div>
      )}

      {showEditor && <QuillEditor html={html} setHtml={setHtml} height={height} setFocus={focus} />}
      {onClickShow && showEditor && (
        <>
          {<S.SubmitWrap>{showSubmit && submitBtn}</S.SubmitWrap>}

          <S.CloseEditor onClick={() => setShowEditor(false)}>Editor 접기</S.CloseEditor>
        </>
      )}
    </S.EditorStyle>
  );
};

export default Editor;
