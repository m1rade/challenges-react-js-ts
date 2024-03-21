import { AppActionType } from '../types/actions';
import { IQuestion } from '../types/common';
import { Options } from './Options';

export function Question({
  question,
  answer,
  dispatch,
}: {
  question: IQuestion;
  dispatch: React.Dispatch<AppActionType>;
  answer: number | null;
}): React.JSX.Element {
  return (
    <div className="question">
      <h4>{question.question}</h4>
      <Options options={question.options} answer={answer} dispatch={dispatch} correctOption={question.correctOption} />
    </div>
  );
}
