import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser';
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
  const transform = (node: any, index: any) => {
    if (node.name === 'pre') {
      const code = node.children[0]?.data;
      if (code) {
        const v = code.replace('\n', ' \n ');
        const color = hljs.highlightAuto(v).value;
        const val = `<pre key={index}><code class="javascript">${color}</code></pre>`;
        return ReactHtmlParser(val);
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
  pre {
    background-color: #282c34 !important;

    white-space: pre-wrap !important;
    margin: 5px !important;
    padding: 10px !important;
    border-radius: 3px;
  }
  pre,
  code {
    color: #abbebf;
  }
`;
