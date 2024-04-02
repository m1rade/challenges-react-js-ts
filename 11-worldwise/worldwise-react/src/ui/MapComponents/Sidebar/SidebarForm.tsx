import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../common/Buttons';
import { Field, Form } from '../../common/FormComponents';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function SidebarForm() {
  const navigate = useNavigate();

  return (
    <Form>
      <Field inputName="city" labelName="City name" />
      <Field inputName="country" labelName="Country name" />
      <BtnContainer>
        <Button
          onClick={e => {
            e.preventDefault();

            navigate(-1);
          }}
          $type="back">
          &larr; Back
        </Button>
        <Button $type="primary">Submit</Button>
      </BtnContainer>
    </Form>
  );
}
