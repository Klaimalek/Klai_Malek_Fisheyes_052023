
const lightBoxBlock = document.getElementById('lightBox');
const lightboxContent = document.querySelector('.lightBox-content');
const btnClose = document.getElementById('lightbox__close');
const nextMedia = document.getElementById('link__next__media');
const previousMedia = document.getElementById('link__previous__media');
const linkMedia = document.getElementsByClassName('media__link');
console.log( linkMedia);
const sectionMedia = document.getElementById('profil__media').childNodes;
//------------------openLightbox---------------------------------

/*function openLightbox() {}
for (let link of linkMedia.length) {
  link.addEventListener('click', function (e) {
    e.preventDefault;
    displayMediaLightbox(id);
    lightBoxBlock.style.display = 'block';
    //lightBoxBlock.classList.add('show');
  });
}
*/
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
// ----------placer l'iamge dans le lightbox-------------------
function displayMediaLightbox(id) {
  const media = document.querySelector(`[data-id='${id}']`);
  console.log(media);
  const mediaClone = media.cloneNode();
  if (media.nodeName == 'VIDEO') {
    mediaClone.setAttribute('controls', true);
  }
  lightboxContent.innerHTML = '';
  mediaClone.setAttribute('tabindex', '0');

  lightboxContent.appendChild(mediaClone);
  mediaClone.focus();
}
// Recherche quelle media afficher
/*
function changeMediaLightBox(index) {
  let indexListMedia = listMediaId.findIndex(
    (id) => id == lightboxContent.firstChild.dataset.id
  );
  console.log(indexListMedia);
  if (indexListMedia + index < 0) {
    indexListMedia = listMediaId.length - 1;
  } else if (indexListMedia + index == listMediaId.length) {
    indexListMedia = 0;
  } else {
    indexListMedia += index;
  }
  displayMediaLightbox(listMediaId[indexListMedia]);
}

//-------------------changer les mediaas avec les fleches------------

nextMedia.addEventListener('click',changeMediaLightBox(1));
previousMedia.addEventListener('click',changeMediaLightBox(-1));
*/
