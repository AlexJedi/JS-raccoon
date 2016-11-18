'use strict';

function readyScroll() {
  window.scrollTo(0 , document.body.scrollHeight);
  document.body.style.overflow = 'hidden';
}

function startFirstLevel() {
  window.scrollBy(0, - document.body.clientHeight);
}

document.addEventListener('DOMContentLoaded', readyScroll);

let playBtn = document.getElementsByClassName('js-play');
playBtn.addEventListener('click', startFirstLevel);
