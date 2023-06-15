# Star Wars Application

## Links
- [Посилання на проект](https://bagikr.github.io/star-wars/)
- [StoryBook проекту](https://bagikr.github.io/star-wars/storybook/)
- [Репозиторій](https://github.com/BagikR/star-wars)

## Scripts
```bash
npm run start
npm run deploy (збірка та деплой проекту на github pages та коміт у гілці gh-pages)
```
## Техології, методи (хуки) та теми, що використовуються у проекті.

### React.js
- Розгортання проекту з `create-react-app`
- Стан компоненту (хук `useState`)
- Життєвий цикл компоненту (хук `useEffect`)
- Context API (хук `useContext`)
- Рефи та DOM (хук `useRef`)
- Мемоізація (хук `useCallback`)
- Створення власних хуків
- Фрагменти
- Патерн `Higher-Order Component`
- Патерн `Підйом стану`
- Обробка подій
- Controlled Components
- Підключення CSS, `css-modules`, бібліотека `classnames`
- Списки та ключі, `Reconciliation Algorithm`
- ОВідкладене завантаження компонентів `React.lazy()`
- Бібліотека `prop-types` для валідації props

### React Router
- Базовий роутинг
- URL Parameters
- Query Parameters
- Обробка сторінки 404 (Not Found)
- Хуки `useLocation` и `useHistory`

### Redux
- Базова структура react-redux-додатку
- Хуки `useDispatch`, `useSelector`
- Redux Middleware
- Створення асинхронних actionз бібліотекою `redux-thunk`
- Відстежування стану store с `redux-devtools-extension`

### Загальне
- Задання Alias в React-додатку (бібліотека `react-app-rewire-alias`)
- Деплой додатку на GitHub Pages (бібліотека `gh-pages`)
- Створення Ui-Kit із візуальних компонентів та публікація у `@storybook`
- Бібліотека `lodash` з готовими функціями
- `Visual Studio Code`. Сніпети та плагіни

### JavaScript
- Методи роботи с масивами: `map`, `filter`, `forEach`
- Асинхронність: `Promise`, `Async Functions`
- ES6-модулі (import и export)
- Оператор развороту для об’єктів (props для компоненту)
- Деструктуризація масивів та об’єктів
- Тернарні оператори
- Робота з Local Storage
- Робота з API з використанням `Fetch`

### Верстка
- CSS Custom Properties, зімна через JavaScript
- CSS Filters
- CSS Flexbox
- CSS Multi Columns
- Стилізація прокуртки сторінки (скролбар)

---

## Порядок імпортів
- Бібліотеки
- Контекст
- HOC
- UI-компоненти
- Компоненти
- Зображення та відео (медіа)
- Хуки
- Роути
- Сервіси
- Utils
- Константb
- Стилі
