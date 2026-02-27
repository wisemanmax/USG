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
const phaseMaps = {
  'phase1.html': ['phase1.html','news.html','freshman-list.html','artist-profiles.html','events.html','interviews.html','submissions.html','admin-dashboard.html'],
  'phase2.html': ['phase2.html','dashboard.html','platform-analytics.html','artist-funnel.html','campaigns.html','sponsors.html','ticketing-integration.html','crm-integration.html','reporting.html'],
  'phase3.html': ['phase3.html','discord-partners.html','ambassador-program.html','reputation-system.html','referral-rewards.html','perks-access.html','ticket-priority.html','activity-feed.html'],
  'phase4.html': ['phase4.html','mission-control.html','venue-intelligence.html','ticketing-engine.html','lineup-builder.html','production-plan.html','sponsor-deck.html','pnl-projections.html','multi-city-expansion.html']
};
const normalizedPath = Object.entries(phaseMaps).find(([, pages]) => pages.includes(currentPath))?.[0] || currentPath;
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
