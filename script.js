const buttonBc =document.querySelector(".btn-bc")
const buttonTitle =document.querySelector("#btn-title")
const buttonCir =document.querySelector("#btn-circles")
const body =document.querySelector("body")
const mainTitle =document.querySelector("#main-title")


console.log({buttonBc,buttonTitle,buttonCir})

buttonBc.addEventListener('click',()=>{
    body.style.backgroundColor = "green";
})

buttonTitle.addEventListener('click',()=>{
    mainTitle.textContent = "I am hungry!"
})

buttonCir.addEventListener('click',()=>{
    const circle =document.createElement('div');
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "100%";
    circle.style.border = "1px black solid";
    body.append(circle);
})