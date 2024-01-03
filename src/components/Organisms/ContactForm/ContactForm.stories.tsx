import type { Meta, StoryObj } from '@storybook/react';

import ContactForm from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Organisms/Contact Form',
  tags: ['autodocs'],
  component: ContactForm,
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

//Regular
export const Default: Story = {
  args: {},
};
