const $ = document.querySelector.bind(document);
const menuButton = document.getElementById("categoriesMenu");
const hamburguerMenu = document.getElementById("hamburguerMenu");
const closeButton = document.getElementById("closeButton");
const form = $(".loginMenu");
const formLogin = document.querySelector(".login--utilities");
const formLoginClose = $(".formLogin--close");

menuButton.addEventListener("click", () => {
    hamburguerMenu.classList.remove("d-none");
    blur();
})
closeButton.addEventListener("click", () => {
    hamburguerMenu.classList.add("d-none");
    removeBlur();
})
formLogin.addEventListener("click", () => {
    form.classList.remove("display-none");
    blur();
})
formLoginClose.addEventListener("click", () => {
    form.classList.add("display-none");
    removeBlur();
})

function blur(){
    $(".header").classList.add("blur");
    $(".container").classList.add("blur");
    $(".nav--header").classList.add("blur");
}
function removeBlur(){
    $(".header").classList.remove("blur");
    $(".container").classList.remove("blur");
    $(".nav--header").classList.remove("blur");
}