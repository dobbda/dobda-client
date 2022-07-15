import React,{ useState, useEffect, useCallback,useRef} from 'react';
import axios from 'axios';
import { NextPage } from 'next';
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

import * as S from './style/style'

interface Props {
  mdStr: string;
  setMdStr: React.Dispatch<React.SetStateAction<string>>;
  onClickShow?: boolean;
  height: string;
}

const Editor: NextPage<Props> = ({ mdStr, setMdStr, onClickShow = false, height }) => {
  const [showEditor, setShowEditor] = React.useState(onClickShow ? false : true);
  const onClickShowEditorHandler = useCallback(() => {
    setShowEditor(!showEditor);

  },[showEditor]);
  const editorRef = React.useRef<ToastEditor>(null);
  // Editor Change 이벤트

  const onChangeEditor = () => {
    if (editorRef.current) {
      setMdStr(editorRef.current.getInstance().getMarkdown());
    }
  };

  useEffect(() => {
    // editorRef.current.getInstance().setMarkdown(mdStr)
    if (editorRef.current) {

      // 전달받은 html값으로 초기화
      editorRef.current.getInstance().setMarkdown(mdStr);

      // 기존 이미지 업로드 기능 제거
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      // 이미지 서버로 데이터를 전달하는 기능 추가
      editorRef.current.getInstance().addHook('addImageBlobHook', (blob: any, callback: any) => {
        (async () => {
          const formData = new FormData();
          formData.append('multipartFiles', blob);

          const res = await axios.post('http://localhost:3000/uploadImage', formData);

          callback(res.data, 'input alt text');
        })();
        return false;
      });
    }
  }, []);



  const EditorElement = (
    <ToastEditor
      
      initialValue=' '
      previewStyle="vertical"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      usageStatistics={false}
      ref={editorRef}
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      onChange={onChangeEditor}
      height={height}
      language='ko-kr'
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
    <S.EditorStyle>
      <S.ToastEditorGlobalStyles/>
      {onClickShow && !showEditor && (
        <div onClick={onClickShowEditorHandler}>
          <S.ShowEditorBtn prefix={<S.ReplyIconS />} placeholder="답글 작성..." readOnly />
        </div>
      )}

      {showEditor &&
        EditorElement
      }

    {onClickShow && showEditor &&
      <S.CloseEditor onClick={()=>setShowEditor(false)} >Editor 접기</S.CloseEditor>
    }
    </S.EditorStyle>
  );
};

export default Editor;
