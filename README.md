## Приложение рецептов

Небольшое приложение с адаптивной версткой, создавалось в целях практики со стеком Vue3 + Nuxt3 + Pinia

Бесплатная API рецептов: https://www.themealdb.com

### Структура:

-   Главная: список категорий по API, доступен поиск и "Избранное"
-   страница Категории: список рецептов запрашивается через API по названию
-   страница Рецепт: запрос к API по ID рецепта, доступно добавление рецепта к избранному
-   Поиск: делается запрос к API, результат (если они есть) отображаются в контентной части
-   Избранное: реализована кнопка добавления/удаления рецепта из Избранного, список хранится в сторе (не в localstorage)

## Recipes app

Little recipes app made of Vue3 + Nuxt3 + Pinia

Free meal API: https://www.themealdb.com

### Features:

-   Index page: once loaded categories from API
-   Category page: meals loaded from API by category name
-   Recipe page: data loaded from API by recipe ID
-   Search: form and results page, fetch results from API
-   Favorites: button and favorites page, works by Pinia store (not localStorage)
