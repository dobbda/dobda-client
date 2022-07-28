
import React from 'react';

import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'

import {dark,dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('typescript', typescript)
interface MarkdownViewProps {
  content: string;
}

const ReactMarkdownViewer = ({ content }: MarkdownViewProps) => {
  const markdown = `# Your markdown here \n <h1>안녕 클레오 파트라</h1>`
  return (
    <ReactMarkdown
    components={{
      code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
          <SyntaxHighlighter
            language={match[1]}
            PreTag="div"
            {...props}
            style={dracula}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
    }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default ReactMarkdownViewer