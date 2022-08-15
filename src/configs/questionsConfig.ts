import { IQuestions } from '../interfaces/questions';
import { serMQuestionConfig } from './serM/serMPrison';
export const QuestionsConfig = [
  {
    defaultQuestions: [
      {
        title: 'Question 1 Ser.M',
        description: 'Доступен приведенный ниже фрагмент CSS? Почему?',
        imgUrl: '/img/test.png',
        options: [
          {
            title: 'Да',
          },
          {
            title: 'Нет',
            isCorrect: true,
          },
          { title: 'В некоторых случаях, озвучить' },
        ],
      },
      {
        title: 'Question 2 Ser.M',
        description: `Открыв веб-сайт Honda, программа чтения с экрана прочитает первый интерактивный элемент примерно так:
        ссылка, изображение, aitch tee tee pee ess двоеточие косая черта косая черта double-u double-u double-u точка honda dot com косая черта (ссылка, изображение, https://www.honda.com/)
        Почему мы это слышим?`,
        imgUrl: '/img/test.png',
        options: [
          {
            title: 'На изображении отсутствует альтернативный текст. ',
            isCorrect: true,
          },
          {
            title: 'Программа чтения с экрана всегда будет читать назначение ссылки.',
          },
          {
            title: 'На сайте не реализованы атрибуты aria для поддержки программ чтения с экрана.',
          },
        ],
      },
      {
        title: 'Question 3 Ser.M',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
      {
        title: 'Question 4',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
      {
        title: 'Question 5',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
    ],
    prisonQuestions: [...serMQuestionConfig],
  },
  {
    defaultQuestions: [
      {
        title: 'Question 1 Max',
        description: 'Доступен приведенный ниже фрагмент CSS? Почему?',
        imgUrl: '/img/test.png',
        options: [
          {
            title: 'Да',
          },
          {
            title: 'Нет',
            isCorrect: true,
          },
          { title: 'В некоторых случаях, озвучить' },
        ],
      },
      {
        title: 'Question 2 Max',
        description: `Открыв веб-сайт Honda, программа чтения с экрана прочитает первый интерактивный элемент примерно так:
        ссылка, изображение, aitch tee tee pee ess двоеточие косая черта косая черта double-u double-u double-u точка honda dot com косая черта (ссылка, изображение, https://www.honda.com/)
        Почему мы это слышим?`,
        imgUrl: '/img/test.png',
        options: [
          {
            title: 'На изображении отсутствует альтернативный текст. ',
            isCorrect: true,
          },
          {
            title: 'Программа чтения с экрана всегда будет читать назначение ссылки.',
          },
          {
            title: 'На сайте не реализованы атрибуты aria для поддержки программ чтения с экрана.',
          },
        ],
      },
      {
        title: 'Question 3 Max',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
      {
        title: 'Question 4',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
      {
        title: 'Question 5',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
    ],
    prisonQuestions: [
      {
        title: 'Prison question 1 (Max)',
        description: 'Какай Контраст нужна для уровня АА по стандартам WCAG ?',
      },
      {
        title: 'Prison question 2 (Max)',
        description: 'В чем разница между следующими атрибутами: hidden, aria-hidden="true" и role="presentation" или role="none"?',
      },
      {
        title: 'Prison question 3 (Max)',
        description: 'Какие способы вы знаете что бы полностью скрыть контент для всех пользователей (с ограниченными возможностями тоже) ?',
      },
      {
        title: 'Prison question 4 (Max)',
        description: 'Объясните разницу, если она есть, в терминах кепшены и сабтайтл для видео или аудио',
      },
      {
        title: 'Prison question 5 (Max)',
        description: 'Онлайн-посетители с физическими или когнитивными нарушениями могут испытывать трудности с этой онлайн-формой из-за:',
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
    defaultQuestions: [
      {
        title: 'Question 1 Ser.Sh',
        description: 'Доступен приведенный ниже фрагмент CSS? Почему?',
        imgUrl: '/img/test.png',
        options: [
          {
            title: 'Да',
          },
          {
            title: 'Нет',
            isCorrect: true,
          },
          { title: 'В некоторых случаях, озвучить' },
        ],
      },
      {
        title: 'Question 2 Ser.Sh',
        description: `Открыв веб-сайт Honda, программа чтения с экрана прочитает первый интерактивный элемент примерно так:
        ссылка, изображение, aitch tee tee pee ess двоеточие косая черта косая черта double-u double-u double-u точка honda dot com косая черта (ссылка, изображение, https://www.honda.com/)
        Почему мы это слышим?`,
        imgUrl: '/img/test.png',
        options: [
          {
            title: 'На изображении отсутствует альтернативный текст. ',
            isCorrect: true,
          },
          {
            title: 'Программа чтения с экрана всегда будет читать назначение ссылки.',
          },
          {
            title: 'На сайте не реализованы атрибуты aria для поддержки программ чтения с экрана.',
          },
        ],
      },
      {
        title: 'Question 3 Ser.Sh',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
      {
        title: 'Question 4',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
      {
        title: 'Question 5',
        description: `...`,
        imgUrl: '',
        options: [
          {
            title: '1',
            isCorrect: true,
          },
          {
            title: '2',
          },
          { title: '3' },
        ],
      },
    ],
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
