import { useEffect, useState } from 'react';
import { ListContainer } from './components/ListContainer';
import { Loader } from './components/Loader';
import { MovieList } from './components/MovieList';
import { Navbar, NumResults } from './components/Navbar';
import { WatchedSummary } from './components/WatchedSummary';
import { MovieDataType, WatchedMovieType } from './movieData';

const API_KEY = 'b931a86e';

function App() {
  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [watchedMovies, setWatchedMovies] = useState<WatchedMovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=guardians&page=1`);
      const data: ISucceedResponse = await resp.json();
      setMovies(data.Search);

      setIsLoading(false);
    };

    getMovies();
  }, []);

  return (
    <>
      <Navbar>
        <NumResults num={movies.length} />
      </Navbar>
      <MainContent>
        <ListContainer>{isLoading ? <Loader /> : <MovieList movies={movies} />}</ListContainer>
        <ListContainer>
          <WatchedSummary watched={watchedMovies} />
          <MovieList movies={watchedMovies} />
        </ListContainer>
      </MainContent>
    </>
  );
}

export default App;

function MainContent({ children }: { children?: React.ReactNode }) {
  return <main className="main">{children}</main>;
}

type ResponseType = 'True' | 'False';
interface ISucceedResponse {
  Response: ResponseType;
  Search: MovieDataType[];
  totalResults: string;
}
interface IFailedResponse {
  Response: ResponseType;
  Error: string;
}
