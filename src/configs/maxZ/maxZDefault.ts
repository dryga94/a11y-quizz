export const MaxZQuestionConfig = [
  {
    title: 'Question 1 Maks Z',
    description: 'Доступен приведенный ниже фрагмент CSS? Почему?',
    imgUrl: '/img/q5.png',
    options: [
      {
        title: 'Да',
      },
      {
        title: 'Нет',
        isCorrect: true,
      },
      {
        title: 'В некоторых случаях. Озвучить случаи',
      },
    ],
  },
  {
    title: 'Question 2 Maks Z',
    description: 'Какой из вариантов обязателен к добавлению в следующий код?',
    code: '<button>Go home</button>',
    options: [
      {
        title: 'aria-pressed="false"',
      },
      {
        title: 'aria-label="Go home"',
      },
      {
        title: 'role="link"',
      },
    ],
  },
  {
    title: 'Question 3 Maks Z',
    description:
      'Какую роль необходимо выставить SVG для того что-бы ридер смог прочесть содержимое тэга <text>?',
    options: [
      {
        title: 'role="img"',
      },
      {
        title: 'role="presentation"',
      },
      {
        title: 'Никакую! Ридер и так прочтет',
        isCorrect: true,
      },
      {
        title: 'role="graphics-document"',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'Question 4 Maks Z',
    description:
      'В каком из перечисленных случаев запись attr="false" - то же самое, что и остутсвие aria-аттрибута?',
    options: [
      {
        title: 'aria-expanded="false"',
      },
      {
        title: 'aria-required="false"',
        isCorrect: true,
      },
      {
        title: 'aria-pressed="false"',
      },
      {
        title: 'aria-selected="false"',
      },
    ],
  },
  {
    title: 'Question 5 Maks Z',
    description: 'Элемент с какой ролью не может иметь aria-owns ',
    options: [
      {
        title: 'menuitemcheckbox',
      },
      {
        title: 'navigation',
      },
      {
        title: 'progressbar',
      },
      {
        title: 'timer',
      },
    ],
  },
  {
    title: 'Question 6 Maks Z',
    description:
      'Если добавить role="presentation" для кнопки, сможем ли мы попасть на нее через TAB? ',
    options: [
      {
        title: 'Да',
        isCorrect: true,
      },
      {
        title: 'Нет',
      },
      {
        title: 'Только в некоторых случаях. Назвать их',
      },
    ],
  },
];
