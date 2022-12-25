"use strict";
const sliders = document.querySelectorAll(".slider");
var i = 0;
const interval = setInterval(() => {
    changeImages();
    i++;
}, 5000);
const changeImages = () => {
    // reset out of Bound in positive integer
    i >= sliders.length ? i = 0 : i;
    // reset out of Bound in negative integer
    i < 0 ? i = sliders.length - 1 : i;
    // hide all slider images;
    sliders.forEach(el => {
        el.style.display = "none";
    });
    sliders[i].style.display = "block";
    sliders[i].style.backgroundColor = "#717171";
};
const changeSlider = (n) => {
    i += n;
    changeImages();
};
