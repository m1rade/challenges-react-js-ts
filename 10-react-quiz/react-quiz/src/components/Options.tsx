import { useQuizContext } from '../context/QuizContext';

export function Options({ options, correctOption }: { options: string[]; correctOption: number }): React.JSX.Element {
  const { dispatch, answer } = useQuizContext();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((option, i) => (
        <button
          key={option}
          className={`btn btn-option ${i === answer ? 'answer' : ''} ${
            hasAnswered ? (correctOption === i ? 'correct' : 'wrong') : ''
          }`}
          disabled={hasAnswered}
          onClick={() => {
            dispatch({ type: 'REGISTER_ANSWER', payload: i });
          }}>
          {option}
        </button>
      ))}
    </div>
  );
}
