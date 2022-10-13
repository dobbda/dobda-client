import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
interface Props extends LinkProps {
  children?: React.ReactNode;
}

export const A = (props: Props) => {
  const { children, ...linkProps } = props;
  return (
    <Link {...linkProps} css={{ width: '100%' }}>
      <a css={{ width: '100%' }}>{children}</a>
    </Link>
  );
};
