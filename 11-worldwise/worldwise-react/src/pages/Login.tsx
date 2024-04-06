import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../App';
import { useAuthContext } from '../contexts/AuthContext';
import { Button } from '../ui/common/Buttons';
import { Field, Form, FormContainer } from '../ui/common/FormComponents';
import { Page } from '../ui/common/PageComponents';

export function Login() {
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');
  const { login, isAuth } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuth) navigate(`/${ROUTES.map}`, { replace: true });
  }, [isAuth]);

  return (
    <Page>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Field
            inputName="email"
            labelName="Email address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value.trim())}
          />
          <Field
            inputName="password"
            labelName="Password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value.trim())}
          />
          <div style={{ textAlign: 'end' }}>
            <Button $type="primary">Login</Button>
          </div>
        </Form>
      </FormContainer>
    </Page>
  );
}
