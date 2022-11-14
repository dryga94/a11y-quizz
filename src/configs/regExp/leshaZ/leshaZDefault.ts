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
    description: 'Каким способом нельзя выделить Huilo в строке putin Huilo.',
    options: [
      {
        title: '/Huilo/',
      },
      {
        title: '/[a-z]{5}/i',
        isCorrect: true,
      },
      {
        title: '/H([a-z])*/',
      },
      {
        title: '/.{3}lo/',
      },
    ],
  },
  {
    title: 'Question 4 Lesha Z',
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
    title: 'Question 5 Lesha Z',
    description:
      'Что выведет:\n/([love]|(yo\\w+))/gi\n"evol, or uoy! gren,love You, gr, blue, yellow"',
    options: [
      {
        title: 'evolooeloveYouleello',
        isCorrect: true,
      },
      {
        title: 'evolowwoeloveleello',
      },
      {
        title: 'evolooeooe',
      },
      {
        title: 'evolooelveYouleello',
      },
      {
        title: 'evolooeloveeve',
      },
    ],
  },
];
