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
] as IQuestion[];
