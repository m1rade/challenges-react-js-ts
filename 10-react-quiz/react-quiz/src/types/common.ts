export type AppStatusType = 'Loading' | 'Error' | 'Ready' | 'Active' | 'Finished';

export interface IQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: string;
}
