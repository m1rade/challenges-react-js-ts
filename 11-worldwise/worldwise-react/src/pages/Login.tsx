import { useState } from 'react';
import { Field, Form, FormContainer } from '../ui/FormComponents';
import { Page } from '../ui/PageComponents';
import { Button } from '../ui/Buttons';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page>
      <FormContainer>
        <Form>
          <Field
            inputName="email"
            labelName="Email address"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <Field
            inputName="password"
            labelName="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <div style={{ textAlign: 'end' }}>
            <Button $type="primary">Login</Button>
          </div>
        </Form>
      </FormContainer>
    </Page>
  );
}
