import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../App';
import { Button } from '../ui/common/Buttons';
import { Field, Form, FormContainer } from '../ui/common/FormComponents';
import { Page } from '../ui/common/PageComponents';

export function Login() {
  const [email, setEmail] = useState('example@mail.net');
  const [password, setPassword] = useState('1234');
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    navigate(ROUTES.map);
  };

  return (
    <Page>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
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
