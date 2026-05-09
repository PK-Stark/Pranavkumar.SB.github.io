const words = [
  "Mechatronics Systems",
  "Robotics",
  "Drones",
  "Automation",
  "IoT Systems"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Ensure this matches the ID in your HTML
const typedText = document.getElementById("typed");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, 1200); // Wait before deleting
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  const speed = isDeleting ? 40 : 80;
  setTimeout(typeEffect, speed);
}

// Start the effect
document.addEventListener("DOMContentLoaded", typeEffect);
