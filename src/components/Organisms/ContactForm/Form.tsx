import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useForm } from '@/shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_NOT_IN,
  VALIDATOR_IN,
} from '@/shared/util/validators';

import { select, radio } from './formData';

import Form from '@/components/Atoms/Form';
import Input from '@/components/Molecules/FormElements/Input';
import Button from '@/components/Atoms/Buttons/Button';
import FileUpload from '@/components/Molecules/FormElements/FileUpload';

type InputData = string | number | File | undefined;

type FormData = {
  [key: string]: any;
  name: InputData;
  email: InputData;
  message: InputData;
  'bot-field': InputData;
  'form-name': InputData;
};

type Props = {
  onSubmit: (status: string, message?: string) => void;
};

const ContactForm: FC<Props> = ({ onSubmit }) => {
  const [formData, setTheFormData] = useState<FormData | null>();
  const formRef = useRef<HTMLFormElement>(null);

  const Validators = useMemo(() => {
    const ZeroValidator = [VALIDATOR_NOT_IN([0])];
    const MinLengthValidator = [VALIDATOR_MINLENGTH(6)];
    const NoValidators: any[] = [];
    const EmailValidator = [VALIDATOR_EMAIL()];
    const SelectValidate = [VALIDATOR_NOT_IN(['incorrect-1', 'incorrect-2'])];
    const SelectWarningValidate = [VALIDATOR_NOT_IN(['warned-1'])];
    const RadioValidators = [VALIDATOR_NOT_IN(['incorrect'])];
    const RadioWarningValidator = [VALIDATOR_NOT_IN(['warned'])];
    return {
      ZeroValidator,
      MinLengthValidator,
      NoValidators,
      EmailValidator,
      SelectValidate,
      SelectWarningValidate,
      RadioValidators,
      RadioWarningValidator,
    };
  }, []);

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: 0,
        isValid: false,
      },
      email: {
        value: 0,
        isValid: false,
      },
      message: {
        value: 0,
        isValid: false,
      },
      select: {
        value: 0,
        isValid: false,
      },
      radio: {
        value: undefined,
        isValid: false,
      },
      'bot-field': {
        value: '',
        isValid: true,
      },
      'form-name': {
        value: 'contact-us',
        isValid: true,
      },
    },
    false
  );

  const handleSubscriptionForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit('submitting');

      const theFormData = new FormData();

      Object.keys(formData!).map((key) => {
        theFormData.append(key, formData![key]);
      });

      setTimeout(() => {
        console.log('form sent');
        onSubmit('success');
      }, 2000);
    },
    [formData, onSubmit]
  );

  useEffect(() => {
    setTheFormData({
      name: formState.inputs.name.value,
      email: formState.inputs.email.value,
      message: formState.inputs.message.value,
      select: formState.inputs.select.value,
      radio: formState.inputs.radio.value,
      'bot-field': formState.inputs['bot-field'].value,
      'form-name': formState.inputs['form-name'].value,
    });
  }, [formState]);

  return (
    <Form
      ref={formRef}
      className="space-y-8 md:space-y-10"
      onSubmit={handleSubscriptionForm}
      name={'send-resume'}
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      action="/contactsuccess"
      encType="multipart/form-data"
    >
      <input type="hidden" name="bot-field" hidden />
      <input type="hidden" name="form-name" value="contact-us" hidden />
      <Input
        id="name"
        element="input"
        label="Name"
        validators={Validators.MinLengthValidator}
        warningValidators={Validators.NoValidators}
        errorText="Please enter a text of 6 characters min."
        onInput={inputHandler}
        initialValue=""
        initialValid={false}
        variant="light"
      />
      <Input
        id="email"
        element="email"
        label="Company Email"
        validators={Validators.EmailValidator}
        warningValidators={Validators.NoValidators}
        errorText="Please enter a valid email."
        onInput={inputHandler}
        initialValue=""
        initialValid={false}
        variant="light"
      />
      <Input
        id="message"
        element="input"
        label="What can we do for you?"
        validators={Validators.MinLengthValidator}
        warningValidators={Validators.NoValidators}
        errorText="Please enter a text of 6 characters min."
        warningText=""
        onInput={inputHandler}
        initialValue=""
        initialValid={false}
        variant="light"
      />
      <Input
        id="select"
        element="select"
        label="Select Field"
        validators={Validators.SelectValidate}
        warningValidators={Validators.SelectWarningValidate}
        errorText="This is an incorrect option, selecting this radio, the form will not be submitted"
        warningText="This is a warned option, the form can be submitted selecting this option but it will show this warning with a text message of your preference"
        options={select}
        onInput={inputHandler}
        initialValue="0"
        initialValid={false}
        variant="light"
      />
      <Input
        id="radio"
        element="radio"
        label="Radio Value options"
        validators={Validators.RadioValidators}
        warningValidators={Validators.RadioWarningValidator}
        errorText="This is an incorrect option, selecting this radio, the form will not be submitted"
        warningText="This is a warned option, the form can be submitted selecting this option but it will show this warning with a text message of your preference"
        options={radio}
        onInput={inputHandler}
        initialValue="0"
        initialValid={false}
        variant="light"
      />
      <FileUpload
        className="mb-5"
        label="Attach your resume in English*"
        info="Upload file in formats: .pdf or .doc"
        id="resume"
        placeholder="Choose or drag file..."
        dropPlaceholder="Drop your resume here"
        onInput={inputHandler}
      />
      <div>
        <Button type="submit" disabled={!formState.isValid}>
          Send
        </Button>
      </div>
    </Form>
  );
};
export default ContactForm;
