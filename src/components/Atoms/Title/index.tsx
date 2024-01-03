import React from 'react';
import cx from 'classnames';

import { TitleVariants } from './titleVariants';

import classes from './title.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  children: React.ReactNode;
  variant?:
    | 'regular'
    | 'colossal'
    | 'massive'
    | 'medium'
    | 'heading-title'
    | 'feature-title'
    | 'card-title'
    | 'offer-title'
    | 'light'
    | 'light-responsive'
    | 'light-mini'
    | 'light-massive'
    | 'light-medium'
    | 'big-regular'
    | 'regular-responsive'
    | 'subtitle';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: classNames;
}

const Title: React.FC<Props> = ({
  children,
  tag = 'h2',
  variant = 'default',
  className,
  ...props
}) => {
  const variants = new TitleVariants(variant).getClasses();
  const classNames = cx(classes.title, {
    [className]: className,
    [classes[`title--${variant}`]]: variant,
    [variants]: variant,
  });

  const Tag = tag;

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
};

interface ExcerptProps {
  children: React.ReactNode;
  className?: classNames;
}

export const TitleExcerpt: React.FC<ExcerptProps> = ({
  children,
  className,
}) => {
  const classNames = cx(classes.title__excerpt, {
    [className]: className,
  });

  return <span className={classNames}>{children}</span>;
};

export default Title;
