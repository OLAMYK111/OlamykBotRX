// Savage Mode Logic
let savageMode = true;

const savageStatus = document.getElementById("savage-status");
const savageBtn = document.getElementById("toggle-savage");

savageBtn.addEventListener("click", () => {
  savageMode = !savageMode;
  savageStatus.textContent = savageMode ? "Savage Mode is ON" : "Savage Mode is OFF";
  savageStatus.style.color = savageMode ? "#00ff99" : "#ff3366";
});

// Feature Cards (Clickable Actions)
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("click", () => {
    const feature = card.getAttribute("data-feature");
    alert(`"${feature}" feature is coming soon! 🚀`);
  });
});

// WhatsApp Connect Button (Placeholder)
const connectBtn = document.getElementById("connect-btn");

connectBtn.addEventListener("click", () => {
  alert("WhatsApp Connection Feature Coming Soon! 🔗");
});
