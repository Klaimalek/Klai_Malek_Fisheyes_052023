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
                   <div class="favorite"> ${data.likes}</div>
  
                  </div>
                </article>
              `;
      return articleMedia;
    }
    return { type, getCardMedia };
  }
