import { useQuizContext } from '../context/QuizContext';

export function StartScreen(): React.JSX.Element {
  const { numQuestions, dispatch } = useQuizContext();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: 'START_QUIZ' })}>
        Let's start!
      </button>
    </div>
  );
}
