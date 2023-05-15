
const galleryMedia = document.querySelector("#profil__media");

//récupérer l'ID du photographe pour charger les données des photographers

function urlGetParams(url) {
    let resultat = url.search;
    return resultat.substring(4);
  }
  const idPhotoghrapher = urlGetParams(document.location);
  console.log(idPhotoghrapher);
   
  
  const informationPhotographer = document.querySelectorAll('photograph-header');
  
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
  // display les données poor le photographer et media
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

// display les medias

function setMedia(media) {
  media.forEach((element) => {
    let media = mediaFactory(element);
    let article = media.getCardMedia();
    galleryMedia.innerHTML += article;
  });
  listMedia = document.querySelectorAll("#profil__media li");
}
 
// création de l'article media html
function mediaFactory(data) {
  let type = data.video ? "video" : "image";

  function getCardMedia() {
    let element;
    if (type == "image") {
      element = `<img class="img_Media" src=assets/media/${data.photographerId}/${data.image} alt="${data.title}" data-id=${data.id}></img>`;
    } else if (type == "video") {
      element = `<video class="video_Media" src=assets/media/${data.photographerId}/${data.video}#t=0.1 alt="${data.title}" data-id=${data.id} preload="metadata"></video>`;
      
    }

    const articleMedia = `
              <article class="media" >
                <a href="#" class="media__link" >
                  ${element}
                </a>
                <div class="infoMedia">
                  <h3 class= "titleMedia">${data.title}</h3>
                 <div class="favorite"> ${data.likes}</div>

                </div>
              </article>
            `;
    return articleMedia;
  }
  return { type, getCardMedia}; 
}




