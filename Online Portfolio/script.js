// When the user scrolls the page, execute checkNavBar
window.onscroll = function() {CheckNavBar()};

// Get the navbar
var navBar = document.getElementById("NavBar");
//console.log(document.getElementById("NavBar"));
// Get the offset position of the navbar
var sticky = navBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function CheckNavBar() {
  // console.log(window.pageYOffset + " " + sticky);
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}
