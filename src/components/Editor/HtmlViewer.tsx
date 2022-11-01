import 'react-quill/dist/quill.snow.css';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import styled from 'styled-components';
import 'highlight.js/styles/monokai-sublime.css';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import hljs from 'highlight.js/lib/core';
import { ViewWrapper } from './style/style';
// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('yaml', yaml);

interface MarkdownViewProps {
  content: string;
}
const HtmlViewer = ({ content }: MarkdownViewProps) => {
  const transform = (node: any, index: number | string) => {
    if (node.name === 'pre') {
      if (node.children?.length == 1) {
        let code = node.children[0]?.data;
        let color = hljs.highlightAuto(`${code}`).value;
        return <pre key={index}>{ReactHtmlParser(color, transform)}</pre>;
      }
    }
  };

  const options = {
    decodeEntities: true,
    transform,
  };
  return (
    <>
      <ViewWrapper className="view ql-editor">{ReactHtmlParser(content, options)}</ViewWrapper>
    </>
  );
};

export default HtmlViewer;
