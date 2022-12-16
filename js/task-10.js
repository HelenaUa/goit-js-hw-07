// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector("input");
console.log(inputEl);
const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);
const btnDestroy = document.querySelector("button[data-destroy]");
console.log(btnDestroy);
const boxEl = document.querySelector("#boxes");
console.log(boxEl);

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) { 
  let divWidth = 30;
  let divHeight = 30;
  let step = 10;

  const elements = [];
  
  for (let i = 1; i <= 100; i += 1) {
    const div = document.createElement("div");
    div.style.width = '"${divWidth}" + "${step}"';
    div.style.height = '"${divHeight}" + "${step}"';
    div.style.backgroundColor = getRandomHexColor();
    div.textContent = i;
    // divWidth += step;
    // divHeight += step;
    elements.push(div);
    
  };
  boxEl.append(...elements);
  };
    
function destroyBoxes(event) {
  inputEl.value = " ";
  boxEl.innerHTML = [];
};


