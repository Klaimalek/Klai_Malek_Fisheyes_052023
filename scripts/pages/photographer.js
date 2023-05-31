( async function main() {
 await setDataProfil();
  manageLikes();
})();

//const galleryMedia = document.querySelector('#profil__media');
//const blocSummery = document.querySelector('#summery');
//récupérer l'ID du photographe pour charger les données des photographers

function urlGetParams(url) {
  let resultat = url.search;
  return resultat.substring(4);
}
//const idPhotoghrapher = urlGetParams(document.location);
//console.log(idPhotoghrapher);

//const informationPhotographer = document.querySelectorAll('photograph-header');

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
  let media = data.media.filter((m) => m.photographerId == idPhotoghrapher);

  setDataElement(photographer, media);

  //console.log(media);
}
//setDataProfil();

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
  let totalLikeCount = 0;
  //console.log(totalLike);
  totalLike.forEach((media) => {
    totalLikeCount += Number(media.textContent);
  });
  //console.log(totalLikeCount);
  const blocPhotographer = `
            <div class="pricePhotographer"> ${photographer.price} €/ jour</div>
            <div class="totalLikes"> ${totalLikeCount} 
            <i class="fa-sharp fa-solid fa-heart"></i>
            </div>
            
          `;

  return blocPhotographer;
}

function manageLikes() {
  const btnLikes = document.getElementsByClassName("favorite");
  console.log(btnLikes);
  for (let btnLike of btnLikes)
  {
    btnLike.addEventListener("click",incrementLike)
  }
  
}
 function incrementLike(event) {
  let parentElement = event.target.parentNode;
  let likeElement = parentElement.firstElementChild;
  let likeNumber = parseInt(likeElement.textContent);
  let HeartEmpty = likeElement.nextElementSibling;
  let HeartNotEmpty = HeartEmpty.nextElementSibling;
  
  if (parentElement.classList.contains('liked')) {
    likeNumber -= 1;
    likeElement.innerText = likeNumber;
    console.log(likeNumber -= 1);
  }
   else {
    likeNumber += 1;
    likeElement.innerText = likeNumber;
  }
  parentElement.classList.toggle('liked');
  
}


  // récupération de nobre total par id et ajouter +1
 