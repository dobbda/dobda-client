declare module '*.svg' {
  import React from 'react';
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
declare module './components/assets/svg/*.svg' {
  import React from 'react';
  const svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
