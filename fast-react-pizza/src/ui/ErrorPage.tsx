import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { StylishLink } from './StylishLink';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p> {isRouteErrorResponse(error) ? error.data : error instanceof Error ? error.message : 'Oops'} </p>
      <StylishLink to="-1">&larr; Go back</StylishLink>
    </div>
  );
}
