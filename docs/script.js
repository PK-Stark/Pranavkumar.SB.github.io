const words = [
  "Mechatronics Engineering",
  "Robotics",
  "Drones",
  "Automation",
  "IoT Systems"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.querySelector(".typing-text span");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, 800);

    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 35 : 65);

}

typeEffect();
