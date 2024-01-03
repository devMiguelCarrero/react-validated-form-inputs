import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from '.';

const meta: Meta<typeof Paragraph> = {
  title: 'Atoms/Paragraph',
  tags: ['autodocs'],
  component: Paragraph,
};
export default meta;
type Story = StoryObj<typeof Paragraph>;

// Regular
export const Regular: Story = {
  args: {
    variant: 'regular',
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <b>Ut enim ad minim veniam, quis nostrud exercitation</b>
      </>
    ),
  },
};

// High
export const High: Story = {
  args: {
    variant: 'high',
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <b>Ut enim ad minim veniam, quis nostrud exercitation</b>
      </>
    ),
  },
};

// High Responsive
export const HighResponsive: Story = {
  args: {
    variant: 'high-responsive',
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <b>Ut enim ad minim veniam, quis nostrud exercitation</b>
      </>
    ),
  },
};

// Highlighted
export const Highlighted: Story = {
  args: {
    variant: 'highlighted',
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <b>Ut enim ad minim veniam, quis nostrud exercitation</b>
      </>
    ),
  },
};

// Bold
export const Bold: Story = {
  args: {
    variant: 'bold',
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <b>Ut enim ad minim veniam, quis nostrud exercitation</b>
      </>
    ),
  },
};

// Description
export const Description: Story = {
  args: {
    variant: 'description',
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <b>Ut enim ad minim veniam, quis nostrud exercitation</b>
      </>
    ),
  },
};

// Feature
export const Feature: Story = {
  args: {
    variant: 'feature',
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
        <b>Ut enim ad minim veniam, quis nostrud exercitation</b>
      </>
    ),
  },
};
