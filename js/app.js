/* PreLoader */

// constructor function
function UI() {};
// hide preloader
UI.prototype.hidePreloader = function () {
 const preloader = document.querySelector('.preloader');
 preloader.style.display = 'none';
};
// event listener function
function eventListener() {
 const ui = new UI();

 // hide preloader
 window.addEventListener('load', function () {
  ui.hidePreloader();
 });
};
// call event Listener
eventListener();

// ..........................................................
// ..........................................................
// ..........................................................

// jQuery-functionality
$(document).ready(function () {
 //side btn
 $('.side-btn').click(function () {
  $('.side-nav-links').slideToggle(900);
  $('.side-btn').toggleClass('change');
 })

 // nav btn
 $('.nav-btn').click(function () {
  $('.side-nav').toggleClass('margin');
  $('.nav-btn').toggleClass('change');
  $('main').toggleClass('max-width');
 })

 // owl team
 $('.songs-center').owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  nav: true,
  responsive: {
   0: {
    items: 1
   },
   600: {
    items: 3
   },
   1000: {
    items: 4
   }
  }
 })

})