const showToast = (message) => {
  let toast = document.querySelector(".copy-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
};

const cycleMessage = () => {
  const panel = document.querySelector("#messagePanel");
  const current = Number(panel.dataset.messageIndex || 0);
  const nextIndex = (current + 1) % profileData.messages.length;
  const next = profileData.messages[nextIndex];

  panel.dataset.messageIndex = String(nextIndex);
  panel.classList.remove("message-swap");
  void panel.offsetWidth;
  panel.classList.add("message-swap");

  document.querySelector("#messageEyebrow").textContent = next.eyebrow;
  document.querySelector("#dynamicTitle").textContent = next.title;
  document.querySelector("#dynamicText").textContent = next.text;

  panel.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("Enfoque cambiado");
};

const toggleTheme = () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  document.querySelector("#themeToggle").textContent = isLight ? "Modo noche" : "Modo claro";
};

const highlightCard = (card) => {
  document.querySelectorAll(".is-highlighted").forEach((item) => {
    item.classList.remove("is-highlighted");
  });
  card.classList.add("is-highlighted");
};

const copyContactValue = async (event) => {
  const card = event.target.closest(".social-link-card");

  if (!card || !card.dataset.contactValue) {
    return;
  }

  if (card.href.endsWith("#")) {
    event.preventDefault();
  }

  try {
    await navigator.clipboard.writeText(card.dataset.contactValue);
    showToast("Contacto copiado");
  } catch (error) {
    showToast(card.dataset.contactValue);
  }
};

const buildActionDock = () => {
  const dock = document.createElement("div");
  dock.className = "action-dock";
  dock.innerHTML = `
    <button class="dock-button" id="themeToggle" type="button">Modo claro</button>
    <button class="dock-button" id="messageToggle" type="button">Cambiar enfoque</button>
  `;
  document.body.appendChild(dock);
};

const initActions = () => {
  buildActionDock();

  document.querySelector("#themeToggle").addEventListener("click", toggleTheme);
  document.querySelector("#messageToggle").addEventListener("click", cycleMessage);
  document.querySelector("#messagePanel").addEventListener("click", cycleMessage);
  document.querySelector("#socialLinksGrid").addEventListener("click", copyContactValue);

  document.querySelectorAll(".mini-card, .timeline-item, .stack-item, .social-link-card").forEach((card) => {
    if (card.tagName !== "A") {
      card.tabIndex = 0;
    }

    card.addEventListener("click", () => highlightCard(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        highlightCard(card);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", initActions);
