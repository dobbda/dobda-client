import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/monokai-sublime.css';

import React from 'react';
import javascript from 'highlight.js/lib/languages/javascript';

import hljs from 'highlight.js/lib/core';
import { ViewWrapper } from './style/style';
import parse, { domToReact } from 'html-react-parser';
// Register languages
hljs.registerLanguage('javascript', javascript);

interface MarkdownViewProps {
  content: string;
}
const HtmlViewer = ({ content }: MarkdownViewProps) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode.attribs && domNode.name === 'pre') {
        if (domNode.children.length == 1) {
          let code = domNode.children[0]?.data;
          let color = hljs.highlightAuto(`${code}`).value;
          return (
            <pre>
              <code>{parse(color, options)}</code>
            </pre>
          );
        } else {
          return (
            <pre>
              <code>{domToReact(domNode.children, options)}</code>
            </pre>
          );
        }
      }
    },
  };

  return (
    <>
      <ViewWrapper className="view ql-editor">{parse(content, options)}</ViewWrapper>
    </>
  );
};

export default HtmlViewer;
