/* =========================================
   NAVBAR — cambia color de fondo al hacer scroll
   ========================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.background = 'rgba(5, 8, 22, 0.95)';
  } else {
    navbar.style.background = 'rgba(5, 8, 22, 0.75)';
  }
});

/* =========================================
   REVEAL en scroll (Intersection Observer)
   ========================================= */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // anima solo una vez
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* =========================================
   CARDS — efecto de luz que sigue al cursor
   ========================================= */
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
        rgba(124, 58, 237, 0.18),
        rgba(255, 255, 255, 0.05) 55%)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = 'var(--bg-card)';
  });
});
