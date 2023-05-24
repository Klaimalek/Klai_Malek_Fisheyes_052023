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
                    <button class="favorite"  onclick="incrementLikes(this)"> ${data.likes}
                    <i class="fa-regular fa-heart" id="heart-vide" aria-label="likes"></i>
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
  let allLikes = 0;
  let classList = event.classList;
  let favoriteContainer = classList.contains("favorite") ? event : event.parentNode;
  let likeNumber =favoriteContainer.firstElementChild;
  let like = document.getElementById("heart");
  let dislike = document.getElementById("heart-vide");
  
 }

