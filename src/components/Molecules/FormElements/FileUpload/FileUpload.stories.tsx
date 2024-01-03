import type { Meta, StoryObj } from '@storybook/react';

import FileUploader from '.';

const meta: Meta<typeof FileUploader> = {
  title: 'Molecules/Form Elements/File Uploader',
  tags: ['autodocs'],
  component: FileUploader,
};
export default meta;

type Story = StoryObj<typeof FileUploader>;

export const Regular: Story = {
  args: {
    label: 'File Uploader',
    id: 'file-uploader',
    info: 'Drag or upload a .pdf or .doc file',
    placeholder: 'Upload',
    dropPlaceholder: 'Drop your file here',
  },
};
