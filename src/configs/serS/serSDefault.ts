export const serHDefaultQuestionConfig = [
  {
    title: 'Question 1 Serhii S',
    description:
      'Открыв веб-сайт Honda, программа чтения с экрана прочитает первый интерактивный элемент примерно так: ссылка, изображение, aitch tee tee pee ess двоеточие косая черта косая черта double-u double-u double-u точка honda dot com косая черта (ссылка, изображение, https://www.honda.com/) Почему мы это слышим?',
    imgUrl: '',
    options: [
      {
        title: 'На изображении отсутствует альтернативный текст.',
        isCorrect: true,
      },
      {
        title: 'Программа чтения с экрана всегда будет читать назначение ссылки.',
      },
      {
        title: 'На сайте не реализованы атрибуты aria для поддержки программ чтения с экрана.',
      },
    ],
  },
  {
    title: 'Question 2 Serhii S',
    description:
      'На этом снимке экрана из India Today показаны три новостные статьи. Это хороший набросок?',
    code: `
        <h1>Новости</h1>
        <h2>Что не так с...</h2>
        <h3>Митхун Чакраборти собирается присоединиться....</h3>
        <h3>Римская серия: Винеш Фогат выигрывает 2-ю золотую медаль</h3>
    `,
    imgUrl: '',
    options: [
      {
        title: 'Да. <h2> — самый важный.',
      },
      {
        title: 'Нет, <h3> должен быть вложен <h2>.',
      },
      {
        title:
          'Нет, два <h3> не являются подзаголовками <h2>. Они никак не связаны. Они должны быть <h2>',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'Question 3 Serhii S',
    description: 'Выберите ошибочное утверждение о role="dialog"',
    options: [
      {
        title: 'Диалог — это окно-потомок основного окна веб-приложения.',
      },
      {
        title: 'Диалог рекомендовано определить меткой aria-label или aria-labeledby',
      },
      {
        title: 'В диалоге обязательно должен быть фокусируемый элемент',
      },
    ],
  },
  {
    title: 'Question 4 Serhii S',
    description:
      'В этом примере из окна чата текстовое поле «Введите вопрос» имеет следующий код. Является ли эта текстовая область accessible? ',
    code: `
        <textarea
            id="textarea"
            tabindex="0"
            placeholder="Введите вопрос"
            aria-invalid="false"
        ></textarea>
    `,
    options: [
      {
        title: 'Да',
      },
      {
        title: 'Нет, он имеет tabindex="0", отключающий доступ к клавиатуре.',
      },
      {
        title: 'Нет, отсутствует действительный ярлык. Заполнитель не является допустимым ярлыком.',
        isCorrect: true,
      },
    ],
  },
  {
    title: 'Question 5 Serhii S',
    description:
      'Какое из этих замещающих текстовых описаний изображений лучше всего подходит для слабовидящих пользователей?',
    imgUrl: '',
    options: [
      {
        title: 'Изображение хомяка',
      },
      {
        title: 'хомяк сидит на качелях',
        isCorrect: true,
      },
      {
        title: 'Изображение хомяка на качелях',
      },
      {
        title: 'Узнайте больше о хомяках',
      },
    ],
  },
  {
    title: 'Question 6 Serhii S',
    description: 'Какого из ариа атрибутов не существует?',
    options: [
      {
        title: 'aria-braillelabel',
      },
      {
        title: 'aria-brailleroledescription',
      },
      {
        title: 'aria-flowto',
      },
      {
        title: 'aria-colindextext',
      },
    ],
  },
];
