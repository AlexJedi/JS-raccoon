'use strict';

let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

let raccon = new Image();
raccon.onload = function() {
    startGame();
};
raccon.src = 'css/img/raccoon.png';
