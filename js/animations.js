const revealOnScroll = () => {
  const animatedItems = document.querySelectorAll(".hero-card, .panel, .timeline-item, .stack-item, .social-link-card");

  animatedItems.forEach((item) => item.classList.add("reveal-item"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  animatedItems.forEach((item) => observer.observe(item));
};

const addPointerTilt = () => {
  document.querySelectorAll(".mini-card, .timeline-item, .social-link-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
      card.style.transform = `translateY(-5px) rotateX(${y}deg) rotateY(${x}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
};

const initAnimations = () => {
  revealOnScroll();
  addPointerTilt();
};

document.addEventListener("DOMContentLoaded", initAnimations);
