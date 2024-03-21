import { AppActionType } from '../types/actions';

export function FinishScreen({
  maxPoints,
  userPoints,
  highScore,
  onRestart,
}: {
  userPoints: number;
  maxPoints: number;
  highScore: number;
  onRestart: React.Dispatch<AppActionType>;
}): React.JSX.Element {
  const percentage = Math.ceil((userPoints / maxPoints) * 100);

  let emoji;
  if (percentage === 0) emoji = '😭';
  if (percentage > 0 && percentage < 50) emoji = '😢';
  if (percentage >= 50 && percentage < 80) emoji = '🤔';
  if (percentage >= 80 && percentage < 100) emoji = '😃';
  if (percentage === 100) emoji = '🏆';

  return (
    <>
      <p className="results">
        <span>{emoji}</span>You scored <strong>{userPoints}</strong> out of {maxPoints} ({percentage}%)
      </p>
      <p className="highscore">Highscore: {highScore} points</p>
      <button className="btn btn-primary" onClick={() => onRestart({ type: 'RESTART' })}>
        Restart
      </button>
    </>
  );
}
