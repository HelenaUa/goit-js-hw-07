import { galleryItems } from './gallery-items.js';

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону 
// елемента галереї.Використовуй готовий код з першого завдання.
// 2.Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.Необхідно 
// додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// 3.Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. 
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4.Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const arrayDiv = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", arrayDiv);

function createGalleryMarkup(array) {
//     return array.map(({ preview, original, description }) => `<a class="gallery__item"
//  href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>`).join(" ");
    return array.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__item"
  href="${original}">
   <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
   </a>`, '')
};

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
 });

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// console.log(lightbox);
