let modalLogin = document.getElementById("modalKez");
let btn = document.getElementById("loginModal");
let span = document.getElementsByClassName("moClose")[0];
btn.onclick = function() {//ouvre la modal quand on clique sur le bouton
    modalLogin.style.display = "block";
}
span.onclick = function() {//ferme la modal quand on clique sur la croix
    modalLogin.style.display = "none";
}
window.onclick = function(event) {//on peut fermer la modal en cliquant n'importe ou sur l'écran
    if (event.target == modalLogin) {
        modalLogin.style.display = "none";
    }
}
