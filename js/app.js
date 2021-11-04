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
 //toggle button
 $('.side-btn').click(function () {
  $('.side-nav-links').slideToggle(900);
  $('.side-btn').toggleClass('change');
 })

})