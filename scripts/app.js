//slide out menu
const menuButton = document.getElementById("menuButton");
const slideOutNav = document.getElementById("slideOutNav");
const menuClose = document.getElementById("menuClose");

const showSlideOutNav = () => slideOutNav.style.left = "0px";
const hideSlideOutNav = () => slideOutNav.style.left = "-506px";


menuButton.addEventListener("click", showSlideOutNav);
menuClose.addEventListener("click", hideSlideOutNav);

// prompt email on page load

const email = prompt("Subscribe Now and Receive 10% OFF");
