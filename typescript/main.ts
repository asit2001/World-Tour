// const sliders = document.querySelectorAll<HTMLDivElement>(".slider")!;

// var i = 0;
// const interval = setInterval(() => {
//     changeImages()
//     i++;
// }, 5000);
const menu = document.querySelector(".menu")! as HTMLDivElement;
const sideBar = document.querySelector(".side-bar")! as HTMLDivElement;
const x = document.querySelector(".x")! as HTMLElement;
menu.addEventListener("click",()=>{
    sideBar.style.transform = "translateX(0)";
})
x.addEventListener("click",()=>{
    sideBar.style.transform = "translateX(100%)";
})