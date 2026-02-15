// Dynamic typing effect
const roles = ["Frontend Developer", "JavaScript Enthusiast", "UI Designer"];
let index = 0;
let charIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
    if (charIndex < roles[index].length) {
        dynamicText.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Dynamic Projects
const projects = [
    { title: "Symtoscan", desc: "AI health guider" },
    { title: "ToDo App", desc: "Task manager with local storage." },
    { title: "Basic Hospital Management System", desc: "Simple system for managing hospital data." }
];

const container = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
    `;
    container.appendChild(card);
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-message").textContent = 
        "Thank you! Your message has been sent.";
});