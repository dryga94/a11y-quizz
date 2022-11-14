export const MishaBQuestionConfig = [
  {
    title: 'Question 1 Misha B',
    description: 'Какой диапазон Кодпойнтов отвечает X в выражении \\cX?',
    options: [
      {
        title: 'U+0001–U+0008',
      },
      {
        title: 'U+0001–U+001F',
        isCorrect: true,
      },
      {
        title: 'U+0001–U+0011',
      },
      {
        title: 'U+0011–U+001F',
      },
    ],
  },
  {
    title: 'Question 2 Misha B',
    description: 'Как забрать букву Д в Слове ДОМИК?',
    options: [
      {
        title: '/^./',
        isCorrect: true,
      },
      {
        title: '/DOMIK/',
      },
      {
        title: '/\\⌂/',
      },
    ],
  },
  {
    title: 'Question 3 Misha B',
    description: 'Как обозначить выбор точки в регулярном выражении?',
    options: [
      {
        title: '/./',
      },
      {
        title: ' /{.}/ ',
      },
      {
        title: '/‘.’/',
      },
      {
        title: '/\\./',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'Question 4 Misha B',
    description: 'Что выведет:\n/\\x57/gi\nI will visit the site XXX with www, OR WebHub!',
    options: [
      {
        title: 'XXX',
      },
      {
        title: 'hh',
      },
      {
        title: 'W',
      },
      {
        title: 'X',
      },
      {
        title: 'wwwwwW',
        isCorrect: true,
      },
      {
        title: 'iiiii',
      },
    ],
  },
  {
    title: 'Question 5 Misha B',
    description:
      "Чему будет равен result:\nlet text = 'Is this all there is';\nlet pattern = /is(?! all)/gi;\nlet result = text.match(pattern);",
    options: [
      {
        title: 'is',
      },
      {
        title: 'all',
      },
      {
        title: 'is is',
      },
      {
        title: 'Is',
      },
      {
        title: 'Isis',
        isCorrect: true,
      },
    ],
  },
];
