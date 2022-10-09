declare module '*.svg' {
  import React from 'react';

  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare module 'react-html-parser';
declare module 'react-quill';
