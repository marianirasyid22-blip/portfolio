
// TYPING ANIMATION
const typingElement = document.getElementById("typing");

const words = [
    "DEVELOPER",
    "PROGRAMMER",
    "CREATIVE MIND",
    "TECH ENTHUSIAST"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    typingElement.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// MOUSE LIGHT EFFECT
const glow = document.querySelector(".background-glow");

window.addEventListener("pointermove", (event) => {
    glow.style.left = (event.clientX - 300) + "px";
    glow.style.top = (event.clientY - 300) + "px";
});


// 3D CORE MOUSE EFFECT
const visual = document.querySelector(".hero-visual");
const core = document.querySelector(".core");

visual.addEventListener("pointermove", (event) => {
    const rect = visual.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 25;
    const rotateX = (0.5 - y) * 25;

    core.style.transform =
        `rotate(45deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

visual.addEventListener("pointerleave", () => {
    core.style.transform = "";
});


// SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .goal-section"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});
