import { IQuestion } from './common';

const DATA_RECEIVED = 'DATA_RECEIVED' as const;
const DATA_FAILED = 'DATA_FAILED' as const;
const START_QUIZ = 'START_QUIZ' as const;
const REGISTER_ANSWER = 'REGISTER_ANSWER' as const;
const CHANGE_CURRENT_QUESTION = 'CHANGE_CURRENT_QUESTION' as const;
const FINISH_QUIZ = 'FINISH_QUIZ' as const;
const RESTART = 'RESTART' as const;
const TIMER = 'TIMER' as const;

interface RequestFailedAction {
  type: typeof DATA_FAILED;
}

interface SaveDataAction {
  type: typeof DATA_RECEIVED;
  payload: IQuestion[];
}

interface StartQuizAction {
  type: typeof START_QUIZ;
}

interface RegisterAnswerAction {
  type: typeof REGISTER_ANSWER;
  payload: number;
}

interface ChangeCurrentQuestionAction {
  type: typeof CHANGE_CURRENT_QUESTION;
}

interface FinishQuizAction {
  type: typeof FINISH_QUIZ;
}

interface RestartAction {
  type: typeof RESTART;
}

interface TimerAction {
  type: typeof TIMER;
}

export type AppActionType =
  | SaveDataAction
  | RequestFailedAction
  | StartQuizAction
  | RegisterAnswerAction
  | ChangeCurrentQuestionAction
  | FinishQuizAction
  | RestartAction
  | TimerAction;
