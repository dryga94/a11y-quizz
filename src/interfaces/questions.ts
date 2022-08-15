import { ReactNode } from 'react';

export interface IAnswer {
  title: string;
  isCorrect?: boolean;
}

export interface IQuestion {
  title?: string;
  description?: ReactNode;
  imgUrl?: string;
  options?: IAnswer[];
  code?: string;
}

export interface IQuestions {
  defaultQuestions: IQuestion[];
  prisonQuestions: IQuestion[];
}
