import dynamic from 'next/dynamic';
import { useRef, useState, useMemo, useCallback, useEffect, Dispatch, SetStateAction } from 'react';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { uploadS3 } from './utils/upload-s3';

import 'highlight.js/styles/monokai-sublime.css';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import hljs from 'highlight.js/lib/core';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    const { default: imageResize } = await import('quill-image-resize-module-react');
    RQ.Quill.register('modules/imageResize', imageResize);
    return function forwardRef({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  {
    ssr: false,
  },
);

interface Props {
  html: string;
  setHtml: Dispatch<SetStateAction<string>>;
  height?: string;
  setFocus?: boolean;
}

const QuillEditor = ({ html, setHtml, height, setFocus }: Props) => {
  const quillRef = useRef<any>();

  const imageHandler = useCallback(() => {
    const input = typeof window === 'object' ? document.createElement('input') : null;
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file[0] !== null) {
        const range = quillRef.current?.getEditorSelection();
        quillRef.current.getEditor().insertEmbed(range.index, 'image', '/img/loading.gif');
        quillRef.current.getEditor().setSelection(range.index + 1); // 커서 한칸 앞으로
        try {
          const url = await uploadS3(file[0]); //aws 이미지 업로드
          // const url = 'https://dobda.s3.ap-northeast-2.amazonaws.com/content-images/dobda-1665391720714.png';
          quillRef.current.getEditor().deleteText(range.index, 1);
          quillRef.current.getEditor().insertEmbed(range.index, 'image', url);
          quillRef.current.getEditor().setSelection(range.index + 1); // 커서 한칸 앞으로
          document.body.querySelector(':scope > input')?.remove();
        } catch (e) {
          quillRef.current.getEditor().deleteText(range.index, 1);
          alert('이미지 업로드 실패하였습니다.');
        }
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      syntax: { highlight: (code: string) => hljs.highlightAuto(code).value },
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, 7, false] }, { font: [] }],
          ['link', 'image', 'video'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ align: [] }],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      imageResize: {
        modules: ['Resize', 'DisplaySize'],
      },
    }),
    [],
  );

  useEffect(() => {
    setFocus && quillRef.current?.getEditor().focus();
  }, [setFocus]);

  return (
    <>
      <QStyle className="q-snow" minHeight={height ? height : '150px'}>
        <ReactQuill
          forwardedRef={quillRef}
          value={html}
          onChange={setHtml}
          modules={modules}
          placeholder="내용을 입력해주세요."
          theme="snow"
        />
      </QStyle>
    </>
  );
};

export default QuillEditor;

const QStyle = styled.div<{ minHeight?: string }>`
  background-color: #fff;
  .ql-editor {
    min-height: ${({ minHeight }) => (minHeight ? minHeight : '150px')};
    padding-bottom: 30px;
    max-height: 800px;
  }
  .ql-toolbar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  pre {
    background-color: #282c34 !important;
  }
  img {
    cursor: default !important;
  }
  p {
    margin-bottom: 8px;
    line-height: 20px;
  }
`;
