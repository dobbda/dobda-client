import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import styled from 'styled-components';
import 'highlight.js/styles/monokai-sublime.css';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';
import hljs from 'highlight.js/lib/core';
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
        const color = hljs.highlightAuto(node.children[0]?.data).value;
        return (
          <pre key={index}>
            <code>{ReactHtmlParser(color, transform)}</code>{' '}
          </pre>
        );
      }
    }
  };

  const options = {
    decodeEntities: true,
    transform,
  };
  return (
    <>
      <Htmlview>{ReactHtmlParser(content, options)}</Htmlview>
    </>
  );
};

export default HtmlViewer;

const Htmlview = styled.div`
  overflow: auto;
  pre {
    background-color: #263238 !important;
    white-space: pre-wrap !important;
    margin: 5px !important;
    padding: 10px !important;
    border-radius: 3px;
  }
  pre,
  code {
    color: #8f76db;
  }
  img {
    cursor: default !important;
  }
`;
