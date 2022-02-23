const img__slider = document.getElementsByClassName('articleContainer');

let etape = 0;

// prend le nombre de slider
let nbr__img = img__slider.length;

const precedent = document.querySelector('.arrowCardCarouselLeft');
const suivant = document.querySelector('.arrowCardCarouselRight');

function enleverActiveImages() {
    // fonction qui supprime la class "active"
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('cardActive');
    }
}

// écoute un clique sur la variable suivant
suivant.addEventListener('click', function() {
    // ajoute une unité à la varible étape
    etape++;

    //si étape dépasse le nombre d'image alors on revient à létape 0, soit la premiere image
    if(etape >= nbr__img) {
        etape = 0;
    }

    // activation de la fonction qui supprime la class "active"
    enleverActiveImages();

    //ajoute la class "active" à l'image suivante au clique du bouton
    img__slider[etape].classList.add('cardActive');
})


//écoute un clique sur la variable précédent 
precedent.addEventListener('click', function() {

    // supprime une unité à la variable étape
    etape--;

    // si la variable étape est inférieur à 0, alors étape prend la valeur du nombre d'image et supprime une unité
    if(etape < 0) {
        etape = nbr__img - 1;
    }

    // fonction qui supprime la class "active"
    enleverActiveImages();

    // ajoute la class "active" lors du clique du bouton précédent
    img__slider[etape].classList.add('cardActive');
})