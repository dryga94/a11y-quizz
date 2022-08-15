export const serMQuestionConfigPrison = [
  {
    title: 'Prison question 1 (Ser.M)',
    description: 'Обязательно ли переводить содержимое aria-аттрибутов если сайт мультиязычный? Если нет - объясните почему. Если да - объясните почему?',
  },
  {
    title: 'Prison question 2 (Ser.M)',
    description: `С точки зрения доступности если разница в этих пустых списках?`,
    code: `<ul></ul>  <div role="list"></div>`,
  },
  {
    title: 'Prison question 3 (Ser.M)',
    description: `Прокомментируйте код:`,
    code: `
    <div class="visualy-hidden" alt="This div read on screen reader the results of searched persons and its not visible" aria-atomic="true" aria-live="assertive">
      <span class="visualy-hidden" aria-label=" 'Showing '+result.length + ' results.'"></span>
    </div>`,
  },
  {
    title: 'Prison question 4 (Ser.M)',
    description: 'Назовите все ARIA role types и ARIA attribute types',
  },
  {
    title: 'Prison question 5 (Ser.M)',
    description: 'Чем отличается роли marquee от log ?',
  },
  {
    title: 'Prison question 6 (Ser.M)',
    description: `Корректен ли код? Аргументируйте свой ответ`,
    code: `
    <ul role="list" style="list-style: none;">
      <li>Slava</li>
      <li>UA</li>
    </ul>`,
  },
]