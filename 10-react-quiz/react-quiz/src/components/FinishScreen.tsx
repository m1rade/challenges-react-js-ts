import { useQuizContext } from '../context/QuizContext';

export function FinishScreen(): React.JSX.Element {
  const { userPoints, maxPoints, highScore, dispatch } = useQuizContext();
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
      <button className="btn btn-primary" onClick={() => dispatch({ type: 'RESTART' })}>
        Restart
      </button>
    </>
  );
}
