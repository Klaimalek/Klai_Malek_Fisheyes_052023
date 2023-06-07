
const lightBoxBlock = document.getElementById('lightBox');
const lightboxContent = document.querySelector('.lightBox-content');
const btnClose = document.getElementById('lightbox__close');
const nextMedia = document.getElementById('link__next__media');
const previousMedia = document.getElementById('link__previous__media');
const linkMedia = document.getElementsByClassName('media__link');
console.log( linkMedia);
const sectionMedia = document.getElementById('profil__media').childNodes;
//------------------openLightbox---------------------------------

function openLightbox(id) {
  displayMediaLightbox(id)
  lightBoxBlock.style.display = 'block';

}
//--------------------closeLightbox---------------------------------
btnClose.addEventListener('click', closeLightBox);
function closeLightBox() {
  lightBoxBlock.style.display = 'none';
  btnClose.focus();
}
// ----------placer l'iamge dans le conteneur lightbox-------------------
function displayMediaLightbox(id) {
  const media = document.querySelector(`[data-id='${id}']`);
  const mediaClone = media.cloneNode();
  if (media.nodeName == 'VIDEO') {
    mediaClone.setAttribute('controls', true);
  }
  lightboxContent.innerHTML = '';
  mediaClone.setAttribute('tabindex', '0');

  lightboxContent.appendChild(mediaClone);
  mediaClone.focus();
}


  

