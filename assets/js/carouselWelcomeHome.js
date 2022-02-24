let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

// prend le nombre de slider
let nbr__img = img__slider.length;

function removeActiveImages() {
    // fonction qui supprime la class "active"
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}

// peut etre ajouté :
// toute les x centième de seconde : image scroll automatiquement 
// ajoute une unité à étape
// si la variable étape est suppérieur ou égale au nombre d'image alors mettre étape à 0 pour revenir au début
// active la fonction qui supprime la class "active"
// ajoute la class "active" à l'image qui vient de scoll 

setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    removeActiveImages();
    img__slider[etape].classList.add('active');
}, 6000);
//      ^
//      |
// sert à indiquer le nombre de centieme de seconde à attendre avant que la fonction s'enclenche





const articleContainer = document.getElementsByClassName('articleContainer');

let nb_carousel = 0;

// prend le nombre de slider
let nb__img = articleContainer.length;

const precedent = document.querySelector('.arrowCardCarouselLeft');
const suivant = document.querySelector('.arrowCardCarouselRight');

function enleverActiveImagesCard() {
    // fonction qui supprime la class "active"
    for(let i = 0 ; i < nb__img ; i++) {
        articleContainer[i].classList.remove('cardActive');
    }
}

// écoute un clique sur la variable suivant
suivant.addEventListener('click', function() {
    // ajoute une unité à la varible étape
    nb_carousel++;

    //si étape dépasse le nombre d'image alors on revient à létape 0, soit la premiere image
    if(nb_carousel >= nb__img) {
        nb_carousel = 0;
    }

    // activation de la fonction qui supprime la class "active"
    enleverActiveImagesCard();

    //ajoute la class "active" à l'image suivante au clique du bouton
    articleContainer[nb_carousel].classList.add('cardActive');
})


//écoute un clique sur la variable précédent 
precedent.addEventListener('click', function() {

    // supprime une unité à la variable étape
    nb_carousel--;

    // si la variable étape est inférieur à 0, alors étape prend la valeur du nombre d'image et supprime une unité
    if(nb_carousel < 0) {
        nb_carousel = nb__img - 1;
    }

    // fonction qui supprime la class "active"
    enleverActiveImagesCard();

    // ajoute la class "active" lors du clique du bouton précédent
    articleContainer[nb_carousel].classList.add('cardActive');
})