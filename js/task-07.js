// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

let inputEl = document.querySelector("#font-size-control");
console.log(inputEl);

let textEl = document.querySelector("#text");
console.log(textEl);

inputEl.addEventListener('input', onMove)
function onMove(event) {
    const size = inputEl.value;
    console.log(size);

    textEl.style.fontSize = size + "px";
};
