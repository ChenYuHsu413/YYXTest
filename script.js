window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        academy: '#0B1F3A',
        academy2: '#123864',
        gold: '#FACC15',
        gold2: '#FDE68A',
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
  const counters = document.querySelectorAll('.counter');
  const progressRings = document.querySelectorAll('.progress-ring');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const formatValue = (value, decimals) => {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }

    return String(Math.round(value));
  };

  const runCounter = (counter) => {
    if (counter.dataset.counted === 'true') {
      return;
    }

    const target = Number(counter.dataset.target || 0);
    const suffix = counter.dataset.suffix || '';
    const decimals = Number(counter.dataset.decimals || 0);

    if (reduceMotion) {
      counter.textContent = `${formatValue(target, decimals)}${suffix}`;
      counter.dataset.counted = 'true';
      return;
    }

    const duration = 1100;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      counter.textContent = `${formatValue(current, decimals)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = `${formatValue(target, decimals)}${suffix}`;
        counter.dataset.counted = 'true';
      }
    };

    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  counters.forEach((counter) => counterObserver.observe(counter));

  const runProgressRing = (ring) => {
    if (ring.dataset.progressed === 'true') {
      return;
    }

    const progress = Number(ring.dataset.progress || 0);

    if (reduceMotion) {
      ring.style.setProperty('--progress', progress);
      ring.dataset.progressed = 'true';
      return;
    }

    const duration = 1000;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      ring.style.setProperty('--progress', progress * eased);

      if (elapsed < 1) {
        requestAnimationFrame(tick);
      } else {
        ring.style.setProperty('--progress', progress);
        ring.dataset.progressed = 'true';
      }
    };

    requestAnimationFrame(tick);
  };

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runProgressRing(entry.target);
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  progressRings.forEach((ring) => progressObserver.observe(ring));

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

        if (isActive) {
          panel.querySelectorAll('.counter').forEach((counter) => {
            counterObserver.observe(counter);
          });
          panel.querySelectorAll('.progress-ring').forEach((ring) => {
            progressObserver.observe(ring);
          });
        }
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
