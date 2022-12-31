"use strict";
const menu = document.querySelector(".menu span");
const sideBar = document.querySelector(".side-bar");
const x = document.querySelector(".x");
const container = document.querySelector(".blur");
const btn = document.querySelector("button");
const form = document.querySelector("form");
menu.addEventListener("click", () => {
    sideBar.style.transform = "translateX(0)";
    menu.style.display = "none";
});
x.addEventListener("click", () => {
    sideBar.style.transform = "translateX(100%)";
    menu.style.display = "block";
});
btn.addEventListener("click", (e) => {
    e.preventDefault();
    form?.reset();
});
