const toggle = document.querySelector(".nav-toggle");
const links = [...document.querySelectorAll(".site-nav a")];

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];

const observer = new IntersectionObserver(
  (entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!active) return;

    links.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${active.target.id}`;
      link.style.color = isCurrent ? "var(--ink)" : "";
      link.style.borderColor = isCurrent ? "var(--coral)" : "";
    });
  },
  { threshold: [0.35, 0.55] }
);

sections.forEach((section) => observer.observe(section));