import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const listItemString = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", listItemString);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "outside",
});
