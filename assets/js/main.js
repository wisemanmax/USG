// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const normalizedPath = currentPath.startsWith('ugs-phase2-') ? 'ugs-phase2.html' : currentPath;
document.querySelectorAll('.nav-menu a[data-page]').forEach(link => {
  link.classList.toggle('active', link.dataset.page === normalizedPath);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.platform-check')?.forEach(label => {
  label.addEventListener('click', () => label.classList.toggle('checked'));
});
