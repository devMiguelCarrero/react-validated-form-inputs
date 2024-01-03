import type { Meta, StoryObj } from '@storybook/react';
import cx from 'classnames';

import { LinkVariants } from './linkVariants';

import AtomLink from '.';

const meta: Meta<typeof AtomLink> = {
  title: 'Atoms/Link',
  tags: ['autodocs'],
  component: AtomLink,
};
export default meta;

type Story = StoryObj<typeof AtomLink>;

// Regular
const RegularVariants = new LinkVariants('regular').getClasses();
const RegularClassNames = cx({
  [RegularVariants]: true,
});

export const Regular: Story = {
  args: {
    className: RegularClassNames,
    children: 'Example Link',
  },
};

// Highlighted
const HighlightedVariants = new LinkVariants('highlighted').getClasses();
const HighlightedClassNames = cx({
  [HighlightedVariants]: true,
});

export const Highlighted: Story = {
  args: {
    className: HighlightedClassNames,
    children: 'Example Link',
  },
};
