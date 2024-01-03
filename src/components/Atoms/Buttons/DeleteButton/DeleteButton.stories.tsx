import type { Meta, StoryObj } from '@storybook/react';

import DeleteButton from '.';

const meta: Meta<typeof DeleteButton> = {
  title: 'Atoms/Buttons/Delete Button',
  tags: ['autodocs'],
  component: DeleteButton,
};
export default meta;

type Story = StoryObj<typeof DeleteButton>;

// Regular
export const Regular: Story = {
  args: {},
};
