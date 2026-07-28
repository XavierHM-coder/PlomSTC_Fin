(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');
  const progress = document.querySelector('.scroll-progress span');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', event => {
      if (innerWidth <= 1100) {
        event.preventDefault();
        button.closest('.nav-dropdown').classList.toggle('open');
      }
    });
  });

  let scrollTicking = false;
  const updateScrollUi = () => {
    header?.classList.toggle('is-scrolled', scrollY > 10);
    const available = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${available ? (scrollY / available) * 100 : 0}%`;
    scrollTicking = false;
  };

  addEventListener('scroll', () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateScrollUi);
    }
  }, { passive: true });
  updateScrollUi();

  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: '0px 0px 80px' });

  document.querySelectorAll('.reveal').forEach(element => reveal.observe(element));

  document.querySelectorAll('.faq-q').forEach(button => {
    button.addEventListener('click', () => button.closest('.faq-item').classList.toggle('open'));
  });

  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      localStorage.setItem('stc-last-request', JSON.stringify({
        ...data,
        createdAt: new Date().toISOString()
      }));
      const note = form.querySelector('[data-form-note]');
      if (note) note.textContent = 'Thank you. Your information has been saved in this browser for the demo.';
      form.reset();
    });
  });

  /* The site now keeps only one 3D object. Pause it when the hero is off screen. */
  const coinFrame = document.getElementById('stc-coin-frame');
  if (coinFrame) {
    let frameVisible = true;

    const sendCoinState = () => {
      coinFrame.contentWindow?.postMessage({
        type: 'stc-coin-visibility',
        active: frameVisible && !document.hidden
      }, '*');
    };

    const coinObserver = new IntersectionObserver(entries => {
      frameVisible = entries[0]?.isIntersecting ?? false;
      sendCoinState();
    }, { rootMargin: '120px' });

    coinObserver.observe(coinFrame);
    coinFrame.addEventListener('load', sendCoinState, { once: true });
    document.addEventListener('visibilitychange', sendCoinState);
  }
})();
