import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
interface Props extends LinkProps {
  block?: boolean;
  children?: React.ReactNode;
}

export const A = (props: Props) => {
  const { children, ...linkProps } = props;
  return (
    <Link {...linkProps} css={{ display: 'block' }}>
      <a css={{ display: 'block' }}>{children}</a>
    </Link>
  );
};
