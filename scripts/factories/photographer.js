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
        const targlinePhotographer = document.createElement("p");
        targlinePhotographer.setAttribute("aria-label","slogan-photograpger")
        targlinePhotographer.setAttribute("class","tagline");
        const priceDay = document.createElement('p');
        priceDay.setAttribute("aria-label","price-day-photographer");
        priceDay.setAttribute("class","priceDay");
        h2.textContent = name;
        location .textContent = PhotographerLocation;
        targlinePhotographer.textContent = tagline;
        priceDay. textContent = pricePhotoghrapher;
        article.appendChild(img);
        article.appendChild(h2);
        description.appendChild(location);
        description.appendChild(targlinePhotographer);
        description.appendChild(priceDay);
        article.appendChild(description);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}