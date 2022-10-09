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
    // const { default: ImageResize } = await import('quill-image-resize-module');
    // RQ.Quill.register('modules/imageResize', ImageResize);
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
}

const QuillEditor = ({ html, setHtml, height }: Props) => {
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
          // ['bold', 'italic', 'underline', 'strike'],
          ['link', 'image', 'video'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ align: [] }],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
        imageResize: {
          displaySize: true,
        },
      },
    }),
    [],
  );

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
`;
