import { AppActionType } from '../types/actions';

export function StartScreen({
  numQuestions = 0,
  onStart,
}: {
  numQuestions?: number;
  onStart?: React.Dispatch<AppActionType>;
}): React.JSX.Element {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn" onClick={() => onStart?.({ type: 'START_QUIZ' })}>
        Let's start!
      </button>
    </div>
  );
}
