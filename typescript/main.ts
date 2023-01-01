// const sliders = document.querySelectorAll<HTMLDivElement>(".slider")!;

// var i = 0;
// const interval = setInterval(() => {
//     changeImages()
//     i++;
// }, 5000);
const menu = document.querySelector(".menu span")! as HTMLDivElement;
const sideBar = document.querySelector(".side-bar")! as HTMLDivElement;
const x = document.querySelector(".x")! as HTMLElement;
const container = document.querySelector<HTMLDivElement>(".blur")!;
const btn = document.querySelector<HTMLButtonElement>("button")!;
const form = document.querySelector<HTMLFormElement>("form");
const logInSignUpFrom = document.querySelectorAll<HTMLFormElement>(".sign")!;
const signUp = document.querySelector<HTMLAnchorElement>("#signUp")!;
const logIn = document.querySelector<HTMLAnchorElement>("#logIn")!;

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
logIn.addEventListener("click",(e)=>{
    e.preventDefault();
    logInSignUpFrom[0].style.display = "none";
    logInSignUpFrom[1].style.display = "flex";
})
signUp.addEventListener("click",(e)=>{
    e.preventDefault();
    logInSignUpFrom[1].style.display = "none";
    logInSignUpFrom[0].style.display = "flex";
})