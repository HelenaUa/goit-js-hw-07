// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const categoriesItems = document.querySelectorAll("#categories li.item");
console.log("Number of categories:", categoriesItems.length);
// Number of categories: 3

categoriesItems.forEach((category) => {
    const titleOfCategory = category.firstElementChild;
    console.log("Category:", titleOfCategory.textContent);

    const quantityOfCategory = titleOfCategory.nextElementSibling.children;
    console.log("Elements:", quantityOfCategory.length);
})
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5