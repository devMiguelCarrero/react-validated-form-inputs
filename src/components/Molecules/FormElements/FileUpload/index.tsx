import React, { FC, ReactNode, useEffect, useState } from 'react';
import {
  useDropzone,
  DropzoneInputProps,
  DropzoneRootProps,
} from 'react-dropzone';
import cx from 'classnames';

import IconDoc from '@/shared/assets/icons/IconDoc';
import IconPDF from '@/shared/assets/icons/IconPDF';
import DeleteButton from '@/components/Atoms/Buttons/DeleteButton';
import classes from './file-upload.module.scss';
import inputClasses from '@/components/Molecules/FormElements/Input/input.module.scss';
import { classNames } from '@/shared/types/types';

type Props = {
  className?: classNames;
  label: string;
  id: string;
  info: string;
  placeholder: string;
  dropPlaceholder: string;
  onInput: (
    id: string,
    file: File | null,
    isValid: boolean | undefined
  ) => void;
};

interface FileProps {
  icon: ReactNode;
  file: File | null;
}

const FileUpload: FC<Props> = ({
  className,
  label,
  id,
  info,
  placeholder,
  dropPlaceholder,
  onInput,
}) => {
  const [isValid, setIsValid] = useState<boolean>();
  const [file, setFile] = useState<FileProps>({ file: null, icon: <></> });
  const [errors, setErrors] = useState<string[]>([]);
  const newClassname = cx(`${inputClasses['form-control']}`, {
    [classes['file-upload']]: true,
    [className]: className,
  });

  const onDrop = (acceptedFiles: File[], fileRejections: any) => {
    setErrors([]);
    if (acceptedFiles.length > 0) {
      const acceptedFile: FileProps = {
        icon: <IconPDF />,
        file: acceptedFiles[0],
      };
      if (acceptedFile.file) {
        switch (acceptedFile.file.type) {
          case 'application/pdf':
            acceptedFile.icon = <IconPDF />;
            break;
          default:
            acceptedFile.icon = <IconDoc />;
            break;
        }
        setIsValid(true);
        setFile(acceptedFile);

        const fileInput = document.querySelector<HTMLInputElement>(`#${id}`)!;

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(acceptedFile.file);
        fileInput.files = dataTransfer.files;
      }
    }
    if (fileRejections.length > 0) {
      fileRejections.map((file: any) => {
        file.errors.map((error: any) => {
          setErrors((oldErrors) => {
            const newErrors = [...oldErrors];
            if (
              oldErrors.findIndex((theError) => theError === error.message) ===
              -1
            ) {
              newErrors.push(error.message);
            }
            return newErrors;
          });
        });
      });
      setIsValid(false);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  }: {
    getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
    getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
    isDragActive: boolean;
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
      'application/doc': ['.doc', '.docx'],
    },
    maxSize: 2097152,
  });

  const handleRemoveFile = () => {
    setIsValid(false);
    setFile({ file: null, icon: <></> });
  };

  useEffect(() => {
    onInput(id, file.file, isValid);
  }, [file, isValid, id, onInput]);

  return (
    <div className={newClassname}>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...getInputProps()} />
      {!file.file && (
        <div className={classes['file-upload__dropper-container']}>
          <div
            {...getRootProps({
              className: `${classes['file-upload__dropper']} ${
                isDragActive ? classes['is-drag-active'] : ''
              }`,
            })}
          >
            {isDragActive ? (
              <p className={classes['file-upload__text']}>{dropPlaceholder}</p>
            ) : (
              <p className={classes['file-upload__text']}>{placeholder}</p>
            )}
          </div>
          <p className={classes['file-upload__info']}>{info}</p>
        </div>
      )}
      {file.file && (
        <>
          <div className={classes['file-upload__dropped']}>
            <span className={classes['file-upload__dropped__delete']}>
              <DeleteButton onClick={handleRemoveFile} />
            </span>
            <span className={classes['file-upload__dropped__icon']}>
              {file.icon}
            </span>
            <span className={classes['file-upload__dropped__text']}>
              {file.file.name.slice(0, 30) +
                (file.file.name.length > 30 ? '...' : '')}
            </span>
          </div>
        </>
      )}
      {errors.length > 0 && (
        <>
          {errors.map((error, index) => (
            <small
              className={inputClasses['form-control__error-text']}
              key={`error-${index}`}
            >
              {error}
            </small>
          ))}
        </>
      )}
    </div>
  );
};
export default FileUpload;
