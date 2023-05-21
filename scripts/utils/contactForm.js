//Récupération des éléments

const btnContact = document.getElementsByClassName('contact_button');
const modal = document.getElementById("contact_modal");
const nameInputEvent =  document.getElementById("first");
 const lastNameEvent= document.getElementById("lastName");
 const mailEvent = document.getElementById("mail");
 const commit = document.getElementById("comment");
const messageErreur = document.getElementById('errorLastname"');
// launch modal event
btnContact[0].addEventListener('click', launchModal);

// launch modal form
function launchModal() {
    modal .style.display = 'block';
}

function closeModal() {
    modal.style.display = "none";
}

// ------------ element pour l'envoi du formulaire ------------------------
const form = document.querySelector('form[name="reserve"]');

// ---------------------Validation du prénom--------------------------------

nameValue="";
lastNameValue="";
mailValue="";
commitValue="";
// /---------------------------------------------------
nameInputEvent.addEventListener("input", (e) => {
    nameValue = e.target.value;
    console.log(e.target.value);
  })

lastNameEvent.addEventListener("input", (e) => {
    lastNameValue = e.target.value;
    console.log(e.target.value);
  })
  mailEvent.addEventListener("input", (e) => {
    mailValue = e.target.value;
    console.log(e.target.value);
  })
  commit.addEventListener("input", (e) => {
    commitValue = e.target.value;
    console.log(e.target.value);
  });



  //*************** Validation de formulaire**********************
const validation = function () {
    if (nameValue == "")                                  
    { 
        alert("Mettez votre prénom."); 
        nameInputEvent.focus(); 
        return false; 
    }    
    if (lastNameValue== "")                               
    { 
        alert("Mettez votre nom."); 
        lastNameEvent.focus(); 
        return false; 
    }        
    if (mailValue.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        mailEvent.focus(); 
        return false; 
    }    
    if (mailValue.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
    mailEvent.focus(); 
        return false; 
    }    
    if (mailValue.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        mailEvent.focus(); 
        return false; 
    }    
       
    if (commitValue == "")                  
    { 
        alert("Écrivez un commentaire."); 
        commit.focus(); 
        return false; 
    } 
    
    alert ('gooooooooooooooooood');
    return true; 

}
// -----------------------envoi de formulaire-------------------------------------------

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validation();
  });