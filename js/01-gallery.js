import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

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

// console.log(basicLightbox); для проверки подключения библиотеки

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

 


// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
// instance.show();
// console.log(basicLightbox);





