import { useState } from 'react';

export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="navbar">
      <ul>
        <Logo />
        <Search />
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

function Search() {
  const [query, setQuery] = useState('');

  return (
    <li className="search">
      <input type="text" placeholder="Search movies..." value={query} onChange={e => setQuery(e.currentTarget.value)} />
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
