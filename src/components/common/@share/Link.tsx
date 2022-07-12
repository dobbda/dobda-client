import React, { ReactNode } from 'react';
import Link  from 'next/link';
const NextLink = Link
type Props = {
  children: React.ReactNode;
  href: string;
  scroll?: boolean
};

export const A = ({ children, href,scroll=true }: Props) => {
  if (typeof children == 'object') {
    return (
      <Link href={href} passHref scroll={scroll}>
        <a>{children}</a>
      </Link>
    );
  } else {
    return <Link href={href} scroll={scroll}>{children}</Link>;
  }
};
