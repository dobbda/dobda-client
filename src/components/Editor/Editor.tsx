import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AWS from 'aws-sdk';

import {getUrl} from './getUrl'

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

import { Input as AntInput, Button } from 'antd';
import { ReplyIcon, ReplyFillIcon } from 'src/assets/icons';
interface Props {
  mdStr: string;
  setMdStr: React.Dispatch<React.SetStateAction<string>>;
  onClickShow?: boolean;
  height: string;
}

const Editor = ({ mdStr, setMdStr, onClickShow = false, height }: Props) => {
  const fileName = Date.now(); // 이미지 이름
  // 에디터 보여지는 핸들러
  const [showEditor, setShowEditor] = React.useState(onClickShow ? false : true);
  const onClickShowEditorHandler = useCallback(() => {
    setShowEditor(!showEditor);
  }, [showEditor]);

  const editorRef = useRef<ToastEditor>(null);
  // Editor Change 이벤트

  const onChangeEditor = () => {
    setMdStr(editorRef.current?.getInstance().getHTML() || '');
    editorRef.current?.getInstance().removeHook('addImageBlobHook');
    editorRef.current?.getInstance().addHook('addImageBlobHook', (blob, callback) => {
      (async () => {
        // const url = await getUrl(blob)
        // callback(url,"설명")
        
         AWS.config.update({
          region: process.env.NEXT_PUBLIC_REGION,
          accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        });

        const upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: process.env.NEXT_PUBLIC_BUKET, // 버킷 이름
            Key: fileName.toString() + '.png', // 유저 아이디
            Body: blob, // 파일 객체
          },
        });

        await upload.promise().then(
          (res) => {

            console.log('에딧이미지  ', res);
            callback(decodeURI(res.Location), res.Key);
          },
          (err) => {
            console.log(err);
          });
      })();
      return false;
    });
  };


  const EditorElement = (
    <CustomReactQuill
      initialValue=" "
      previewStyle="vertical"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      usageStatistics={false}
      ref={editorRef}
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      onChange={onChangeEditor}
      height={height}
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
    <EditorStyle>
      {onClickShow && !showEditor && (
        <div onClick={onClickShowEditorHandler}>
          <ShowEditorBtn prefix={<ReplyIconS />} placeholder="답글 작성..." readOnly />
        </div>
      )}

      {showEditor && EditorElement}

      {onClickShow && showEditor && <CloseEditor onClick={() => setShowEditor(false)}>Editor 접기</CloseEditor>}
    </EditorStyle>
  );
};

export default Editor;

// style
const CustomReactQuill = styled(ToastEditor)`
  .toastui-editor-defaultUI {
    border: 1px solid red !important;
  }
`;

const EditorStyle = styled.div`
  margin-top: 10px 0;
  position: relative;
`;

const ReplyIconS = styled(ReplyIcon)`
  fill: gray;
  transform: rotate(180deg);
  height: 20px;
  width: 20px;
`;
const ShowEditorBtn = styled(AntInput)`
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  /* border: px solid #465666; */
  input {
    /* background-color: #f5f5f5; */
  }
  input::placeholder {
    font-size: 15px;
    color: gray;
    /* background-color: #f5f5f5; */
  }
`;

const CloseEditor = styled(Button)`
  position: absolute;
  bottom: 0;
  height: 29px;
  background-color: #f7f9fc;
`;
