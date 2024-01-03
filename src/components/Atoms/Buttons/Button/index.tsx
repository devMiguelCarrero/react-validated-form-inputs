import React from 'react';
import cx from 'classnames';
import classes from './button.module.scss';
import { ButtonVariants } from './buttonVariants';
import { classNames } from '@/shared/types/types';

interface Props {
  type?: 'link' | 'button' | 'submit';
  children: React.ReactNode;
  className?: classNames;
  href?: string;
  title?: string;
  variant?: 'regular' | 'light' | 'white';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {
    type = 'button',
    children,
    className,
    href = '#',
    title = 'button',
    variant = 'regular',
    onClick,
    disabled = false,
  } = props;

  const variants = new ButtonVariants(variant).getClasses();
  const classNames = cx(`${classes['button']}`, {
    [className]: className,
    [variants]: variant,
  });

  if (type === 'link') {
    return (
      <a className={classNames} href={href} title={title}>
        <span className={classes['wk-button__text']}>{children}</span>
      </a>
    );
  } else if (type === 'button' || type === 'submit') {
    return (
      <button
        type={type}
        className={classNames}
        title={title}
        onClick={onClick}
        disabled={disabled || false}
      >
        <span className={classes['wk-button__text']}>{children}</span>
      </button>
    );
  }
  return null;
};

export default Button;
