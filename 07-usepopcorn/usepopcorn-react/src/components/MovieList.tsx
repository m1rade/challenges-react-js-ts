import { MovieDataType, WatchedMovieType } from '../App';
import { Movie } from './Movie';

export function MovieList({ movies }: { movies?: MovieDataType[] | WatchedMovieType[] }) {
  return (
    <ul className="movie-list">
      {movies?.map(m => (
        <Movie key={m.imdbID} movie={m} />
      ))}
    </ul>
  );
}
