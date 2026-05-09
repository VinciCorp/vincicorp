// VinciCorp — main.js

// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Animate feature cards on scroll
const cards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.style.animationPlayState = 'running';
      }, parseInt(delay));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.animationPlayState = 'paused';
  observer.observe(card);
});

// Waitlist signup
function handleSignup() {
  const input = document.getElementById('emailInput');
  const msg = document.getElementById('waitlistMsg');
  const email = input.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    msg.textContent = 'Please enter a valid email address.';
    msg.style.color = '#f87171';
    return;
  }
  msg.textContent = "You're on the list! We'll be in touch soon. 🚀";
  msg.style.color = 'var(--accent)';
  input.value = '';
}

// Enter key for waitlist
document.getElementById('emailInput')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSignup();
});

// Mobile burger (basic toggle for future drawer)
document.getElementById('burger')?.addEventListener('click', () => {
  // Can be extended with a full mobile drawer
  console.log('Mobile menu toggled');
});
