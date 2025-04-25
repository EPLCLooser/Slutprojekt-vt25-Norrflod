let menuButton = document.querySelector(".menu-button")
let closeButton = document.querySelector(".close-button")
let layer = document.querySelector(".fade-layer")

menuButton.addEventListener("click",showMenu)
closeButton.addEventListener("click",showMenu)
layer.addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector(".menu")
    let layer = document.querySelector(".fade-layer")

    menu.classList.toggle("show")
    layer.classList.toggle("visible")
}