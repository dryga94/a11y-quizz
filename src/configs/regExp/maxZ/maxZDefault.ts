export const MaxZQuestionConfig = [
  {
    title: 'Question 1 Maks Z',
    description: 'Какие символы покрывает символьный селектор "\\s"?',
    options: [
      {
        title:
          '\\f\\n\\r\\t\\v\\u00b0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff',
      },
      {
        title:
          '\\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2027\\u2029\\u202f\\u205f\\u3000\\ufeff',
      },
      {
        title:
          '\\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff',
        isCorrect: true,
      },
      {
        title:
          '\\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u206f\\u3000\\ufeff',
      },
    ],
  },
  {
    title: 'Question 2 Maks Z',
    description: 'Какой правильный синтаксис для определения Регулярного выражения',
    options: [
      {
        title: ' /RegExp/',
        isCorrect: true,
      },
      {
        title: '/RegExp\\',
      },
      {
        title: '\\RegExp\\',
      },
      {
        title: '\\RegExp/',
      },
    ],
  },
  {
    title: 'Question 3 Maks Z',
    description: 'Что выведет регулярка -  /[а-я]/g для - "Ял, Ко, Їх"',
    options: [
      {
        title: 'Ял, Ко, Їх',
      },
      {
        title: 'ЯКЇ',
      },
      {
        title: 'лох',
        isCorrect: true,
      },
      {
        title: 'сам лох',
      },
      {
        title: 'ЯлКоЇх',
      },
    ],
  },
  {
    title: 'Question 4 Maks Z',
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
    title: 'Question 5 Maks Z',
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
