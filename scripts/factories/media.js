
  function mediaFactory(data) {
    let type = data.video ? 'video' : 'image';
  
    function getCardMedia() {
      let element;
      if (type == 'image') {
        element = `<img class="img_Media" src=assets/media/${data.photographerId}/${data.image} alt="${data.title}" data-id=${data.id}></img>`;
      } else if (type == 'video') {
        element = `<video class="video_Media" preload="metadata" data-id='${data.id}'>
        <source src= "assets/media/${data.photographerId}/${data.video}#t=0.1" >
        </video>`;
      }
  
      const articleMedia = `
                <article class="media" >
                  <a href="#" class="media__link" >
                    ${element}
                  </a>
                  <div class="infoMedia">
                    <h3 class= "titleMedia">${data.title}</h3>
                    <button class="favorite liked"  onclick="incrementLikes(this)"> 
                    <span id="${data.id}" class="number"> ${data.likes}</span>
                    <i class="fa-regular fa-heart" id="heartVide" aria-label="dislike"></i>
                    <i class="fa-solid fa-heart" id="heart" aria-label="likes"></i>
                   </button>
                  </div>
                </article>
              `;
      return articleMedia;
    }

   
    return { type, getCardMedia };
  }


  // -----------------fonction incrémentation de likes----------
 function incrementLikes(event){
  let classList = event.classList;
console.log(classList );
  let favoriteContainer = classList.contains("favorite") ? event : event.parentNode;
 // console.log(favoriteContainer ); //récupérer le button favorite avec les deux icons
  let likeElementNumber =favoriteContainer.firstElementChild;// réupérer le nombre de likes
  //console.log(likeElementNumber );
  let heartEmpty = likeElementNumber.nextElementSibling; // récupérer l'icon du coeur vide
  let heart = heartEmpty.nextElementSibling;
  
 let likeNumber = parseInt (likeElementNumber.textContent);
 //console.log(likeNumber);
  if(favoriteContainer.classList.contains("liked")){
     likeNumber +=1;
     likeElementNumber.innerText = likeNumber; 
     heartEmpty.style.display = "none";
     heart.style.visibility ="visible";
    }
    else{
      likeNumber -=1;
      likeElementNumber.innerText = likeNumber; 
      heartEmpty.style.display = "visible";
      heart.style.visibility ="none";
    }
    favoriteContainer.classList.toggle("liked");
 }