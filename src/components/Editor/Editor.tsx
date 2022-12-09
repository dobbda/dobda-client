import React, { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';

import * as S from './style/style';
import { useAuth, useLoginModalhandler } from 'src/hooks';
// import QuillEditor from './QuillEditor';
const QuillEditor = dynamic(() => import('./QuillEditor'));

interface Props {
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  onClickShow?: boolean;
  height?: string;
  submitBtn?: React.ReactNode;
  placeholder?: string;
}

const Editor = ({ html, setHtml, onClickShow = false, height, submitBtn, placeholder }: Props) => {
  const { auth, refetch } = useAuth();
  const { setLoginModal } = useLoginModalhandler();
  const [showSubmit, setshowSubmit] = useState(false);
  // 에디터 보여지는 핸들러
  const [showEditor, setShowEditor] = React.useState(onClickShow ? false : true);
  const onClickShowEditorHandler = useCallback(() => {
    if (!auth?.id) {
      setLoginModal();
      return;
    }
    setShowEditor(!showEditor);
  }, [auth?.id, setLoginModal, showEditor]);

  useEffect(() => {
    if (submitBtn) {
      let text = html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0;
      setshowSubmit(text);
    }
  }, [html, setshowSubmit, showSubmit]);
  return (
    <S.EditorStyle>
      {onClickShow && !showEditor && (
        <div onClick={onClickShowEditorHandler} id="clickEvent-handler">
          <S.ShowEditorBtn prefix={<S.ReplyIconS />} placeholder="답글 작성..." readOnly />
        </div>
      )}

      {showEditor && (
        <QuillEditor placeholder={placeholder} html={html} setHtml={setHtml} height={height} setFocus={showEditor} />
      )}
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
