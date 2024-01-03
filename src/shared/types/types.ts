import { ChangeEvent } from 'react';

export type classNames = string | number | symbol | any;
export type inputElements =
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLInputElement>;

export interface InputState {
  value: string;
  isValid: boolean;
  isNotWarned: boolean;
  isTouched: boolean;
}

interface ChangeAction {
  type: 'CHANGE';
  val: string;
  validators: any;
  warningValidators: any;
}

interface TouchAction {
  type: 'TOUCH';
}

export type InputAction = ChangeAction | TouchAction;
