// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the objects
var navbar = document.getElementById("navbar");
var infoText = document.getElementById("info-text");
var docText = document.getElementById("doc-text");
var downloadText = document.getElementById("download-text");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the objects when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    infoText.classList.add("sticky-text");
    docText.classList.add("sticky-text");
    downloadText.classList.add("sticky-text");
  } else {
    navbar.classList.remove("sticky");
    infoText.classList.remove("sticky-text");
    docText.classList.remove("sticky-text");
    downloadText.classList.remove("sticky-text");
  }
} 