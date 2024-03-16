import { IMovie } from '../types/common';

export function MovieLg({ movie, children }: { movie: IMovie; children?: React.ReactNode }) {
  return (
    <article className="details">
      <header>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <div>
          <h2>{movie.Title}</h2>
          <p>
            {movie.Year} &bull; {movie.Rated} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>⭐&nbsp;IMDB:{movie.imdbRating}</p>
          <p>{movie.Country}</p>
        </div>
      </header>
      {children}
      <section>
        <p>
          <span>Director:</span>
          {movie.Director}
        </p>
        <p>
          <span>Writers:</span>
          {movie.Writer}
        </p>
        <p>
          <span>Cast:</span>
          {movie.Actors}
        </p>
        <p>
          <em>{movie.Plot}</em>
        </p>
      </section>
    </article>
  );
}
