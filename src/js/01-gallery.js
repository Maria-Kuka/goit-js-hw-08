
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardMarkup(galleryItems);np

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});



// import SimpleLightbox from 'simplelightbox';
// import "simplelightbox/dist/simple-lightbox.min.css";
// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line
// console.log(galleryItems);

// const galleryContainer = document.querySelector('.gallery');
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// function createGalleryItemsMarkup(images) {
//     return images.map(({ preview, original, description }) => 
//  ` <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
//   `
//   ).join('');
// }

// new SimpleLightbox('.gallery a', {
//   captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
// });
// const galleryContainer = document.querySelector('.gallery');
// const itemsMarkup = ({ preview, original, description }) => {
//     return `
//   <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
// `;
// };

// // use library SimpleLightbox
// const itemsMarkupList  = galleryItems.map(itemsMarkup).join('');
// galleryContainer.insertAdjacentHTML('beforeend', itemsMarkupList);

