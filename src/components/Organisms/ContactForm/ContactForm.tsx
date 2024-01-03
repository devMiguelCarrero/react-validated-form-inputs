'use client';

import React, { FC, useCallback, useState } from 'react';
import cx from 'classnames';
import Container from '@/components/Atoms/Container';
import classes from './contact-form.module.scss';

import ContactArea from '@/components/Molecules/ContactArea';
import Title from '@/components/Atoms/Title';
import Paragraph from '@/components/Atoms/Paragraph';
import Form from '@/components/Organisms/ContactForm/Form';
import DoubleSpinningLoader from '@/components/Atoms/Loaders/DoubleSponningLoader';

import AtomLink from '@/components/Atoms/AtomLink';

import { classNames } from '@/shared/types/types';

interface Props {
  className?: classNames;
  id?: string;
}
const ContactForm: FC<Props> = ({ className, id }) => {
  type Status = 'idle' | 'submitting' | 'success' | 'failed';

  const [status, setStatus] = useState<Status>('idle');
  const [submitLog, setSubmitLog] = useState('Unkown Error');

  const classNames = cx(`${classes['contact-form']}`, {
    [className]: className,
  });

  type callbackProps = (
    callStatus: 'idle' | 'submitting' | 'success' | 'failed',
    message: string | undefined
  ) => void;

  const applyHandler = useCallback<callbackProps>(
    (callStatus, message = undefined) => {
      setStatus(callStatus);
      if (message) setSubmitLog(message);
    },
    []
  );

  const SuccessContent = (
    <div className={`${classes['contact-form__success']}`}>
      <Title variant="subtitle">Thanks for contacting us!</Title>
      <AtomLink variant="highlighted" href="/">
        Back to home page
      </AtomLink>
    </div>
  );

  const FailedContent = (
    <div className="space-y-5 relative flex flex-col items-center justify-center text-center">
      <Paragraph variant="highlighted">
        <b>
          Something was wrong sending your resume, please reload this page and
          try again.
        </b>
      </Paragraph>
      {submitLog && (
        <Paragraph>
          <b>{`(${submitLog})`}</b>
        </Paragraph>
      )}
    </div>
  );

  const SubmittingContent = <DoubleSpinningLoader />;

  return (
    <div id={id} className={classNames}>
      <Container variant="long">
        <ContactArea
          submitStatus={status}
          submittingContent={SubmittingContent}
          successContent={SuccessContent}
          failedContent={FailedContent}
        >
          <div className="space-y-10">
            <Form onSubmit={applyHandler} />
          </div>
        </ContactArea>
      </Container>
    </div>
  );
};
export default ContactForm;
