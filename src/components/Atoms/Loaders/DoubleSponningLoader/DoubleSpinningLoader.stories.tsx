import type { Meta, StoryObj } from '@storybook/react';

import DoubleSpinningLoader from '.';

const meta: Meta<typeof DoubleSpinningLoader> = {
  title: 'Atoms/Loaders/Double Spinner Loader',
  tags: ['autodocs'],
  component: DoubleSpinningLoader,
};
export default meta;

type Story = StoryObj<typeof DoubleSpinningLoader>;

// Regular

export const Regular: Story = {
  args: {},
};
