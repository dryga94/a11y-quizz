import { IQuestion } from "./questions";

export interface IActiveRoadInfo {
  question: IQuestion;
  isInPrison?: boolean;
  setIsInPrison?: (e: boolean) => void;
}