import { useCallback, useReducer } from 'react';

type InputValue = string | number | File | undefined;

type InputState = {
  value: InputValue;
  isValid: boolean;
};

type FormState = {
  inputs: {
    [key: string]: InputState;
  };
  isValid: boolean;
};

type InputHandler = (id: string, value: InputValue, isValid: boolean) => void;

type SetFormData = (
  inputData: { [key: string]: InputState },
  formValidity: boolean
) => void;

type FormReducerAction =
  | {
      type: 'INPUT_CHANGE';
      value: InputValue;
      isValid: boolean;
      inputId: string;
    }
  | {
      type: 'SET_DATA';
      inputs: { [key: string]: InputState };
      formIsValid: boolean;
    };

const formReducer = (
  state: FormState,
  action: FormReducerAction
): FormState => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) continue;
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (
  initialInputs: { [key: string]: InputState },
  initialFormValidity: boolean
): [FormState, InputHandler, SetFormData] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback<InputHandler>((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value,
      isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback<SetFormData>((inputData, formValidity) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
