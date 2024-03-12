import { useState } from 'react';
import { Button } from './components/Button';

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const calAverage = <T extends number>(arr: T[]) => arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

function App() {
  const [searchIsOpen, setSearchIsOpen] = useState(true);
  const [watchedIsOpen, setWatchedIsOpen] = useState(true);
  const [query, setQuery] = useState('');

  const averImdbRating = calAverage(tempWatchedData.map(w => w.imdbRating));
  const averUserRating = calAverage(tempWatchedData.map(w => w.userRating));
  const averRuntime = calAverage(tempWatchedData.map(w => w.runtime));

  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
          </li>
          <li className="search">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={e => setQuery(e.currentTarget.value)}
            />
          </li>
          <li className="num-results">
            <p>
              Found <b>{tempMovieData.length}</b> movies
            </p>
          </li>
        </ul>
      </nav>

      <main className="main">
        <div className="container">
          <Button onClick={() => setSearchIsOpen(o => !o)}>{searchIsOpen ? '–' : '+'}</Button>

          {searchIsOpen && (
            <ul className="movie-list">
              {tempMovieData.map(m => (
                <li key={m.imdbID}>
                  <img src={m.Poster} alt={`${m.Title} poster`} />
                  <h3>{m.Title}</h3>
                  <div className="movie-info">
                    <p>
                      <span>📅</span>
                      <span>{m.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="container">
          <Button onClick={() => setWatchedIsOpen(o => !o)}>{watchedIsOpen ? '–' : '+'}</Button>

          <div className="summary">
            <h2>Movies you watched</h2>
            <div className="movie-info">
              <p>
                <span>🔢</span>
                <span>{tempWatchedData.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{averImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{averUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{averRuntime} min</span>
              </p>
            </div>
          </div>

          {watchedIsOpen && (
            <ul className="movie-list">
              {tempWatchedData.map(m => (
                <li key={m.imdbID}>
                  <img src={m.Poster} alt={`${m.Title} poster`} />
                  <h3>{m.Title}</h3>
                  <div className="movie-info">
                    <p>
                      <span>⭐️</span>
                      <span>{m.imdbRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{m.userRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{m.runtime}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
