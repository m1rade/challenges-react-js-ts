import { useEffect, useReducer } from 'react';
import { Error } from './components/Error';
import { FinishScreen } from './components/FinishScreen';
import { Footer } from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import { Main } from './components/Layout/Main';
import { Loader } from './components/Loader';
import { NextBtn } from './components/NextBtn';
import { ProgressBar } from './components/ProgressBar';
import { Question } from './components/Question';
import { StartScreen } from './components/StartScreen';
import { Timer } from './components/Timer';
import { AppActionType } from './types/actions';
import { AppStatusType, IQuestion } from './types/common';

type StateType = typeof initialState;
const initialState = {
  questions: [] as IQuestion[],
  status: 'Loading' as AppStatusType,
  index: 0,
  answer: null as number | null,
  userPoints: 0,
  highScore: 0,
  remainingTime: 0,
};
const secondsPerQuestion = 15;

function reducer(state: StateType, action: AppActionType): StateType {
  switch (action.type) {
    case 'DATA_RECEIVED':
      return { ...state, questions: action.payload, status: 'Ready' };
    case 'DATA_FAILED':
      return { ...state, status: 'Error' };
    case 'START_QUIZ':
      return { ...state, status: 'Active', remainingTime: state.questions.length * secondsPerQuestion };
    case 'REGISTER_ANSWER': {
      const currentQuestion = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        userPoints:
          currentQuestion.correctOption === action.payload
            ? state.userPoints + currentQuestion.points
            : state.userPoints,
      };
    }
    case 'CHANGE_CURRENT_QUESTION':
      return { ...state, index: state.index++, answer: null };
    case 'FINISH_QUIZ':
      return {
        ...state,
        status: 'Finished',
        highScore: state.userPoints > state.highScore ? state.userPoints : state.highScore,
      };
    case 'RESTART':
      return {
        ...initialState,
        questions: state.questions,
        status: 'Active',
        highScore: state.highScore,
        remainingTime: state.questions.length * secondsPerQuestion,
      };
    case 'TIMER':
      return {
        ...state,
        remainingTime: state.remainingTime--,
        status: state.remainingTime === 0 ? 'Finished' : state.status,
      };
    default:
      return state;
  }
}

function App(): React.JSX.Element {
  const [{ questions, status, index, answer, userPoints, highScore, remainingTime }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  const maxPoints = questions.reduce((acc, q) => acc + q.points, 0);

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'DATA_RECEIVED', payload: data }))
      .catch(_ => dispatch({ type: 'DATA_FAILED' }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'Loading' && <Loader />}
        {status === 'Error' && <Error />}
        {status === 'Ready' && <StartScreen numQuestions={numQuestions} onStart={dispatch} />}
        {status === 'Active' && (
          <>
            <ProgressBar index={index} numQuestions={numQuestions} userPoints={userPoints} points={maxPoints} />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
              <Timer remainingTime={remainingTime} dispatch={dispatch} />
              <NextBtn answer={answer} index={index} dispatch={dispatch} numQuestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === 'Finished' && (
          <FinishScreen userPoints={userPoints} maxPoints={maxPoints} highScore={highScore} onRestart={dispatch} />
        )}
      </Main>
    </div>
  );
}

export default App;
