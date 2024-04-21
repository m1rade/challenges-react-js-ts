import type React from 'react';
import { useState } from 'react';
import Input from '../../ui/Input';

export function CreateUser() {
  const [username, setUsername] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-xl font-normal text-stone-800 md:text-2xl">
        🍕 Welcome! Please start by telling us your name:
      </p>

      <Input
        placeholder="Your full name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}
