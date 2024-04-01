import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
`;

export const Form = styled.form`
  background-color: var(--color-dark--2);
  border-radius: 0.7rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Input = styled.input`
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

interface FieldPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  labelName: string;
}
export function Field({ inputName, labelName, name, ...inputProps }: FieldPropsType) {
  return (
    <div>
      <Label htmlFor={inputName}>{labelName}</Label>
      <Input id={inputName} name={inputName} {...inputProps} />
    </div>
  );
}
