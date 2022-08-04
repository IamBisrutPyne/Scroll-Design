"use strict";

var slideshow = document.querySelector('.slideshow');
setInterval(function () {
  var firstIcon = slideshow.firstElementChild;
  firstIcon.classList.add('faded-out');
  var thirdIcon = slideshow.children[3];
  thirdIcon.classList.add('light');
  thirdIcon.previousElementSibling.classList.remove('light');
  setTimeout(function () {
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
    setTimeout(function () {
      firstIcon.classList.remove('faded-out');
    }, 500);
  }, 500);
}, 1500);