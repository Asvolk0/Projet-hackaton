const verticalNav = document.querySelector('.verticalNav');
const menuBurger = document.getElementById('menuBurger');

function menuBurgerAddEventListener(){
    menuBurger.classList.toggle('menuBurgerAction');
    verticalNav.classList.toggle('verticalNavAction');
}

menuBurger.addEventListener('click', menuBurgerAddEventListener);

if(window > '950px'){
    verticalNav.classList.remove('verticalNavAction');
}