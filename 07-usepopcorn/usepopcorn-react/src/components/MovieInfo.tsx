import { useEffect, useState } from 'react';
import { API_KEY } from '../App';
import { WatchedMovieType } from '../movieData';
import { IFailedResponse, IMovie, IServerResponse } from '../types/common';
import { Button } from './Button';
import { ErrorMessage } from './ErrorMessage';
import { Loader } from './Loader';
import { MovieLg } from './MovieLg';
import { StarRating } from './StarRating';

export function MovieInfo({
  movieID,
  watchedMovies,
  onClose,
  onAddWatchedMovie,
}: {
  movieID: string;
  watchedMovies: WatchedMovieType[];
  onClose: () => void;
  onAddWatchedMovie?: (movie: WatchedMovieType) => void;
}) {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [userRating, setUserRating] = useState(0);
  const [isListed, setIsListed] = useState(false);
  const maxRating = 10;
  const starSize = 24;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        setError('');
        setMovie(null);
        setIsListed(false);
        setUserRating(0);

        const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`);
        if (!resp.ok) throw new Error('Cannot get movie info');

        const data: IServerResponse = await resp.json();

        let results;
        if (data.Response === 'False') {
          results = data as IFailedResponse;
          throw new Error(results.Error);
        } else {
          results = data as IMovie;
          setMovie(results);

          const isMovieWatched = watchedMovies.find(w => w.imdbID === movieID);
          if (isMovieWatched) {
            setUserRating(isMovieWatched.userRating);
            setIsListed(true);
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getMovieById();
  }, [movieID]);

  useEffect(() => {
    if (!movie) return;
    document.title = `Movie - ${movie.Title}`;

    return () => {
      document.title = 'usePopcorn - search movies by title';
    };
  }, [movie]);

  const handleAddWatchedMovie = () => {
    if (!onAddWatchedMovie || !movie) return;

    const newWatchedMovie: WatchedMovieType = {
      imdbID: movie.imdbID,
      imdbRating: Number(movie.imdbRating),
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      runtime: Number(movie.Runtime.split(' ')[0]),
      userRating,
    };

    onAddWatchedMovie(newWatchedMovie);
    setIsListed(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && movie && (
        <>
          <Button className="back-btn" onClick={onClose}>
            &larr;
          </Button>
          <MovieLg movie={movie}>
            <div className="rating">
              {!isListed ? (
                <>
                  <StarRating
                    maxRating={maxRating}
                    defaultRating={userRating}
                    size={starSize}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <Button className={`add-btn ${isListed ? 'listed' : ''}`} onClick={handleAddWatchedMovie}>
                      {isListed ? 'Listed' : '+ Add to watched list'}
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <p>You rated movie with 🌟{userRating}&nbsp;</p>
                  <StarRating
                    maxRating={maxRating}
                    defaultRating={userRating}
                    size={starSize}
                    onSetRating={setUserRating}
                  />
                </>
              )}
            </div>
          </MovieLg>
        </>
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
