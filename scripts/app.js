const menuButton = document.getElementById("menuButton");
const slideOutNav = document.getElementById("slideOutNav");
const menuClose = document.getElementById("menuClose");

const showSlideOutNav = () => slideOutNav.style.left = "0px";
const hideSlideOutNav = () => slideOutNav.style.left = "-506px";


menuButton.addEventListener("click", showSlideOutNav);
menuClose.addEventListener("click", hideSlideOutNav);