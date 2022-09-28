//function programming
// app.init = () => {
    // function for slide out

    // function for modal
// };
//slide out menu
const menuButton = document.getElementById("menuButton");
const slideOutNav = document.getElementById("slideOutNav");
const menuClose = document.getElementById("menuClose");

const showSlideOutNav = () => slideOutNav.style.left = "0px";
const hideSlideOutNav = () => slideOutNav.style.left = "-506px";


menuButton.addEventListener("click", showSlideOutNav);
menuClose.addEventListener("click", hideSlideOutNav);

// prompt email on page load
// const email = prompt("Subscribe Now and Receive 10% OFF");

// modal pop up subscribe to save when shop all is clicked
  //create variables for Shop All, modalOverlay, closeBtn
  const shopAllBtn = document.querySelector("#shopAllBtn");
  const modal = document.querySelector(".modalOverlay");
  const closeBtn = document.querySelector(".closeBtn");
  // add click event listener for Shop All and closeBtn
  // when user clicks on Shop All, show modalOverlay by adding class openModal
  // when user clicks on closeBtn, remove class openModal
  const openModal = () => modal.classList.add("openModal");
  const closeModal = () => modal.classList.remove("openModal");
  shopAllBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);



// initiate app by calling function
// app.init();
