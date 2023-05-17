//Récupération des éléments

const btnContact = document.getElementsByClassName('contact_button');
const modal = document.getElementById("contact_modal");


// launch modal event
btnContact[0].addEventListener('click', launchModal);

// launch modal form
function launchModal() {
    modal .style.display = 'block';
}

/*function displayModal() {
    const modal = document.getElementById("contact_modal");
     modal.style.display = "block";
    
}*/

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
