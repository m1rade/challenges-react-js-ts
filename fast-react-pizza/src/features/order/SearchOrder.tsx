import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <input placeholder="Search order №" value={query} onChange={e => setQuery(e.currentTarget.value)} />
    </form>
  );
}
