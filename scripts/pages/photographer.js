(async function main() {
  await setDataProfil();
  manageLikes();
  displayDropdownFilter();
  handleSortMedia();
})();
var media = null;
var totalLikeCount = 0;
let listMediaId = []
function urlGetParams(url) {
  let resultat = url.search;
  return resultat.substring(4);
}
//récupération des données
async function setDataProfil() {
  const idPhotoghrapher = urlGetParams(document.location);
  let response = await fetch('../data/photographers.json');
  if (!response.ok) {
    return 'error';
  }
  let data = await response.json();
  let photographer = data.photographers.find(
    (element) => element.id == idPhotoghrapher
  );

  media = data.media.filter((m) => m.photographerId == idPhotoghrapher);
  setDataElement(photographer, media);
}
// display les données poor le photographer et media
function setDataElement(photographer, media) {
  setProfilPhotgrapher(photographer);
  setMedia(media);
  setSummeryGphotographer(photographer, media);
}
//Mettre info dans la presentation du photographe
function setProfilPhotgrapher(photographer) {
  document.getElementById('namePhotographer').innerText = photographer.name;
  document.getElementById(
    'photohrapherLocation'
  ).innerText = `${photographer.city}, ${photographer.country}`;
  document.getElementById('photographerTagligne').innerText =
    photographer.tagline;

  document.getElementById(
    'photographerImg'
  ).src = `assets/photographers/${photographer.portrait}`;
}

// display les medias

function setMedia(media) {
  const galleryMedia = document.querySelector('#profil__media');
  media.forEach((element) => {
    let media = mediaFactory(element);
    let article = media.getCardMedia();
    galleryMedia.innerHTML += article;
  });
   let listMedia = galleryMedia.childNodes;
   console.log(listMedia);
}

//mettre les données dans le bloc rouge

function setSummeryGphotographer(photographer, media) {
  const blocSummery = document.querySelector('#summery');
  let medias = summeryFactory(photographer);
  let div = medias.getCardBloc(photographer);
  blocSummery.innerHTML += div;
}

function summeryFactory(photographer) {
  getCardBloc(photographer);
  return { getCardBloc };
}

function getCardBloc(photographer) {
  const totalLike = document.querySelectorAll('.favorite');
  totalLikeCount = 0;
  totalLike.forEach((media) => {
    totalLikeCount += Number(media.textContent);
  });
  //console.log(totalLikeCount);
  const blocPhotographer = `
            <div id ="likesTotal" class="totalLikes"> ${totalLikeCount}    
            </div>
            <i class="fa-sharp fa-solid fa-heart"></i>
            <div class="pricePhotographer"> ${photographer.price} €/ jour</div>
          `;
  return blocPhotographer;
}
function manageLikes() {
  const btnLikes = document.getElementsByClassName('favorite');
  for (let btnLike of btnLikes) {
    btnLike.addEventListener('click', incrementLike);
  }
}
function incrementLike(event) {
  let parentElement = event.target.parentNode;
  let likeElement = parentElement.firstElementChild;
  let likeNumber = parseInt(likeElement.textContent);
  let HeartEmpty = likeElement.nextElementSibling;
  let HeartNotEmpty = HeartEmpty.nextElementSibling;
  let likes = document.getElementById('likesTotal');
  console.log(likes);
  if (parentElement.classList.contains('liked')) {
    likeNumber -= 1;
    likeElement.innerText = likeNumber;
    HeartEmpty.style.display = 'block';
    HeartNotEmpty.style.display = 'none';
    totalLikeCount -= 1;
    likes.innerHTML = totalLikeCount;
  } else {
    likeNumber += 1;
    likeElement.innerText = likeNumber;
    HeartEmpty.style.display = 'none';
    HeartNotEmpty.style.display = 'block';
    totalLikeCount += 1;
    likes.innerHTML = totalLikeCount;
  }
  parentElement.classList.toggle('liked');
}

// récupération de nobre total par id et ajouter +1

//------------------selection des options pour faire le tri ---------------------------
function displayDropdownFilter() {
  //récupérer les éléments de la liste déroulante
  const elementsDropdown = document.querySelectorAll('.dropdown');
  const chevron = document.getElementsByClassName('dropdown__chevron')[0];

  window.addEventListener('click', () => {
    elementsDropdown.forEach((elt) => {
      elt.classList.remove('active');
      chevron.classList.add('.active');
    });
  });

  elementsDropdown.forEach((elt) => {
    const btnValue = elt.querySelector('.dropdown-button');
    // dropdownInput  c'est la div qui englode les options
    const dropdownInput = elt.querySelector('.dropdown-input');
    // dropdownPanelOptions c'est le li de la liste
    const dropdownPanelOptions = elt.querySelectorAll('.dropdown-round ul li');
    dropdownInput.addEventListener('click', (event) => {
      event.stopPropagation();
      elt.classList.toggle('active');
    });
    dropdownPanelOptions.forEach((dropdownPanelOptionItem) => {
      dropdownPanelOptionItem.addEventListener('click', () => {
        dropdownInput.querySelector('input').value =
          dropdownPanelOptionItem.innerHTML;
        btnValue.value = dropdownPanelOptionItem.getAttribute('data-value');
      });
    });
  });
}
//------------------------------- trier-------------------------------------------
function handleSortMedia() {
  const sortPopularity = document.getElementById('popular');
  const sortDate = document.getElementById('date');
  const sortTitle = document.getElementById('title');

  sortPopularity.addEventListener('click', (e) => {
    functionSort(e.target);
  });

  sortDate.addEventListener('click', (e) => {
    functionSort(e.target);
  });
  sortTitle.addEventListener('click', (e) => {
    functionSort(e.target);
  });
}
function functionSort(data) {
  totalLikes = 0;
  document.getElementsByClassName('totalLikes').textContent;
  let resultSort = [];
  //console.log(data.id);
  if (data.id == 'title') {
    let resultSort = media.sort((a, b) => a.title.localeCompare(b.title));
    //console.log(resultSort);
  } else if (data.id == 'date') {
    let resultSort = media.sort((a, b) => new Date(b.date) - new Date(a.date));
    //console.log(resultSort);
  } else {
    resultSort = media.sort((a, b) => b.likes - a.likes);
    console.log(resultSort);
  }
  const galleryConteneur = document.getElementById('profil__media');
  galleryConteneur.innerHTML = ''; // vider l'ancien conteneur pour afficher la nouvelle liste de media

  setMedia(media);
  
}
//---------------------------------lightbox--------------------------------------
