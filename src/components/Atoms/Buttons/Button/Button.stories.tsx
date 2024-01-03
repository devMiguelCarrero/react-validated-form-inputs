import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Buttons/Main Button',
  tags: ['autodocs'],
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

// Regular
export const Regular: Story = {
  args: {
    variant: 'regular',
    children: 'button',
  },
};

// Light
export const LightButton: Story = {
  args: {
    variant: 'light',
    children: 'light button'
  },
};

// White
export const WhiteButton: Story = {
  args: {
    variant: 'white',
    children: 'white button'
  },
};