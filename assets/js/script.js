const headerTop = document.querySelector(".header_top");
// const navLinks = document.getElementsByClassName("nav_links");
const navBar = document.querySelector(".nav_links");
console.log(navBar);

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 125) {
    headerTop.classList.add("scroll_nav");
    navBar.classList.add("scroll_links");
  } else {
    headerTop.classList.remove("scroll_nav");
    navBar.classList.remove("scroll_links");
  }
});
