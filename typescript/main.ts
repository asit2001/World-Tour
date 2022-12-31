// const sliders = document.querySelectorAll<HTMLDivElement>(".slider")!;

// var i = 0;
// const interval = setInterval(() => {
//     changeImages()
//     i++;
// }, 5000);
const menu = document.querySelector(".menu")! as HTMLDivElement;
const sideBar = document.querySelector(".side-bar")! as HTMLDivElement;
const x = document.querySelector(".x")! as HTMLElement;
const container = document.querySelector<HTMLDivElement>(".blur")!;
const btn = document.querySelector<HTMLButtonElement>("button")!;
const form = document.querySelector<HTMLFormElement>("form");
menu.addEventListener("click",()=>{
    sideBar.style.transform = "translateX(0)";
    menu.style.display = "none";
})
x.addEventListener("click",()=>{
    sideBar.style.transform = "translateX(100%)";
    menu.style.display = "block";
})
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    form?.reset();
});