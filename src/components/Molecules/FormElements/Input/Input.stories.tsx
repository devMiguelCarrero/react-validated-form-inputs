import type { Meta, StoryObj } from '@storybook/react';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_NOT_IN,
  VALIDATOR_MIN,
  VALIDATOR_MAX,
} from 'src/shared/util/validators';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Molecules/Form Elements/Input',
  tags: ['autodocs'],
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

// Regular

export const Text: Story = {
  args: {
    id: 'regular-input',
    element: 'input',
    label: 'Regular Text Input',
    validators: [VALIDATOR_MINLENGTH(6)],
    warningValidators: [],
    errorText: 'This field cannot be empty and must have a min length of 6',
    initialValue: '',
    initialValid: false,
  },
};

export const TextLight: Story = {
  args: {
    id: 'regular-input',
    element: 'input',
    label: 'Regular Text Input',
    validators: [VALIDATOR_MINLENGTH(6)],
    warningValidators: [],
    errorText: 'This field cannot be empty and must have a min length of 6',
    initialValue: '',
    initialValid: false,
    variant: 'light',
  },
};

export const Email: Story = {
  args: {
    id: 'input-email',
    element: 'email',
    label: 'Email Input',
    validators: [VALIDATOR_EMAIL()],
    warningValidators: [],
    errorText: 'This field cannot be empty and must have a valid email value',
    initialValue: '',
    initialValid: false,
  },
};

export const EmailLight: Story = {
  args: {
    id: 'input-email',
    element: 'email',
    label: 'Email Input',
    validators: [VALIDATOR_EMAIL()],
    warningValidators: [],
    errorText: 'This field cannot be empty and must have a valid email value',
    initialValue: '',
    initialValid: false,
    variant: 'light',
  },
};

export const Number: Story = {
  args: {
    id: 'input-number',
    element: 'number',
    label: 'Number Input',
    validators: [VALIDATOR_REQUIRE(), VALIDATOR_MIN(1), VALIDATOR_MAX(99)],
    warningValidators: [],
    errorText:
      'This field cannot be empty and must have a value between 1 and 99',
    initialValue: '',
    initialValid: false,
  },
};

export const NumberLight: Story = {
  args: {
    id: 'input-number',
    element: 'number',
    label: 'Number Input',
    validators: [VALIDATOR_REQUIRE(), VALIDATOR_MIN(1), VALIDATOR_MAX(99)],
    warningValidators: [],
    errorText:
      'This field cannot be empty and must have a value between 1 and 99',
    initialValue: '',
    initialValid: false,
    variant: 'light',
  },
};

export const TextArea: Story = {
  args: {
    id: 'input-textarea',
    element: 'textarea',
    label: 'Text Area Input',
    validators: [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)],
    warningValidators: [],
    errorText:
      'This field cannot be empty and must have a min lenght value of 10',
    initialValue: '',
    initialValid: false,
  },
};

export const Select: Story = {
  args: {
    id: 'input-textarea',
    element: 'select',
    label: 'Select Input',
    options: [
      { key: '0', value: 'Select an option...' },
      { key: '1', value: 'Invalid option' },
      { key: '2', value: 'Warned Option' },
      { key: '3', value: 'Warned Option 2' },
      { key: '4', value: 'Valid Option' },
      { key: '5', value: 'Valid Option 2' },
    ],
    validators: [VALIDATOR_NOT_IN(['0', '1'])],
    warningValidators: [VALIDATOR_NOT_IN(['2', '3'])],
    errorText: 'You selected an invalid option',
    warningText: "This option has some warnings but it's still a valid option",
    initialValue: '',
    initialValid: false,
  },
};

export const Radio: Story = {
  args: {
    id: 'input-textarea',
    element: 'radio',
    label: 'Radio Input',
    options: [
      { key: '1', value: 'Invalid option' },
      { key: '2', value: 'Warned Option' },
      { key: '3', value: 'Warned Option 2' },
      { key: '4', value: 'Valid Option' },
      { key: '5', value: 'Valid Option 2' },
    ],
    validators: [VALIDATOR_NOT_IN(['0', '1'])],
    warningValidators: [VALIDATOR_NOT_IN(['2', '3'])],
    errorText: 'You selected an invalid option',
    warningText: "This option has some warnings but it's still a valid option",
    initialValue: '',
    initialValid: false,
  },
};
