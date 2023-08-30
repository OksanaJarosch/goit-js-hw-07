import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

//? Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// ? Реалізація делегування на ul.gallery і ******** отримання url великого зображення.
//? Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//? Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//? Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
//? Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.


const listEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({description, preview, original}) => {
    return `<li class="gallery__item" data-name="${description}">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
}).join("");


listEl.insertAdjacentHTML('beforeend', galleryMarkup);
listEl.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return
    }

const targetPhotoData = event.target.closest(".gallery__item").dataset.name;
// console.log(targetPhotoData);

const targetObject = galleryItems.find(({description}) => description === targetPhotoData);
console.log(targetObject);

const instance = basicLightbox.create(`
<div class="modal">
<img src="${targetObject.original}" alt="${targetObject.description}" >
</div>
`)
instance.show()
}