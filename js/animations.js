(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (!finePointer || reduceMotion) return;

  const logo = 'assets/images/stc-logo-compact.webp';

  document.querySelectorAll('[data-model="stc-medallion"]').forEach(host => {
    host.innerHTML = `
      <div class="medallion-tilt">
        <div class="medallion-spin">
          <div class="medallion-edge"></div>
          <div class="medallion-face medallion-front"><img src="${logo}" alt="Serna Technical Center logo"></div>
          <div class="medallion-face medallion-back"><img src="${logo}" alt="" aria-hidden="true"></div>
          <div class="medallion-shine"></div>
        </div>
      </div>
      <div class="pipe-orbit"></div>`;

    const tilt = host.querySelector('.medallion-tilt');
    host.addEventListener('pointermove', event => {
      const rect = host.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      tilt.style.transform = `rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
    }, { passive: true });

    host.addEventListener('pointerleave', () => {
      tilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });

  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.setProperty('--ry', `${x * 5}deg`);
      card.style.setProperty('--rx', `${-y * 5}deg`);
    }, { passive: true });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--rx', '0deg');
    });
  });
})();
