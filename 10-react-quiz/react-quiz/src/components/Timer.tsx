import { useEffect } from 'react';
import { AppActionType } from '../types/actions';

export function Timer({
  dispatch,
  remainingTime,
}: {
  remainingTime: number;
  dispatch: React.Dispatch<AppActionType>;
}): React.JSX.Element {
  const min = String(Math.trunc(remainingTime / 60)).padStart(2, '0');
  const sec = String(remainingTime % 60).padStart(2, '0');

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'TIMER' });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return <div className="timer">{`${min}:${sec}`}</div>;
}
