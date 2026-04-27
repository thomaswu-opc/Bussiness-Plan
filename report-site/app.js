const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav a")];

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
