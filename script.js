// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add('active'); 
   })
}

if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove('active'); 
   })
}

var typed = new Typed(".typing", {
   strings: ["On all products"],
   typeSpeed: 50,
   backSpeed: 60,
   loop: true
})

//Sproduct
function changeImg(img) {
    MainImg.src = img.src;
}


// Get the button
var scrollTopButton = document.getElementById("scroll-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});









