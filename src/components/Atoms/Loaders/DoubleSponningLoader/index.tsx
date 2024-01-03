import React, { FC } from 'react';
import cx from 'classnames';

import classes from './double-spinning-loader.module.scss';

interface Props {
  className?: string;
}

const DoubleSpinningLoader: FC<Props> = ({ className }) => {
  const classNames = cx(classes['double-spinning-loader'], {
    [className]: className,
  });
  return <div className={classNames} />;
};
export default DoubleSpinningLoader;
