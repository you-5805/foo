import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <a className="">{children}</a>
    </Link>
  );
}