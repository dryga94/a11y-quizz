import { IQuestions } from '../interfaces/questions';
import { maxZQuestionConfigPrison } from './maxZ/maxZPrison';
import { serMQuestionConfigPrison } from './serM/serMPrison';
import { serSQuestionConfigPrison } from './serS/serSPrison';
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
    prisonQuestions: [...serMQuestionConfigPrison],
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
    prisonQuestions: [...maxZQuestionConfigPrison],
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
    prisonQuestions: [...serSQuestionConfigPrison],
  },
] as IQuestions[];
