import { IQuestion } from './../interfaces/questions';
export const serhiiConfig = [
  {
    title: 'Доступен приведенный ниже фрагмент CSS? Почему?',
    description: 'Description',
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
    title: 'Большой вопрос =)',
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
      { title: 'На сайте не реализованы атрибуты aria для поддержки программ чтения с экрана.' },
    ],
  },
  {
    title: 'вопрос 3',
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
    title: 'вопрос 4',
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
    title: 'вопрос 5',
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
] as IQuestion[];

export const serhiiProConfig = [
  {
    title: 'ProQ1',
    description: 'Description',
  },
  {
    title: 'ProQ2',
    description: 'Description',
  },
  {
    title: 'ProQ3',
    description: 'Description',
  },
  {
    title: 'ProQ4',
    description: 'Description',
  },
  {
    title: 'ProQ5',
    description: 'Description',
  },
] as IQuestion[];
