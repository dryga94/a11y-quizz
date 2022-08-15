import { IQuestions } from '../interfaces/questions';
import { MaxZQuestionConfig } from './maxZ/maxZDefault';
import { maxZQuestionConfigPrison } from './maxZ/maxZPrison';
import { serMDefaultQuestionConfig } from './serM/serMDefault';
import { serMQuestionConfigPrison } from './serM/serMPrison';
import { serHDefaultQuestionConfig } from './serS/serSDefault';
import { serSQuestionConfigPrison } from './serS/serSPrison';

export const QuestionsConfig = [
  {
    defaultQuestions: [...serMDefaultQuestionConfig],
    prisonQuestions: [...serMQuestionConfigPrison],
  },
  {
    defaultQuestions: [...MaxZQuestionConfig],
    prisonQuestions: [...maxZQuestionConfigPrison],
  },
  {
    defaultQuestions: [...serHDefaultQuestionConfig],
    prisonQuestions: [...serSQuestionConfigPrison],
  },
] as IQuestions[];
