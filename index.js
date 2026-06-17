// Mobile Navigation Toggle

const nav = document.querySelector("nav ul");

const menuBtn = document.createElement("div");

menuBtn.className = "menu-btn";
menuBtn.innerHTML = "☰";

document.querySelector("nav").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Product Button Animation

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "✓ Added to Cart";

        button.style.background = "#4CAF50";
        button.style.color = "#fff";

        setTimeout(() => {

            button.innerHTML = "Order Now";
            button.style.background = "gold";
            button.style.color = "#000";

        }, 2000);

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

    card.style.animation = `floatCard 4s ease-in-out ${i * 0.3}s infinite`;

});

// Navbar Background Change on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    if(window.scrollY > 100){

        navbar.style.background = "#000";

        navbar.style.boxShadow = "0 5px 20px rgba(255,215,0,.3)";

    }else{

        navbar.style.background = "rgba(0,0,0,.7)";

        navbar.style.boxShadow = "none";

    }

});

let cart = 0;

const cartCount = document.getElementById("cart-count");

document.querySelectorAll(".card button").forEach(button=>{

button.addEventListener("click",()=>{

cart++;

cartCount.textContent = cart;

});

});