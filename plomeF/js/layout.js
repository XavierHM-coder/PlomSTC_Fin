(() => {
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const icons = {
    phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.7 3.3 3.3 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.7c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-2.1 2.2Z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5.5h18v13H3v-13Zm1.7 1.5 7.3 5.4L19.3 7H4.7Zm14.8 10V9.1L12 14.6 4.5 9.1V17h15Z"/></svg>',
    pin:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.2 3h3c.3 1.7 1.4 3 3.1 3.7v3.1c-1.2-.1-2.3-.5-3.3-1.2v6.2a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.2a2.8 2.8 0 1 0 1.9 2.7L14.2 3Z"/></svg>',
    facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8h3V4.4A18 18 0 0 0 14.4 4C11.8 4 10 5.6 10 8.5V11H7v4h3v9h4v-9h3.2l.8-4H14V8.7c0-.5.2-.7.7-.7Z"/></svg>'
  };
  const navLink = (href,label) => `<a class="nav-link ${current===href?'is-active':''}" href="${href}">${label}</a>`;
  const header = `
    <div class="scroll-progress" aria-hidden="true"><span></span></div>
    <header class="site-header" id="siteHeader">
      <div class="utility"><div class="container utility-inner">
        <a href="https://maps.google.com/?q=4413+Roosevelt+Road+Unit+105+A+Hillside+IL+60162" target="_blank" rel="noopener">${icons.pin}<span>4413 Roosevelt Road, Unit 105 A · Hillside, IL</span></a>
        <div style="display:flex;gap:20px"><a href="mailto:sernatechnicalcenter1@gmail.com">${icons.mail}<span>sernatechnicalcenter1@gmail.com</span></a><a href="tel:+16302104689">${icons.phone}<span>(630) 210-4689</span></a></div>
      </div></div>
      <div class="container nav-wrap">
        <a class="brand" href="index.html"><img src="assets/images/stc-logo-compact.webp" alt="Serna Technical Center logo"><span><strong>STC</strong><small>PLUMBING TRAINING</small></span></a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>
        <nav class="main-nav" id="mainNav" aria-label="Primary navigation">
          ${navLink('index.html','Home')}
          <div class="nav-dropdown"><button class="dropdown-toggle" type="button">Admissions <span>+</span></button><div class="dropdown-panel"><a href="admissions.html">Admissions Overview</a><a href="tuition-fees.html">Tuition & Fees</a><a href="refund-cancellation.html">Refund & Cancellation</a></div></div>
          ${navLink('student-services.html','Student Services')}
          <div class="nav-dropdown"><button class="dropdown-toggle" type="button">Academics <span>+</span></button><div class="dropdown-panel"><a href="index.html#program">Plumber Training Program</a><a href="index.html#curriculum">What You’ll Learn</a></div></div>
          ${navLink('about.html','About STC')}
          <div class="nav-dropdown"><button class="dropdown-toggle" type="button">Contact <span>+</span></button><div class="dropdown-panel"><a href="contact.html">Get in Touch</a><a href="complaints.html">Complaints</a></div></div>
        </nav>
        <a class="button button-primary nav-cta" href="request-info.html">Request Information</a>
      </div>
    </header>`;
  const footer = `
    <section class="final-cta"><div class="container final-cta-grid reveal"><h2>Start building a practical future in plumbing.</h2><a class="button button-dark" href="request-info.html">Request Program Information</a></div></section>
    <footer class="site-footer"><div class="container footer-grid">
      <div><a class="brand" href="index.html"><img src="assets/images/stc-logo-compact.webp" alt="STC logo"><span><strong>STC</strong><small>PLUMBING TRAINING</small></span></a><p>Hands-on training. Practical instruction. Career-focused education.</p><div class="socials"><a href="https://facebook.com/people/SERNA-Technical-Center/61574523130840/" target="_blank" aria-label="Facebook">${icons.facebook}</a><a href="https://instagram.com/stc_school/" target="_blank" aria-label="Instagram">${icons.instagram}</a><a href="https://www.tiktok.com/@stcschool1" target="_blank" aria-label="TikTok">${icons.tiktok}</a><a href="mailto:sernatechnicalcenter1@gmail.com" aria-label="Email">${icons.mail}</a></div></div>
      <div class="footer-col"><h3>Quick Links</h3><a href="admissions.html">Admissions</a><a href="student-services.html">Student Services</a><a href="about.html">About STC</a><a href="contact.html">Contact</a></div>
      <div class="footer-col"><h3>Program</h3><a href="index.html#program">Program Overview</a><a href="index.html#curriculum">Curriculum</a><a href="tuition-fees.html">Tuition & Fees</a><a href="refund-cancellation.html">Refund Policy</a></div>
      <div class="footer-col"><h3>Contact</h3><a href="https://maps.google.com/?q=4413+Roosevelt+Road+Unit+105+A+Hillside+IL+60162" target="_blank">4413 Roosevelt Road, Unit 105 A<br>Hillside, IL 60162</a><a href="tel:+18155452096">(815) 545-2096</a><a href="tel:+16302104689">(630) 210-4689</a><a href="mailto:sernatechnicalcenter1@gmail.com">sernatechnicalcenter1@gmail.com</a></div>
    </div><div class="container footer-bottom"><span>© 2026 Serna Technical Center. All rights reserved.</span><span>Plumbing Training · Hillside, Illinois</span></div></footer>
    <a class="info-fab" href="request-info.html" aria-label="Request information">${icons.mail}<span>INFO</span></a>`;
  document.querySelectorAll('[data-site-header]').forEach(el=>el.innerHTML=header);
  document.querySelectorAll('[data-site-footer]').forEach(el=>el.innerHTML=footer);
})();
