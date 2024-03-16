import { KeyboardEvent, useEffect, useState } from 'react';

export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="navbar">
      <ul>
        <Logo />
        {children}
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <li className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </li>
  );
}

export function Search({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  // debouncing search query
  useEffect(() => {
    const id = setTimeout(() => {
      onSearch(query.trim());
    }, 1000);

    return () => clearTimeout(id);
  }, [query]);

  const handleSubmitSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(query.trim());
    }
  };

  return (
    <li className="search">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={e => setQuery(e.currentTarget.value)}
        onKeyDown={handleSubmitSearch}
      />
    </li>
  );
}

export function NumResults({ num }: { num: number | string }) {
  return (
    <li className="num-results">
      <p>
        Found <b>{num}</b> movies
      </p>
    </li>
  );
}
