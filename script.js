const curtain = document.getElementById('curtain');
const openButton = document.getElementById('openInvite');

openButton.addEventListener('click', () => {
  curtain.classList.add('open');
  document.body.classList.add('site-ready');
  window.setTimeout(() => curtain.remove(), 2100);
});

// Reveal each section element as it enters the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// If a visitor uses the navigation before opening the curtain, open it first.
document.querySelectorAll('.site-header a, .scroll-cue').forEach(link => {
  link.addEventListener('click', () => {
    if (!document.body.classList.contains('site-ready')) {
      curtain.classList.add('open');
      document.body.classList.add('site-ready');
      window.setTimeout(() => curtain.remove(), 2100);
    }
  });
});
