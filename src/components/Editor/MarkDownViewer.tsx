import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NextPage } from 'next';

import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

interface MarkdownViewProps {
  content: string;
}
const ToastViewer = ({ content }: MarkdownViewProps) => {
  const markdown = `<span style="color: #9a1ee2;">\# Your markdown here </span><span style="color: #ae81ff;">\n</span><span style="color: #e6db74;"> \\<h1>안녕 클레오 파트라\\</h1></span>`;
  const viewRef = useRef<Viewer>(null);

  useEffect(() => {
    viewRef.current?.getInstance().setMarkdown(content);
  }, [content]);
  return (
    <>
      <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={content} ref={viewRef} />
    </>
  );
};

export default ToastViewer;
