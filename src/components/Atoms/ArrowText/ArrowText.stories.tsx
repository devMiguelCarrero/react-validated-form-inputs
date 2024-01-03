import type { Meta, StoryObj } from '@storybook/react';

import ArrowText from '.';

const meta: Meta<typeof ArrowText> = {
  title: 'Atoms/Arrow Text',
  tags: ['autodocs'],
  component: ArrowText,
};
export default meta;

type Story = StoryObj<typeof ArrowText>;

export const Regular: Story = {
  args: {
    className: 'text-xl',
    children: 'Arrow Text',
  },
};
