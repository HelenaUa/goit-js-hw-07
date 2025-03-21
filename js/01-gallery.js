import { galleryItems } from './gallery-items.js';

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого 
// шаблону елемента галереї.
// 2.Реалізація делегування на ul.gallery і отримання url великого зображення.
// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй 
// CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з
// документацією і прикладами.
// 5.Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const arrayDiv = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", arrayDiv);

function createGalleryMarkup(array) {
    return array.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join(" ");
//     return array.reduce((acc, {preview, original, description}) => acc + `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//    <img
//        class="gallery__image"
//        src="${preview}"
//        data-source="${original}"
//        alt="${description}"
//      />
//    </a>
//  </div>`, '')
};

// console.log(basicLightbox); для перевірки підключення бібліотеки

galleryEl.addEventListener("click", onOpenGalleryEl);

function onOpenGalleryEl(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    };

  const instance = basicLightbox.create(`
<img class="gallery__image"
      src="${event.target.dataset.source}"
      alt="${event.target.description}" />`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEsc.bind(instance))
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEsc)
      }
    });
  instance.show();
};

function onEsc(event) {
  if (event.code === "Escape") {
        this.close();
    }
}






