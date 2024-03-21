export function ProgressBar({
  index,
  numQuestions,
  userPoints,
  points,
}: {
  index: number;
  numQuestions: number;
  userPoints: number;
  points: number;
}): React.JSX.Element {
  return (
    <header className="progress-bar">
      <progress max={numQuestions} value={index + 1} />
      <p className="question-progress">
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p className="points">
        <strong>{userPoints}</strong>/{points}
      </p>
    </header>
  );
}
