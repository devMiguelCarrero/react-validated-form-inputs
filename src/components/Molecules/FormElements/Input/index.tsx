import React, { useReducer, useEffect, FC, useState } from 'react';
import cx from 'classnames';

import { validate } from '@/shared/util/validators';
import classes from './input.module.scss';
import { classNames, inputElements } from '@/shared/types/types';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
        isNotWarned: validate(action.val, action.warningValidators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

interface InputProps {
  className?: classNames;
  initialValue: string | number | undefined;
  initialValid: boolean;
  id: string;
  label: string;
  placeholder?: string;
  onInput: (id: string, value: string, isValid: boolean) => void;
  validators: any[];
  warningValidators: any[];
  element?: 'input' | 'textarea' | 'email' | 'number' | 'select' | 'radio' | 'date';
  options?: { key: string | number; value: string }[];
  rows?: number;
  errorText?: string;
  warningText?: string;
  variant?: 'regular' | 'light';
}

const Input: FC<InputProps> = ({
  className,
  initialValue,
  initialValid = false,
  id,
  label = 'Input Label',
  placeholder = '',
  onInput,
  validators = [],
  warningValidators = [],
  element = 'input',
  options = [],
  rows = 3,
  errorText = 'Please, enter a valid value',
  warningText = 'This field is warned but still valid',
  variant = 'regular',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isTouched: false,
    isValid: initialValid,
    isNotWarned: true,
  });

  const { value, isValid, isNotWarned } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput, isNotWarned, initialValue]);

  useEffect(() => {
    dispatch({
      type: 'CHANGE',
      val: initialValue,
      validators: validators,
      warningValidators: warningValidators,
    });
  }, [initialValue, validators, warningValidators]);

  const changeHandler = (event: inputElements) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: validators,
      warningValidators: warningValidators,
    });
    if (element === 'select' || element === 'radio') {
      dispatch({
        type: 'TOUCH',
      });
    }
    //if (props.onChange) props.onChange();
  };

  const touchHandler = (event: inputElements) => {
    dispatch({
      type: 'TOUCH',
    });
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: validators,
      warningValidators: warningValidators,
    });
    setIsFocused(false);
  };

  const focusHandler = () => {
    setIsFocused(true);
  };

  const InputElement = () => {
    switch (element) {
      case 'textarea':
        return (
          <>
            <label className="label" htmlFor={id}>
              {label}
            </label>
            <textarea
              id={id}
              name={id}
              placeholder={placeholder}
              rows={rows}
              onChange={changeHandler}
              onBlur={touchHandler}
              onFocus={focusHandler}
              value={inputState.value}
            />
          </>
        );

      case 'select':
        return (
          <>
            <label className="label" htmlFor={id}>
              {label}
            </label>
            <select
              id={id}
              name={id}
              value={inputState.value || initialValue}
              onChange={changeHandler}
              onBlur={touchHandler}
            >
              {options.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.value}
                </option>
              ))}
            </select>
          </>
        );

      case 'radio':
        return (
          <>
            <label className="label" htmlFor={id}>
              {label}
            </label>
            <div className={classes['form-control__radio-container']}>
              {options.map((option) => {
                return (
                  <label
                    className={classes['form-control__radio']}
                    key={option.key}
                  >
                    <input
                      className={classes['form-control__radio__input']}
                      name={id}
                      value={option.key}
                      type="radio"
                      onChange={changeHandler}
                      onBlur={touchHandler}
                    />
                    <span
                      className={classes['form-control__radio__complement']}
                    >
                      <span className={classes['radio-square']}></span>
                      <span className={classes['radio-text']}>
                        {option.value}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </>
        );

      default:
        return (
          <>
            <label className="label" htmlFor={id}>
              {label}
            </label>
            <input
              id={id}
              name={id}
              type={element}
              placeholder={placeholder}
              onChange={changeHandler}
              onInput={changeHandler}
              onBlur={touchHandler}
              onFocus={focusHandler}
              value={inputState.value}
            />
          </>
        );
    }
  };

  const mainClasses = cx(classes['form-control'], {
    [classes['form-control--invalid']]:
      !inputState.isValid && inputState.isTouched,
    [classes['form-control--warning']]:
      !inputState.isNotWarned && inputState.isTouched,
    [classes[`form-control--${variant}`]]: variant,
    [classes['filled']]: inputState.value.length > 0,
    [classes['focused']]: isFocused,
    [className]: className,
  });

  return (
    <div className={mainClasses}>
      {InputElement()}
      {!inputState.isValid && inputState.isTouched && (
        <small className={classes['form-control__error-text']}>
          {errorText}
        </small>
      )}
      {!inputState.isNotWarned && inputState.isTouched && (
        <small className={classes['form-control__warning-text']}>
          {warningText}
        </small>
      )}
    </div>
  );
};

export default Input;
