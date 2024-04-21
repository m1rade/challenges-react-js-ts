import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';

export function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputType="search"
        placeholder="Search order №"
        value={query}
        onChange={e => setQuery(e.currentTarget.value)}
      />
    </form>
  );
}
