import { IQuestion } from './questions';
import {  IUsersState } from './roads';

export interface ILocalStorage {
  activeQuestion: IQuestion;
  activeRoad: number;
  usersState: IUsersState;
  isStartView: boolean;
  gameIsStarted: boolean;
}
