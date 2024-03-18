import { useEffect, useState } from 'react';
import { ErrorMessage } from './components/ErrorMessage';
import { ListContainer } from './components/ListContainer';
import { Loader } from './components/Loader';
import { MovieInfo } from './components/MovieInfo';
import { MovieList } from './components/MovieList';
import { Navbar, NumResults, Search } from './components/Navbar';
import { WatchedSummary } from './components/WatchedSummary';
import { MovieDataType, WatchedMovieType } from './movieData';
import { IFailedResponse, IServerResponse, ISucceedResponse } from './types/common';

export const API_KEY = 'b931a86e';

function App() {
  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [watchedMovies, setWatchedMovies] = useState<WatchedMovieType[]>(() => {
    const watched = localStorage.getItem('watchedMovies');
    return watched ? JSON.parse(watched) : [];
  });

  const [selectedID, setSelectedID] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOnSearch = (query: string) => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        setMovies([]);
        setError('');

        const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=1`);
        if (!resp.ok) {
          throw new Error('Cannot get movies from API');
        }

        const data: IServerResponse = await resp.json();

        let results;
        if (data.Response === 'False') {
          results = data as IFailedResponse;
          throw new Error(results.Error);
        } else {
          results = data as ISucceedResponse;
          setMovies(results.Search);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (!query.length) {
      setError('');
      return;
    }

    handleCloseSelectedMovie();
    getMovies();
  };

  const handleSelectMovie = (movieID: string) => setSelectedID(selectedID => (selectedID === movieID ? null : movieID));

  const handleCloseSelectedMovie = () => setSelectedID(null);

  const handleAddWatchedMovie = (movie: WatchedMovieType) => setWatchedMovies(watched => [...watched, movie]);

  const handleDeleteWatched = (movieID: string) => {
    if (window.confirm('🛑 Remove movie from your watched list?')) {
      setWatchedMovies(watched => watched.filter(w => w.imdbID !== movieID));
    }
  };

  const handleChangeUserRating = (rating: number, movieID: string) =>
    setWatchedMovies(watched => watched.map(w => (w.imdbID === movieID ? { ...w, userRating: rating } : w)));

  useEffect(() => {
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  return (
    <>
      <Navbar>
        <Search onSearch={handleOnSearch} />
        <NumResults num={movies.length} />
      </Navbar>
      <MainContent>
        <ListContainer>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelect={handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}
        </ListContainer>
        <ListContainer>
          {selectedID ? (
            <MovieInfo
              movieID={selectedID}
              watchedMovies={watchedMovies}
              onAddWatchedMovie={handleAddWatchedMovie}
              onChangeUserRating={handleChangeUserRating}
              onClose={handleCloseSelectedMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watchedMovies} />
              <MovieList movies={watchedMovies} onSelect={handleSelectMovie} onDelete={handleDeleteWatched} />
            </>
          )}
        </ListContainer>
      </MainContent>
    </>
  );
}

export default App;

function MainContent({ children }: { children?: React.ReactNode }) {
  return <main className="main">{children}</main>;
}
