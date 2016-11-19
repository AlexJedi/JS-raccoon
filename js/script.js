'use strict';

function readyScroll() {
  window.scrollTo(0 , document.body.scrollHeight);
  document.body.style.overflow = 'hidden';
}

function getCoordY(elem) {
  let box = elem.getBoundingClientRect();
  return box.top + pageYOffset;
}

function levelScroll() {
  let lvl = document.getElementsById('firstlvl');
  window.scrollTo(0 , getCoordY(lvl));
}

function startFirstLevel() {
  levelScroll();
}

document.addEventListener('DOMContentLoaded', readyScroll);

let playBtn = document.getElementById('js-play');
playBtn.addEventListener('click', startFirstLevel);
