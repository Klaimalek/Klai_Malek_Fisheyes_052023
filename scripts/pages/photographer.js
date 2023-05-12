//récupérer l'ID du photographe pour charger les données des photographers

function urlGetParams(url) {
    let resultat = url.search;
    return resultat.substring(4);
  }
  const idPhotoghrapher = urlGetParams(document.location);
  console.log(idPhotoghrapher);

  const informationPhotographer = document.querySelectorAll('photograph-header');

  async function setData() {
    let response = await fetch("../data/photographers.json");
    if (!response.ok) {
      return "error";
    }
    let data = await response.json();
  
    let photographer = data.photographers.find((element) => element.id == idPhotoghrapher);
    let media = data.media.filter((m) => m.photographerId == idPhotoghrapher);
  
    setDataInHtml(photographer);
    console.log(media);
  }
  setData();

  function setDataInHtml(photographer, media) {
    setProfilHeader(photographer);
   
  }
  //Mettre info dans la presentation du photographe
function setProfilHeader(photographer) {

  document.getElementById("namePhotographer").innerText = photographer.name;
  document.getElementById(
    "photohrapherLocation"
  ).innerText = `${photographer.city}, ${photographer.country}`;
  document.getElementById("photographerTagligne").innerText = photographer.tagline;

  document.getElementById(
    "photographerImg"
  ).src = `assets/photographers/${photographer.portrait}`;
}