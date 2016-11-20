'use strict';

let requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function animate(draw, duration) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timePassed = time - start;
        if (timePassed > duration) timePassed = duration;
        draw(timePassed);
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }
    });
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

let raccoon = document.getElementById('js-raccoon');

animate(function(timePassed) {
    raccoon.style.bottom = -30 + timePassed / 100 + '%';
}, 4000);

raccoon.onmousedown = function(e) {

    let coords = getCoords(raccoon),
        shiftX = e.pageX - coords.left,
        shiftY = e.pageY - coords.top;

    function moveAt(e) {
        raccoon.style.left = e.pageX - shiftX + 'px';
        raccoon.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    raccoon.onmouseup = function() {
        document.onmousemove = null;
        raccoon.onmouseup = null;
    };

}

raccoon.ondragstart = function() {
    return false;
};
