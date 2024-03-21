import { AppActionType } from '../types/actions';

export function Options({
  options,
  dispatch,
  answer,
  correctOption,
}: {
  options: string[];
  dispatch: React.Dispatch<AppActionType>;
  answer: number | null;
  correctOption: number;
}): React.JSX.Element {
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
