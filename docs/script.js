const words = [
  "Mechatronics Systems",
  "Industrial Automation",
  "Drone Technology",
  "IoT Systems",
  "Mixed-Signal Hardware"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Targeted selector for the typing span
const typedText = document.getElementById("typed");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Adding characters
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, 1500); // Pause at full word
    }
  } else {
    // Removing characters
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Loop to next word
    }
  }

  // Adjust speed for typing vs deleting
  const speed = isDeleting ? 40 : 80;
  setTimeout(typeEffect, speed);
}

// Start animation on load
document.addEventListener("DOMContentLoaded", typeEffect);
