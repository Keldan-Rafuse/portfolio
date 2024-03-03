const typingText = document.getElementById("typing-text");
const roles = ["web developer", "web designer", "ui designer", "front-end developer"];
const commandInput = document.getElementById("commandInput");
const outputContainer = document.getElementById("output");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateText() {
  const currentRole = roles[roleIndex];
  const displayText = "I am a " + currentRole.substring(0, charIndex);
  typingText.textContent = displayText;

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  if (charIndex === -1) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  if (charIndex === currentRole.length + 1) {
    isDeleting = true;
  }
}

setInterval(updateText, 100);

commandInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleCommand(commandInput.value);
    commandInput.value = "";
  }
});

function handleCommand(command) {
  const lowerCaseCommand = command.toLowerCase();

  switch (lowerCaseCommand) {
    case "help":
      displayMessage("Available commands: help, skills, aboutme, email, clear");
      break;
    case "skills":
      displayMessage("Skills: HTML, CSS, JavaScript, Java");
      displayMessage("Frameworks: React, Bootstrap")
      break;
    case "about me":
      displayMessage(" ");
      displayMessage("Greetings! I am a passionate 17-year-old computer enthusiast with a rich background spanning over 2 years in various programming languages, from Java to JavaScript. My fascination with computers knows no bounds, and I dedicate a significant portion of my time to honing my skills. Through the art of web development, I strive to elevate my expertise to unprecedented heights, exploring the limitless possibilities that the digital realm has to offer.");
      break;
    case "email":
      displayMessage("Email: rafusekeldan@gmail.com");
      break;
    case "clear":
      clearTerminal();
      break;
    default:
      displayMessage("Command not recognized. Type 'help' for available commands.");
  }
}

function displayMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  outputContainer.appendChild(messageElement);
}

function clearTerminal() {
  outputContainer.innerHTML = "";
}
