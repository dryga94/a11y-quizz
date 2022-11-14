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
    description:
      'Что выведет регулярка -  /RegExr/gi для\n "RegExr was created by gskinner.com.Edit the Expression & Text to see matches. Also regexrto use everywhere."',
    options: [
      {
        title: 'RegExr',
      },
      {
        title: 'regexr',
      },
      {
        title: 'лох',
      },
      {
        title: 'regexrto',
      },
      {
        title: 'нічого',
      },
      {
        title: 'RegExrregexr',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'Question 4 Misha B',
    description:
      'Что выведет:\n /.(\\.\\\\\\.\\.com)/g \n"RegExr was created by gskinner.com. gskinnerhttps://regexr.com +  gskinnerhttps://regexr.com"',
    options: [
      {
        title: 'https://regexr.com',
      },
      {
        title: 'Передаю Слово Серегe',
      },
      {
        title: 'Нічого',
        isCorrect: true,
      },
      {
        title: 'https://regexr.comhttps://regexr.com',
      },
      {
        title: '.com',
      },
    ],
  },
  {
    title: 'Question 5 Misha B',
    description:
      "Что выведет:\n const re = /(\\w+)\\s(\\w+)\\s(\\w+)\\s('w+)/;\n const str = 'Tu huy ne Ya';\n const newstr = str.replace(re, '$4, $2, $3, $1');\n console.log(newstr);",
    options: [
      {
        title: 'Nihuya, sho za bred',
      },
      {
        title: 'Tu huy ne Ya',
      },
      {
        title: 'Ya huy ne Tu',
        isCorrect: true,
      },
      {
        title: 'Vse yui no ne ya',
      },
      {
        title: 'три пробела',
      },
      {
        title: 'null',
      },
      {
        title: 'undefined',
      },
    ],
  },
];
