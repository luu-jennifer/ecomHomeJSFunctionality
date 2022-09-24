const menuIcon = document.getElementsByClassName("menuIcon");
// const slideOutNav = document.getElementsByClassName("slideOutNav");



document.getElementsByClassName("menuIcon").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}