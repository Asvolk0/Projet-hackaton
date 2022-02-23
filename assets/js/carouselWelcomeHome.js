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
}, 6000)
//      ^
//      |
// sert à indiquer le nombre de centieme de seconde à attendre avant que la fonction s'enclenche