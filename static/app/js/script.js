headerLinks = document.getElementById("header-links")
headerWrap = document.querySelector("#header-wrap")
// headerLinks.remove()

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = headerLinks.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {

    headerLinks.classList.add("hidden")
    headerWrap.classList.remove("header-wrap-main")
    navbar.classList.add("header-scrolled")
    headerLinks.remove()
} else {
    navbar.appendChild(headerLinks)
    headerWrap.classList.add("header-wrap-main")
    headerLinks.classList.remove("hidden");
    navbar.classList.remove("header-scrolled")
  }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 4000,
    effect: 'slide',
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
      delay: 0,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });