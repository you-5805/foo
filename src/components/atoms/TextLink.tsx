import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  type: 'header' | 'footer';
}

export const TextLink: React.VFC<Props> = ({ href, text, type }) => {
  let className = 'text-text text-md md:text-lg';
  if (type === 'footer') {
    className = 'text-xs sm:text-sm';
  }
  return (
    <Link href={href}>
      <a className={className}>
        {text}
      </a>
    </Link>
  );
}