import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
`;

export const Form = styled.form<{ $isLoading?: boolean }>`
  background-color: var(--color-dark--2);
  border-radius: 0.7rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  ${props =>
    props.$isLoading &&
    css`
      opacity: 0.3;
    `};
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`;

const BaseTextField = css`
  width: 100%;
  padding: 0.8rem 1.2rem;
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-light--3);
  transition: all 0.2s;

  &:focus {
    outline: none;
    background-color: #fff;
  }
`;

export const Input = styled.input`
  ${BaseTextField};
`;

export const Textarea = styled.textarea`
  ${BaseTextField};

  min-height: 12rem;
  resize: none;
  overflow-y: auto;
`;

export const StyledDatePicker = styled(DatePicker)`
  ${BaseTextField};
`;

interface FieldPropsType<T extends 'input' | 'textarea'> {
  inputName: string;
  labelName: string;
  fieldType?: T;
}
interface InputPropsType extends FieldPropsType<'input'>, React.InputHTMLAttributes<HTMLInputElement> {}
interface TextareaPropsType extends FieldPropsType<'textarea'>, React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Field({
  name,
  inputName,
  labelName,
  fieldType = 'input',
  ...props
}: InputPropsType | TextareaPropsType) {
  return (
    <div>
      <Label htmlFor={inputName}>{labelName}</Label>
      {fieldType === 'textarea' ? (
        <Textarea id={inputName} name={inputName} {...(props as TextareaPropsType)} />
      ) : (
        <Input id={inputName} name={inputName} {...(props as InputPropsType)} />
      )}
    </div>
  );
}
