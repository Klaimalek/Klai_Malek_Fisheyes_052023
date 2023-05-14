
const profilMedia = document.querySelector("#profil__media");

//récupérer l'ID du photographe pour charger les données des photographers

function urlGetParams(url) {
    let resultat = url.search;
    return resultat.substring(4);
  }
  const idPhotoghrapher = urlGetParams(document.location);
  console.log(idPhotoghrapher);
   
  
  const informationPhotographer = document.querySelectorAll('photograph-header');
  const galleryMedia = document.querySelectorAll('photographerMedia');
  //obtenir les données
  async function setDataProfil() {
    let response = await fetch("../data/photographers.json");
    if (!response.ok) {
      return "error";
    }
    let data = await response.json();
  
    let photographer = data.photographers.find((element) => element.id == idPhotoghrapher);
    let media = data.media.filter((m) => m.photographerId == idPhotoghrapher);
  
    setDataElement(photographer,media);

    console.log(media);
  }
  setDataProfil();
  // display les données poue le photographer
  function setDataElement(photographer,media) {
    setProfilPhotgrapher(photographer);
     setMedia(media);
  }
  //Mettre info dans la presentation du photographe
function  setProfilPhotgrapher(photographer) {

  document.getElementById("namePhotographer").innerText = photographer.name;
  document.getElementById(
    "photohrapherLocation"
  ).innerText = `${photographer.city}, ${photographer.country}`;
  document.getElementById("photographerTagligne").innerText = photographer.tagline;

  document.getElementById(
    "photographerImg"
  ).src = `assets/photographers/${photographer.portrait}`;
}

function setMedia(media) {
  media.forEach((element) => {
    let media = mediaFactory(element);
    let li = media.createElement();
    profilMedia.innerHTML += li;
  });
  listMedia = document.querySelectorAll("#profil__media li");
}
 

function mediaFactory(data) {
  let type = data.video ? "video" : "image";

  function createElement() {
    let element;
    if (type == "image") {
      element = `<img src=assets/media/${data.photographerId}/${data.image} alt="${data.title}" data-id=${data.id}></img>`;
    } else if (type == "video") {
      element = `<video src=assets/media/${data.photographerId}/${data.video}#t=0.1 alt="${data.title}" data-id=${data.id} preload="metadata"></video>`;
      //#t=0.1 et preload="metadata" pour que l'image de la video s'affiche sur safari
    }

    const li = `
              <li class="media" data-date=${data.date} data-likes=${data.likes} data-title=${data.title}>
                <a href="#" class="media__link" >
                  ${element}
                </a>
                <div class="media__info">
                  <p>${data.title}</p>
                  <button class="like" >
                    <p>${data.likes}</p>
                    <img src="assets/icons/heart-vide.svg" id="coeurVide" alt="coeur-vide"/> 
                    <img src="assets/icons/heart.svg" id="coeur" alt="coeur"/>   
                  </button>
                </div>
              </li>
            `;
    return li;
  }
  return { type, createElement };
}

console.log("ok");


