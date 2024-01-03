import React from 'react';
import cx from 'classnames';

import classes from './container.module.scss';
import { ContainerVariants } from './ContainerVariants';

interface Props {
  children: React.ReactNode;
  variant?:
    | 'regular'
    | 'medium'
    | 'long'
    | 'extended'
    | 'xl'
    | 'wide'
    | 'full'
    | 'compressed'
    | 'nav'
    | 'no-padding';
  tag?: 'div' | 'section' | 'main' | 'footer' | 'header';
  className?: string;
}

const Container: React.FC<Props> = ({
  children = '',
  variant = 'regular',
  tag = 'div',
  className,
}) => {
  const Tag = tag;
  const variants = new ContainerVariants(variant).getClasses();

  const classNames = cx(`${classes.container} max-w-full`, {
    [className]: className,
    [variants]: variant,
  });

  return <Tag className={classNames}>{children}</Tag>;
};

export default Container;
