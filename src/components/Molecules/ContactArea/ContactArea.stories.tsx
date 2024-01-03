import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';

import ContactArea from '.';
import Paragraph from 'src/components/Atoms/Paragraph';
import Title from 'src/components/Atoms/Title';
import AtomLink from 'src/components/Atoms/AtomLink';
import DoubleSpinningLoader from 'src/components/Atoms/Loaders/DoubleSponningLoader';

import MessageEnvelop from 'src/shared/assets/images/message-envelop.png';
import TestForm from './TestForm';

const meta: Meta<typeof ContactArea> = {
  title: 'Molecules/Contact Area',
  tags: ['autodocs'],
  component: ContactArea,
};
export default meta;

type Story = StoryObj<typeof ContactArea>;

// Regular
const SecondaryContent = (
  <div className="space-y-5 md:space-y-10 text-center">
    <Paragraph variant="highlighted">
      <b>
        Please complete this short form to send your answers directly to our
        email.
      </b>
    </Paragraph>
    <Paragraph variant="highlighted">
      We will get back to you as soon as possible.
    </Paragraph>
  </div>
);

const SuccessContent = (
  <div className="relative flex flex-col space-y-8 md:space-y-12 items-center justify-center">
    <Image src={MessageEnvelop} alt="Weknow Thanks for applying" width={250} />
    <Title className="text-center mb-5 mt-0" variant="subtitle">
      Thanks for applying!
    </Title>
    <AtomLink variant="highlighted" className="text-wk-purple-600" href="/">
      Back to home page
    </AtomLink>
  </div>
);

const FailedContent = (
  <div className="space-y-5 relative flex flex-col items-center justify-center text-center">
    <Paragraph variant="highlighted">
      <b>
        Something was wrong sending your resume, please reload this page and try
        again.
      </b>
    </Paragraph>
    <Paragraph>
      <b>{`(Regulat test error)`}</b>
    </Paragraph>
  </div>
);

const SubmittingContent = (
  <div className="space-y-5 flex flex-col items-center justify-center">
    <DoubleSpinningLoader />
    <Paragraph variant="highlighted" className="text-highlighted">
      <b>Submitting...</b>
    </Paragraph>
  </div>
);

export const Regular: Story = {
  args: {
    submitStatus: 'idle',
    secondaryContent: <>{SecondaryContent}</>,
    submittingContent: <>{SubmittingContent}</>,
    successContent: <>{SuccessContent}</>,
    failedContent: <>{FailedContent}</>,
    children: (
      <div className="space-y-10">
        <Title className="text-center" tag="h3" variant="subtitle">
          Test form
        </Title>
        <TestForm />
      </div>
    ),
  },
};

export const Submitting: Story = {
  args: {
    submitStatus: 'submitting',
    secondaryContent: <>{SecondaryContent}</>,
    submittingContent: <>{SubmittingContent}</>,
    successContent: <>{SuccessContent}</>,
    failedContent: <>{FailedContent}</>,
    children: (
      <div className="space-y-10">
        <Title className="text-center" tag="h3" variant="subtitle">
          Test form
        </Title>
        <TestForm />
      </div>
    ),
  },
};

export const Success: Story = {
  args: {
    submitStatus: 'success',
    secondaryContent: <>{SecondaryContent}</>,
    submittingContent: <>{SubmittingContent}</>,
    successContent: <>{SuccessContent}</>,
    failedContent: <>{FailedContent}</>,
    children: (
      <div className="space-y-10">
        <Title className="text-center" tag="h3" variant="subtitle">
          Test form
        </Title>
        <TestForm />
      </div>
    ),
  },
};

export const Failed: Story = {
  args: {
    submitStatus: 'failed',
    secondaryContent: <>{SecondaryContent}</>,
    submittingContent: <>{SubmittingContent}</>,
    successContent: <>{SuccessContent}</>,
    failedContent: <>{FailedContent}</>,
    children: (
      <div className="space-y-10">
        <Title className="text-center" tag="h3" variant="subtitle">
          Test form
        </Title>
        <TestForm />
      </div>
    ),
  },
};
