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

const images = [
    'img/lenin-estrada-OI1ToozsKBw-unsplash.jpg',
    'img/kenny-eliason-38XhGPwzI3U-unsplash.jpg'
]
  

const bubblelist = document.querySelectorAll(".om_mig_bubblor")
if (bubblelist) {
    for (let i = 0; i < bubblelist.length; i++) {
        const text = bubblelist[i].getAttribute("data-text")
        bubblelist[i].addEventListener("click", () => showPopup(text))
    }
}
function showPopup(text) {
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }
    let popup = document.createElement('div')
    popup.classList.add('popup')

    popup.innerHTML = 
    `<p>${text}</p>
    
    <button class="close-popup">Close</button>`

    document.body.appendChild(popup)
    popup.querySelector('.close-popup').addEventListener('click', () => {
        popup.remove()
    })
}

let currentIndex = 0
const slideshow = document.getElementById('slideshow')
if (slideshow) {
    slideshow.addEventListener("click", nextimg)
}
    
function nextimg(){
    currentIndex = (currentIndex + 1) % images.length
    slideshow.src = images[currentIndex]
}
