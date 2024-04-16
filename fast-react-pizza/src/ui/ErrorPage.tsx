import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p> {isRouteErrorResponse(error) ? error.data : error instanceof Error ? error.message : 'Oops'} </p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
