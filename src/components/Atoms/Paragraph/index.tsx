import React, { FC } from 'react';
import cx from 'classnames';

import classes from './paragraph.module.scss';
import { ParagraphVariants } from './paragraphVariants';

interface Props {
  children: React.ReactNode;
  variant?:
    | 'regular'
    | 'medium'
    | 'high'
    | 'high-responsive'
    | 'highlighted'
    | 'feature'
    | 'bold'
    | 'highlighted-bold'
    | 'description';
  className?: string;
}

const Paragraph: FC<Props> = ({ children, variant, className }) => {
  const variants = new ParagraphVariants(variant).getClasses();
  const classNames = cx(classes.paragraph, {
    [className]: className,
    [variants]: variant,
  });

  return <p className={classNames}>{children}</p>;
};
export default Paragraph;
