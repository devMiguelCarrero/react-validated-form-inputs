import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import classes from './contact-area.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  children?: ReactNode;
  className?: classNames;
  submitStatus: 'idle' | 'submitting' | 'success' | 'failed';
  submittingContent?: ReactNode;
  successContent?: ReactNode;
  failedContent?: ReactNode;
}
const ContactArea: FC<Props> = ({
  children,
  className,
  submitStatus = 'idle',
  submittingContent,
  successContent,
  failedContent,
}) => {
  const classNames = cx(classes['contact-area'], {
    [className]: className,
  });

  return (
    <div className={classNames}>
      <div
        className={`
          ${classes['contact-area__col']} ${classes['contact-area__col--form']}
        `}
      >
        {children}
      </div>
      {submitStatus === 'submitting' && (
        <div className={classes['contact-area__overlay']}>
          {submittingContent}
        </div>
      )}
      {submitStatus === 'success' && (
        <div className={classes['contact-area__overlay']}>
          <div className={classes['contact-area__submitted']}>
            {successContent}
          </div>
        </div>
      )}
      {submitStatus === 'failed' && (
        <div className={classes['contact-area__overlay']}>{failedContent}</div>
      )}
    </div>
  );
};
export default ContactArea;
