import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
interface Props extends LinkProps {
  children?: React.ReactNode;
}

export const A = (props: Props) => {
  const { children, ...linkProps } = props;
  return (
    <Link {...linkProps}>
      <a css={{}}>{children}</a>
    </Link>
  );
};
