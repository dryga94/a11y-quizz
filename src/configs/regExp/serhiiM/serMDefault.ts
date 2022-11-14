export const serMDefaultQuestionConfig = [
  {
    title: 'Question 1 Serhii M',
    description: 'Как расшифровывается RegExp?',
    options: [
      {
        title: 'Regular expression',
        isCorrect: true,
      },
      {
        title: 'Reglament of expiring',
      },
      {
        title: 'Real Expressionists',
      },
      {
        title: 'RegExp блеять и RegExp. Никак бля!',
      },
    ],
  },
  {
    title: 'Question 2 Serhii M',
    description: '\\uhhhh 的意思是什么',
    options: [
      {
        title: '匹配一个 NUL 字符。不要在此后面加上另一个数字。',
      },
      {
        title: '匹配换页符。',
      },
      {
        title: '匹配垂直制表符。',
      },
      {
        title: 'ਕੈਰੇਜ ਰਿਟਰਨ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ।',
      },
    ],
  },
  {
    title: 'Question 3 Serhii M',
    description: 'Какие буковки могут стоят в конце регулярного выражения как флаги',
    options: [
      {
        title: 'g i m s u y',
        isCorrect: true,
      },
      {
        title: 'g i m s  p',
      },
      {
        title: 'g m i',
      },
      {
        title: 'g m i s y t j k',
      },
    ],
  },
  {
    title: 'Question 4 Serhii M',
    description:
      'Что выведет регулярка \n let text = `Is this\n all there\nis`\n let pattern = /^is/gm\n let result = text.match(pattern);\nconsole.log(result)',
    options: [
      {
        title: 'isis',
      },
      {
        title: 'null',
      },
      {
        title: 'undefined',
      },
      {
        title: 'is',
        isCorrect: true,
      },
      {
        title: 'Is this all there is',
      },
    ],
  },
  {
    title: 'Question 5 Serhii M',
    description:
      'Что выведет консоль лог и почему:\nconst regExp3 = new RegExp("^\\$\\.", "i");\nconsole.log(regExp3.test("^$."));\nconsole.log(/\\^\\$\\./i.test("^$."));',
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
