// Mobile Navigation Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    } else {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Trigger reveal on load
reveal();

// Typing effect for the title
const titles = ["IT Support Engineer", "Systems Administrator", "Technical Support Specialist", "Problem Solver"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;
const typingTextElement = document.getElementById('typing-text');

function typeEffect() {
    isEnd = false;
    typingTextElement.innerHTML = titles[titleIndex].substring(0, charIndex);

    if (!isDeleting && charIndex < titles[titleIndex].length) {
        // forward typing
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // backward deleting
        charIndex--;
        setTimeout(typeEffect, 50);
    } else if (!isDeleting && charIndex === titles[titleIndex].length) {
        // pause at end of text
        isEnd = true;
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Wait 2s before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length; // move to next title
        setTimeout(typeEffect, 500);
    }
}

// Start typing effect only if element exists (safety check)
if (typingTextElement && window.innerWidth > 0) {
    // Initial delay before first typing starts
    setTimeout(typeEffect, 1000);
}
