import { IQuestions } from '../interfaces/questions';
import { leshaZDefaultQuestionConfig } from './regExp/leshaZ/leshaZDefault';
import { MaxZQuestionConfig } from './regExp/maxZ/maxZDefault';
import { maxZQuestionConfigPrison } from './regExp/maxZ/maxZPrison';
import { MishaBQuestionConfig } from './regExp/mishaB/mishaBDefault';
import { mishaBQuestionConfigPrison } from './regExp/mishaB/mishaBPrison';
import { serMDefaultQuestionConfig } from './regExp/serhiiM/serMDefault';
import { serMQuestionConfigPrison } from './serM/serMPrison';
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
    defaultQuestions: [...MishaBQuestionConfig],
    prisonQuestions: [...mishaBQuestionConfigPrison],
  },
  {
    defaultQuestions: [...leshaZDefaultQuestionConfig],
    prisonQuestions: [...serSQuestionConfigPrison],
  },
] as IQuestions[];
