import { IQuestion } from './questions';

export enum EUser {
  SerhiiM = 0,
  Maksymz = 1,
  MishaB = 2,
  LeshaZ = 3,
}
export interface IActiveRoadInfo {
  question: IQuestion;
  isInPrison?: boolean;
  setIsInPrison?: (e: boolean) => void;
}

export interface IUserState {
  isInPrison: boolean;
  isAbleToAnswer?: boolean;
  activeStep: number;
}

export interface IUsersState {
  [EUser.SerhiiM]: IUserState;
  [EUser.Maksymz]: IUserState;
  [EUser.MishaB]: IUserState;
  [EUser.LeshaZ]: IUserState;
}

export const getIndexFromEUser = (number: number): EUser => {
  if (number === 0) return EUser.SerhiiM;
  if (number === 1) return EUser.Maksymz;
  if (number === 2) return EUser.MishaB;
  if (number === 3) return EUser.LeshaZ;

  return EUser.SerhiiM;
};
