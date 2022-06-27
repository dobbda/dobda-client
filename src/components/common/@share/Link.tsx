import React, { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
};

export const A = ({ children, href }: Props) => {
  if (typeof children == 'object') {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  } else {
    return <Link href={href}>{children}</Link>;
  }
};
