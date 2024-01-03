import React, { FC, RefObject, FormEvent } from 'react';
import { classNames } from '@/shared/types/types';
import cx from 'classnames';

import classes from './form.module.scss';

interface Props {
  ref: RefObject<HTMLFormElement>;
  className?: classNames;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  name: string;
  method: 'POST';
  action?: string;
  encType?:
    | 'multipart/form-data'
    | 'application/x-www-form-urlencoded'
    | 'text/plain';
  children: React.ReactNode;
}

const Form: FC<Props> = ({ children, className, ...props }) => {
  const classNames = cx(classes['validated-form'], {
    [className]: className,
  });

  return (
    <form className={classNames} {...props}>
      {children}
    </form>
  );
};

export default Form;
