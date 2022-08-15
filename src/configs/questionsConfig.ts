import { IQuestions } from '../interfaces/questions';
import { MaxZQuestionConfig } from './maxZ/maxZDefault';
import { serMDefaultQuestionConfig } from './serM/serMDefault';
import { serMQuestionConfig } from './serM/serMPrison';
import { serHDefaultQuestionConfig } from './serS/serSDefault';

export const QuestionsConfig = [
  {
    defaultQuestions: [...serMDefaultQuestionConfig],
    prisonQuestions: [...serMQuestionConfig],
  },
  {
    defaultQuestions: [...MaxZQuestionConfig],
    prisonQuestions: [
      {
        title: 'Prison question 1 (Max)',
        description: 'Какай Контраст нужна для уровня АА по стандартам WCAG ?',
      },
      {
        title: 'Prison question 2 (Max)',
        description:
          'В чем разница между следующими атрибутами: hidden, aria-hidden="true" и role="presentation" или role="none"?',
      },
      {
        title: 'Prison question 3 (Max)',
        description:
          'Какие способы вы знаете что бы полностью скрыть контент для всех пользователей (с ограниченными возможностями тоже) ?',
      },
      {
        title: 'Prison question 4 (Max)',
        description:
          'Объясните разницу, если она есть, в терминах кепшены и сабтайтл для видео или аудио',
      },
      {
        title: 'Prison question 5 (Max)',
        description:
          'Онлайн-посетители с физическими или когнитивными нарушениями могут испытывать трудности с этой онлайн-формой из-за:',
        img: '',
      },
      {
        title: 'Prison question 6 (Max)',
        description: `Объясните код ниже, валиден ли он:
        <div role="meter"
          aria-valuenow="90"
          aria-labelledby="cpu_usage_label">
          <svg width="100"
            height="100"
            class="fill"
            aria-hidden="true"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0"
              y="0"
              width="100%"
              height="100%"
              fill="currentcolor"></rect>
          </svg>
        </div>`,
      },
    ],
  },
  {
    defaultQuestions: [...serHDefaultQuestionConfig],
    prisonQuestions: [
      {
        title: 'Prison question 1 Ser.Sh',
        description: 'Description',
      },
      {
        title: 'Prison question 2 Ser.Sh',
        description: 'Description',
      },
      {
        title: 'Prison question 3 Ser.Sh',
        description: 'Description',
      },
      {
        title: 'Prison question 4',
        description: 'Description',
      },
      {
        title: 'Prison question 5',
        description: 'Description',
      },
    ],
  },
] as IQuestions[];
