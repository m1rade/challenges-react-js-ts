import { useQuizContext } from '../context/QuizContext';

export function ProgressBar(): React.JSX.Element {
  const { numQuestions, index, userPoints, maxPoints } = useQuizContext();

  return (
    <header className="progress-bar">
      <progress max={numQuestions} value={index + 1} />
      <p className="question-progress">
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p className="points">
        <strong>{userPoints}</strong>/{maxPoints}
      </p>
    </header>
  );
}
