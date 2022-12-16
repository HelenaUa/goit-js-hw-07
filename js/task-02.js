// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredient = document.querySelector("#ingredients");
console.log(ingredient);

const elements = ingredients.map(option => {
  const ingredientEl = document.createElement("li");
  console.log(ingredientEl);
  ingredientEl.textContent = option;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

ingredient.append(...elements);
ingredient.style.listStyle = 'none';




