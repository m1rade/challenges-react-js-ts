import { useQuizContext } from '../context/QuizContext';

export function NextBtn(): React.JSX.Element | undefined {
  const { answer, index, numQuestions, dispatch } = useQuizContext();

  if (answer === null) return <></>;

  if (index + 1 < numQuestions) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch({ type: 'CHANGE_CURRENT_QUESTION' })}>
        Next
      </button>
    );
  }

  if (index + 1 === numQuestions) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch({ type: 'FINISH_QUIZ' })}>
        Finish
      </button>
    );
  }
}
