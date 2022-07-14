import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { NextPage } from 'next';
import { Input} from 'antd';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import Prism from 'prismjs'
import 'prismjs/themes/prism.css';

// code-syntax-highlight
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// color-syntax
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

interface Props {
    mdStr: string;
    setMdStr: React.Dispatch<React.SetStateAction<string>>;
}


const Editor: NextPage<Props> = ({ mdStr, setMdStr }) => {

    const editorRef = React.useRef<ToastEditor>(null);

    // Editor Change 이벤트
    const onChangeEditor = () => {
        if(editorRef.current) {

            setMdStr(editorRef.current.getInstance().getMarkdown());
        }
    }

    React.useEffect(() => {
        if(editorRef.current) {
            // 전달받은 html값으로 초기화
            editorRef.current.getInstance().setHTML(mdStr);

            // 기존 이미지 업로드 기능 제거
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            // 이미지 서버로 데이터를 전달하는 기능 추가
            editorRef.current.getInstance().addHook('addImageBlobHook', (blob:any, callback:any) => {
                (async () => {
                    const formData = new FormData();
                    formData.append("multipartFiles", blob);

                    const res = await axios.post('http://localhost:3000/uploadImage', formData);

                    callback(res.data, "input alt text");
                  })();
                return false;
            });
        }
    }, [])

    return (
      <>
        <Input type='button' />
        <CustomReactQuill
            initialValue=""
            previewStyle="vertical"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            usageStatistics={true}
            ref={editorRef}
            plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
            onChange={onChangeEditor}
            height="100%"
            toolbarItems={
              [['heading','bold', 'italic', 'strike'], 
              ['hr','link'],['ul','ol'],['quote','code', 'codeblock',],['image']]}
        />

</>
    )
}

export default Editor;

// style
const CustomReactQuill = styled(ToastEditor)`
    /* height: 300px; */
`