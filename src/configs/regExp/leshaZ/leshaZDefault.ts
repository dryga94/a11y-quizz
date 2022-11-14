export const leshaZDefaultQuestionConfig = [
  {
    title: 'Question 1 Lesha Z',
    description: 'Какой записи эквивалентен символьный селектор \\w?',
    options: [
      {
        title: 'A-Za-z0-9_',
        isCorrect: true,
      },
      {
        title: 'A-Za-z0-9$',
      },
      {
        title: 'A-Za-z',
      },
      {
        title: 'A-Za-z_',
      },
    ],
  },
  {
    title: 'Question 2 Lesha Z',
    description: 'Как забрать букву Р из слова ДОЛЛАР?',
    options: [
      {
        title: '/.€/m',
      },
      {
        title: '/.$/m',
        isCorrect: true,
      },
      {
        title: '/.₴/m',
      },
    ],
  },
  {
    title: 'Question 3 Lesha Z',
    description:
      'Что выведет регулярка -  /[HOTUL]/ для:\n "Tut karoche bude shos. Uvas kstati mishi. dada. Lol kak Oni suda popali.Hahahah."',
    options: [
      {
        title: 'HOTUL',
      },
      {
        title: 'Нічого',
      },
      {
        title: 'TULOH',
      },
      {
        title: 'TU Tochno LoH',
      },
      {
        title: 'T',
        isCorrect: true,
      },
      {
        title: 'HOT',
      },
      {
        title: 'H',
      },
    ],
  },
  {
    title: 'Question 4 Lesha Z',
    description:
      'Чему будет равен result:\n let text = "100, 1000 or 10000?";\n let pattern = /\\d{2,3}/g;\n let result = text.match(pattern);',
    options: [
      {
        title: '100,100,100',
      },
      {
        title: '100,1000,10000',
      },
      {
        title: '100,100,100,00',
        isCorrect: true,
      },
      {
        title: '10,010',
      },
    ],
  },
  {
    title: 'Question 5 Lesha Z',
    description:
      'Что выведет консоль лог и почему:\n const regExp3 = new RegExp("\\^\\$\\.", "i");\n console.log(regExp3.test("^$."));\n console.log(/\\^$\\./i.test("^$."));',
    options: [
      {
        title: 'true - true',
      },
      {
        title: 'false - true',
        isCorrect: true,
      },
      {
        title: 'false - false',
      },
      {
        title: '^$. - ^$.',
      },
      {
        title: '^$ - ^$',
      },
      {
        title: 'true - ^$.',
      },
    ],
  },
];
