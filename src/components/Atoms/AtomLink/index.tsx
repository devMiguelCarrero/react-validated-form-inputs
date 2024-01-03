import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import { LinkVariants } from './linkVariants';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  variant?: 'regular' | 'highlighted';
  className?: string;
  href: string;
  target?: string;
  title?: string;
}

const AtomLink: FC<Props> = ({
  children,
  variant,
  className,
  href = '#',
  target,
  title,
}) => {
  const variants = new LinkVariants(variant).getClasses();
  const classNames = cx({
    [className]: className,
    [variants]: variant,
  });

  return (
    <Link href={href} target={target} title={title} className={classNames}>
      {children}
    </Link>
  );
};
export default AtomLink;
