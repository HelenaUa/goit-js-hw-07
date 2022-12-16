// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

let inputEl = document.querySelector("#name-input");
console.log(inputEl);

let outputEl = document.querySelector("#name-output");
console.log(outputEl);

const nameEl = document.querySelector("h1");
console.log(nameEl);

inputEl.addEventListener("input", onInput);
function onInput(event) {
    const text = event.currentTarget.value;
    !text ? outputEl.textContent = "Anonymous" : outputEl.textContent = text;
};

