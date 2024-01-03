import type { Meta, StoryObj } from '@storybook/react';

import Title, { TitleExcerpt } from '.';

const meta: Meta<typeof Title> = {
  title: 'Atoms/Title',
  tags: ['autodocs'],
  component: Title,
};
export default meta;
type Story = StoryObj<typeof Title>;

//Regular
export const Regular: Story = {
  args: {
    variant: 'regular',
    children: 'Title Example',
  },
};

//Subtitle
export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Feature
export const Feature: Story = {
  args: {
    variant: 'feature-title',
    children: 'Title used for features',
  },
};

//Light
export const Light: Story = {
  args: {
    variant: 'light',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Light Responsive
export const LightMassive: Story = {
  args: {
    variant: 'light-massive',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Light Responsive
export const LightResponsive: Story = {
  args: {
    variant: 'light-responsive',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Light Mini
export const LightMini: Story = {
  args: {
    variant: 'light-mini',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Offer Title
export const OfferTitle: Story = {
  args: {
    variant: 'offer-title',
    children: 'Title Example',
  },
};

//Card Title
export const CardTitle: Story = {
  args: {
    variant: 'card-title',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Big Regular
export const BigRegular: Story = {
  args: {
    variant: 'big-regular',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Massive
export const Massive: Story = {
  args: {
    variant: 'massive',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};

//Heading Title
export const HeadingTitle: Story = {
  args: {
    variant: 'heading-title',
    children: <>Title Example</>,
  },
};

//Colossal
export const Colossal: Story = {
  args: {
    variant: 'colossal',
    children: (
      <>
        Title Example{' '}
        <TitleExcerpt className={`block`}>Title excerpt</TitleExcerpt>
      </>
    ),
  },
};
