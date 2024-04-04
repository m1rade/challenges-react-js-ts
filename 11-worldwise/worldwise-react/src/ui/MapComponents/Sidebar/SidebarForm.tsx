import styled from 'styled-components';
import { BackButton, Button } from '../../common/Buttons';
import { Field, Form } from '../../common/FormComponents';
import { ROUTES } from '../../../App';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function SidebarForm() {
  return (
    <Form>
      <Field inputName="city" labelName="City name" />
      <Field inputName="date" labelName="When did you go to?" />
      <Field inputName="notes" labelName="Notes about your trip to" fieldType="textarea" />
      <BtnContainer>
        <BackButton to={'/' + ROUTES.map}>&larr; Back</BackButton>
        <Button $type="primary">Submit</Button>
      </BtnContainer>
    </Form>
  );
}
