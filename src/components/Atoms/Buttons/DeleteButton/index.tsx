import React, { FC } from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import tw from 'twin.macro';

import classes from './delete-button.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  className?: classNames;
  size?: string;
  disabled?: boolean;
  onClick: () => void;
  strokeColor?: string;
}

const DeleteButton: FC<Props> = ({ className, disabled = false, onClick }) => {
  const classNames = cx(classes['delete-button'], {
    [className]: className,
  });

  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default DeleteButton;
