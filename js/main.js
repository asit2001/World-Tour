"use strict";
const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".side-bar");
const x = document.querySelector(".x");
const container = document.querySelector(".blur");
menu.addEventListener("click", () => {
    sideBar.style.transform = "translateX(0)";
    menu.style.display = "none";
});
x.addEventListener("click", () => {
    sideBar.style.transform = "translateX(100%)";
    menu.style.display = "block";
});
