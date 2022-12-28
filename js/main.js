"use strict";
const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".side-bar");
const x = document.querySelector(".x");
menu.addEventListener("click", () => {
    sideBar.style.transform = "translateX(0)";
});
x.addEventListener("click", () => {
    sideBar.style.transform = "translateX(100%)";
});
