import { IQuestion } from './questions';

export enum EUser {
  SerhiiM = 0,
  Maksymz = 1,
  SerhiiS = 2,
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
  [EUser.SerhiiS]: IUserState;
}

export const getIndexFromEUser = (number: number): EUser => {
  if (number === 0) return EUser.SerhiiM;
  if (number === 1) return EUser.Maksymz;
  if (number === 2) return EUser.SerhiiS;

  return EUser.SerhiiM;
};
