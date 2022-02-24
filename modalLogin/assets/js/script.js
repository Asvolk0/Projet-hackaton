//----------PAGE ADMIN-------------//

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtnModal");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {//ouvre la modal quand on clique sur le bouton
    modal.style.display = "block";
}
span.onclick = function() {//ferme la modal quand on clique sur la croix
    modal.style.display = "none";
}
window.onclick = function(event) {//on peut fermer la modal en cliquant n'importe ou sur l'écran
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let valid = document.getElementById("validModal");
let btnValid = document.getElementById("myBtnValidation");
let closed = document.getElementsByClassName("closeModif")[0];

btnValid.onclick = function() {//ouvre la modal quand onn clique sur le bouton
    valid.style.display = "block";
}

closed.onclick = function() {//ferme la modal quand on clique sur la croix
    valid.style.display = "none";
}
//CREE UN CONFLIT DU WINDOW CLICK 
/*window.onclick = function(event) {//on peut fermer la modal en cliquant n'importe ou sur l'écran
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
//-------------------FIN PAGE ADMIN--------------------//
//--------------MODAL ADHESION----------------------//

/*let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtnModal");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {//ouvre la modal quand on clique sur le bouton
    modal.style.display = "block";
}
span.onclick = function() {//ferme la modal quand on clique sur la croix
    modal.style.display = "none";
}
window.onclick = function(event) {//on peut fermer la modal en cliquant n'importe ou sur l'écran
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
