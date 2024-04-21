import type React from 'react';
import { useState } from 'react';
import { Button } from '../../ui/Button';
import Input from '../../ui/Input';

export function CreateUser() {
  const [username, setUsername] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center">
      <p className="mb-4 text-xl font-normal text-stone-800 md:text-2xl">
        🍕 Welcome! Please start by telling us your name:
      </p>

      <Input
        placeholder="Your full name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      {username !== '' && <Button>Start ordering</Button>}
    </form>
  );
}
