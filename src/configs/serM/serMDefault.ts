export const serMDefaultQuestionConfig = [
  {
    title: 'Question 1 Serhii M',
    description: 'Когда была выпущена версия 1.0 Руководства по доступности веб-контента (WCAG)?',
    options: [
      {
        title: '1995',
      },
      {
        title: '1998',
      },
      {
        title: '1999',
        isCorrect: true,
      },
      {
        title: '2003',
      },
    ],
  },
  {
    title: 'Question 2 Serhii M',
    description: 'Выберите верное утрверджение про role="tabpanel"',
    options: [
      {
        title: 'Дочерним элементом обязан быть элемент с role="tab"',
      },
      {
        title:
          'Элемент с ролью tabpanel обязательно должен иметь aria-controls в котором указан id соответсвующего элемента с ролью tab',
      },
      {
        title: 'Элемент с ролью tabpanel обязан идти до элемента с ролью tablist',
      },
    ],
  },
  {
    title: 'Question 3 Serhii M',
    description: 'window role нужна для:',
    options: [
      {
        title: 'Для всех iframe',
      },
      {
        title: 'Для всех canvas view',
      },
      {
        title: 'Для всех <map> c <area>',
      },
    ],
  },
  {
    title: 'Question 4 Serhii M',
    description: 'Какой landmark следует использовать для этих разделов?',
    imgUrl: '',
    options: [
      {
        title: '<title> <header> <banner>',
      },
      {
        title: '<nav> <header> <banner>',
      },
      {
        title: '<nav> <header> <alert>',
      },
      {
        title: '<nav> <header> <main>',
        isCorrect: true,
      },
      {
        title: '<nav> <ul> <main>',
      },
    ],
  },
  {
    title: 'Question 5 Serhii M',
    description: 'Какие потомки могут находится внутри элемента с role="list"',
    options: [
      {
        title: 'listitem',
      },
      {
        title: 'option',
      },
      {
        title: 'group & listitem',
        isCorrect: true,
      },
      {
        title: 'listitem & option ',
      },
    ],
  },
  {
    title: 'Question 6 Serhii M',
    description:
      'Достаточно ли будет подсвечивать красным поле с ошибкой и изменить статус aria-invalid?',
    options: [
      {
        title: 'Да',
      },
      {
        title: 'Нет, еще нужно добавить див с alert aria-atomic и aria-live',
      },
      {
        title: 'Нет, еще нужно добавить див с alert и aria-live',
      },
      {
        title: 'Нет, еще нужно добавить див с alert',
        isCorrect: true,
      },
    ],
  },
];
