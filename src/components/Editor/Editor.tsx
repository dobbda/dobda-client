import React, { useState, useEffect, useCallback, useRef } from 'react';

import { uploadS3 } from './upload-s3';

import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

// code-syntax-highlight
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// color-syntax
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import * as S from './style/style';

interface Props {
  mdStr: string;
  setMdStr: React.Dispatch<React.SetStateAction<string>>;
  onClickShow?: boolean;
  height: string;
}

const Editor = ({ mdStr, setMdStr, onClickShow = false, height }: Props) => {
  
  // 에디터 보여지는 핸들러
  const [showEditor, setShowEditor] = React.useState(onClickShow ? false : true);
  const onClickShowEditorHandler = useCallback(() => {
    setShowEditor(!showEditor);
  }, [showEditor]);

  const editorRef = useRef<ToastEditor>(null);

  // Editor Change 이벤트
  const onChangeEditor = () => {
    setMdStr(editorRef.current?.getInstance().getMarkdown() || '');
    editorRef.current?.getInstance().removeHook('addImageBlobHook');
    editorRef.current?.getInstance().addHook('addImageBlobHook', (blob, callback) => {
      (async () => {
        const url = await uploadS3(blob)
        callback(url&& url,"image-url")
      })();
      return false;
    });
  };

	// height을 auto로 할시 focus가 풀림현상 해결
	const setFocusHandler = (e: any) => {
		if(e.target.className === "toastui-editor md-mode active" || e.target.className === "toastui-editor ww-mode"){
			editorRef.current.getInstance().focus();
		}
	}
  const EditorElement = (
    <ToastEditor
      initialValue=" "
      previewStyle="tab"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      usageStatistics={false}
      ref={editorRef}
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      onChange={onChangeEditor}
      minHeight={height}
      height={"auto"}
      language="ko-kr"			
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'link'],
        ['ul', 'ol'],
        ['quote', 'code', 'codeblock'],
        ['image'],
      ]}
    />
  );

  return (
    <S.EditorStyle onClick={setFocusHandler}>
      {onClickShow && !showEditor && (
        <div onClick={onClickShowEditorHandler} id="clickEvent-handler" >
          <S.ShowEditorBtn prefix={<S.ReplyIconS />} placeholder="답글 작성..." readOnly />
        </div>
      )}

      {showEditor && EditorElement}
      {onClickShow && showEditor && <S.CloseEditor onClick={() => setShowEditor(false)}>Editor 접기</S.CloseEditor>}
    </S.EditorStyle>
  );
};

export default Editor;
