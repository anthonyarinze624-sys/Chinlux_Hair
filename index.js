// Mobile Navigation Toggle

const nav = document.querySelector("nav ul");
const menuBtn = document.createElement("div");

menuBtn.className = "Menu-btn";
menuBtn.innerHTML = "=_";

document.querySelector("nav").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click" function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

//Product Button Animation
const button = document.querySelectorAll(".card button");
button.forEach(button => {
    button.addEventListener("click", () => {
        button.innerHTML = "* Added to Cart";

        button.computedStyleMap.background = "#4CAF50";
        button.computedStyleMap.color = "#000";
    
    });
});

// Scroll Animation

const cards = document.querySelectorAll(".card");
function revealCards() {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            card.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealCards);
revealCards();

// Hero Text Animation
const heroTitle = document.querySelector(".hero h1");
const text = heroTitle.innerText;
heroTitle.innerHTML = "";
let index = 0;
function typingEffect(){
    if(index < text.length){
        heroTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 60);
    }
}

typingEffect();

// Floating Animation for Product Cards
cards.forEach((card, i) => {
    card.computedStyleMap.animation = 'floatCard 4s ease-in-out ${i * 0.3}s infinite';
});

// Navbar Background Change on Scroll 
window.addEventListener("scroll", () => {
    const Navbar = document.querySelector("nav");
    if(window.scrollY > 100){
        Navbar.style.background = "#000";
        Navbar.style.boxShadow = "0 5px 20px rgba(255, 215, 0, .3)";    
    }else{
        Navbar.style.background = "rgba(0, 0, 0, .7)";
        Navbar.style.boxShadow = "none";
    }
});

let cart = 0;
const cartCount = document.getElementById("cart-count");
document.querySelectorAll(".card button").forEach(button=>{
    button.addEventListener("click", ()=>{
        cart++;
        cartCount.textContent = cart;
    });
});

const toogle = document.getElementById("theme-toggle");
toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        innerHTML="☀️";
    }else{
        toggle.innerHTML="🌙";
    }
});