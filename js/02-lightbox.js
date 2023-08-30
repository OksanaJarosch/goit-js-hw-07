import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({description, preview, original}) => {
    return `<li class="gallery__item" data-name="${description}">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
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

const targetObject = galleryItems.find(({description}) => description === targetPhotoData);

// SimpleLightbox - Modal Window
const modalMarkup = `<div class="gallery">
// <a href="${targetObject.original}"><img src="${targetObject.original}" alt="" title="${targetObject.description}"/></a>
// </div>`;

var lightbox = new SimpleLightbox('.gallery a', modalMarkup);

  }


// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.