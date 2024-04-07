import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { AppActionType } from '../types/actions';
import { AppStatusType, IQuestion } from '../types/common';

interface QuizContextType extends StateType {
  numQuestions: number;
  maxPoints: number;
  dispatch: React.Dispatch<AppActionType>;
}

const QuizContext = createContext<QuizContextType | null>(null);

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

function reducer(state: StateType = initialState, action: AppActionType): StateType {
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

const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error('Context hook has to be used within its nearest context provider');
  return context;
};

function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state.questions.length;
  const maxPoints = state.questions.reduce((acc, q) => acc + q.points, 0);

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'DATA_RECEIVED', payload: data }))
      .catch(_ => dispatch({ type: 'DATA_FAILED' }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        ...state,
        numQuestions,
        maxPoints,
        dispatch,
      }}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, useQuizContext };
