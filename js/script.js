'use strict';

function readyScroll() {
    window.scrollTo(0, document.body.scrollHeight);
    document.body.style.overflow = 'hidden';
}

function getCoordY(elem) {
    let box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}

function levelScroll() {
    let lvl = document.getElementById('firstlvl');
    window.scrollTo(0, getCoordY(lvl));
}

function addClick(elementId, func) {
    let elem = document.getElementById(elementId);
    elem.addEventListener('click', func);
}

function startFirstLevel() {
    levelScroll();
}

document.addEventListener('DOMContentLoaded', readyScroll);

addClick('js-play', startFirstLevel);
addClick('js-back', readyScroll);

let timeCounter = document.getElementById('js-time'),
    timeCounterBlock = timeCounter.parentElement;

function clearField() {
    let timer = 2,
        timerId = setInterval(function() {
            timeCounter.innerHTML = timer;
            if (timer == -1) {
              clearInterval(timerId);
              timeCounterBlock.style.display = 'none';
            }
            timer--;
        }, 700);
}
clearField();

let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
