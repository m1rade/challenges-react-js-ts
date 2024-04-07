import { useQuizContext } from '../context/QuizContext';
import { Options } from './Options';

export function Question(): React.JSX.Element {
  const { questions, index } = useQuizContext();
  const currentQuestion = questions[index];

  return (
    <div className="question">
      <h4>{currentQuestion.question}</h4>
      <Options options={currentQuestion.options} correctOption={currentQuestion.correctOption} />
    </div>
  );
}
