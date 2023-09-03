import { galleryItems } from './gallery-items.js';
// Change code below this line

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

const targetObject = galleryItems.find(({description}) => description === targetPhotoData);

const instance = basicLightbox.create(`
<div class="modal">
<img src="${targetObject.original}" alt="${targetObject.description}" >
</div>
`)
instance.show()


//close with Esc
const visible = basicLightbox.visible()
console.log(visible);

if (visible) {
    listEl.addEventListener('keydown', onCloseEsc);
} 

function onCloseEsc(event) {
    if (event.code === 'Escape') {
      instance.close()
      listEl.removeEventListener('keydown', onCloseEsc);
  }  
  
}

instance.element().addEventListener('click', () => {  instance.close();  listEl.removeEventListener('keydown', onCloseEsc);});
}
