function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price  } = data;

    const picture = `assets/photographers/${portrait}`;
    const pricePhotoghrapher = `${price}€/jour`;
    const PhotographerLocation = `${city}, ${country}`;
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt",name)
        const h2 = document.createElement( 'h2' );
        h2.setAttribute("class","namePhotographer");
        const description = document.createElement('div');
        description.setAttribute('aria-label',"Information-Photographer");
        description.setAttribute('class',"CardPhotographer");
        const location = document.createElement('p');
        location.setAttribute("aria-label","locationPhotographer");
        location.setAttribute("class","location");
        const sentanceTagline = document.createElement('p');
        sentanceTagline.setAttribute("aria-label","taglinePhotographer");
        sentanceTagline.setAttribute("class","tagline");
        const priceDay = document.createElement('p');
        priceDay.setAttribute("aria-label","price-day-photographer");
        priceDay.setAttribute("class","priceDay");
        h2.textContent = name;
        location .textContent = PhotographerLocation;
        description.textContent = tagline ;
        priceDay. textContent = pricePhotoghrapher;
        article.appendChild(img);
        article.appendChild(h2);
        description.appendChild(location);
        description.appendChild(sentanceTagline);
        description.appendChild(priceDay);
        article.appendChild(description);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}