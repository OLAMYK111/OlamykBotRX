// Savage Mode Toggle
const savageToggle = document.getElementById("savageToggle");
const modeLabel = document.getElementById("modeLabel");
const botOutput = document.getElementById("botOutput");

savageToggle.addEventListener("change", () => {
  modeLabel.textContent = savageToggle.checked ? "ON" : "OFF";
});

// Smart Bot Reply
function handleReply() {
  const input = document.getElementById("userMessage").value.trim();
  if (!input) return;

  let response = "";

  const savageMode = savageToggle.checked;

  if (savageMode) {
    if (input.toLowerCase().includes("hi") || input.toLowerCase().includes("hello")) {
      response = "Wetin happen? Talk straight. 😏";
    } else if (input.toLowerCase().includes("love")) {
      response = "Love no dey buy data, abeg. 💀";
    } else if (input.toLowerCase().includes("who are you")) {
      response = "I'm OlamykBotRX — your worst nightmare and best assistant 😎";
    } else {
      response = "OLAMYK no send you 🤷🏽‍♂️";
    }
  } else {
    if (input.toLowerCase().includes("hi") || input.toLowerCase().includes("hello")) {
      response = "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("love")) {
      response = "Love is a beautiful thing ❤️";
    } else if (input.toLowerCase().includes("who are you")) {
      response = "I'm OlamykBotRX, your personalized WhatsApp assistant 🤖";
    } else {
      response = "Let me think about that... 🤔";
    }
  }

  botOutput.innerHTML = `<div class='bot-response'>${response}</div>`;
  document.getElementById("userMessage").value = "";
}
