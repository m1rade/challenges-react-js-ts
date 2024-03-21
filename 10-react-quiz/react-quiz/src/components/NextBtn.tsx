import { AppActionType } from '../types/actions';

export function NextBtn({
  index,
  dispatch,
  numQuestions,
  answer,
}: {
  index: number;
  numQuestions: number;
  dispatch: React.Dispatch<AppActionType>;
  answer: number | null;
}): React.JSX.Element | undefined {
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
