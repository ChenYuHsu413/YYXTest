window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        academy: '#0B1F3A',
        academy2: '#123864',
        gold: '#F6C445',
        gold2: '#FFE9A8',
        ink: '#172033'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Microsoft JhengHei', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 70px rgba(11, 31, 58, 0.18)'
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('[data-panel]');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      tabButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.panel === target;
        panel.hidden = !isActive;
        panel.classList.toggle('is-active', isActive);
      });
    });
  });

  const revealTargets = document.querySelectorAll('.section-heading, .department-panel, .teacher-card, .metric-card, .proof-card');
  revealTargets.forEach((target) => target.setAttribute('data-reveal', ''));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((target) => revealObserver.observe(target));
});
