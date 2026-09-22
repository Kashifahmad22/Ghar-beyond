
(function () {
  const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const config = window.GB_CONFIG || {};

  const contentReplacements = {
    'Use this area for your real travel philosophy, local expertise, customer promise and team introduction.': 'We believe the best journeys are thoughtfully planned, never overfilled. Local insight, honest guidance and room to wander help every trip feel personal from the first conversation to the journey home.',
    'Placeholder content — replace before launch.': 'Our promise is simple: listen closely, recommend responsibly and stay present when you need us. We bring together trusted stays, practical details and meaningful experiences so you can travel with confidence and return with stories that feel entirely your own.',
    'This section is intentionally editable. Add the real Ghar Beyond story, team details, mission and travel philosophy here as the business grows.': 'Ghar Beyond is shaped by thoughtful planning, practical local knowledge and a belief that every journey should leave room for discovery.',
    'Testimonials below are placeholders until genuine traveller reviews are added.': 'Every journey begins with a conversation. Traveller stories will be added here as our guests share their experiences with us.',
    'Replace these placeholders with your own destination photography, customer moments and reels.': 'A selection of destination scenes and travel moments from the world of Ghar Beyond.',
    'Detailed itinerary placeholder — replace this with the confirmed day plan.': 'Your confirmed day plan will be tailored around your dates, pace and chosen experiences.',
    'Detailed itinerary placeholder — replace this with the confirmed plan for this destination.': 'Your confirmed day plan will be tailored around your dates, pace and chosen experiences.',
    'Package itinerary placeholder — replace with confirmed details.': 'Your final day plan will be confirmed around your dates, pace and selected experiences.',
    'Package itinerary placeholder — replace with confirmed day-by-day details.': 'Your final day plan will be confirmed around your dates, pace and selected experiences.',
    'This page is a polished content template — replace the placeholder itinerary, inclusions and pricing once the package is final.': 'This journey is a flexible starting point; final inclusions are confirmed around your dates and preferences.',
    'Content placeholder': 'Travel collection',
    'When real Ghar Beyond trip photos are available, replace the four files in': 'Our gallery will grow with photographs from Ghar Beyond journeys. The collection uses the images in',
    '“Add a genuine customer review here once the first journeys are completed.”': '“The best journeys make space for both the plan and the unexpected.”',
    '“Use specific details about the experience rather than generic praise.”': '“Good travel advice is practical, personal and grounded in local knowledge.”',
    '“Replace this with a real traveller story and permission to publish it.”': '“Every itinerary begins with listening carefully to the people who will take it.”',
    'Customer Name': 'Ghar Beyond team',
    'Trip to Sikkim': 'Travel principle',
    'Trip to Kashmir': 'Travel principle',
    'Family Holiday': 'Travel principle'
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    Object.entries(contentReplacements).forEach(([from, to]) => {
      if (node.nodeValue.includes(from)) node.nodeValue = node.nodeValue.replaceAll(from, to);
    });
  });

  const aboutContent = $('.about-content');
  const philosophy = $('.philosophy-grid');
  if (aboutContent && philosophy) {
    const aboutImage = $('.about-image img');
    if (aboutImage) aboutImage.alt = 'Travellers enjoying a Ghar Beyond journey';
    aboutContent.querySelector('.section-label').textContent = 'OUR PROMISE';
    aboutContent.querySelector('h2').innerHTML = 'Your trip.<br><em>Our responsibility.</em>';
    aboutContent.querySelectorAll('p')[0].textContent = 'At Ghar Beyond, we believe a trip is more than a booking. You bring your time, your money and your trust to the journey, and we believe that trust comes with a responsibility: to look after the details, the decisions and the moments that make travel feel truly yours.';
    aboutContent.querySelectorAll('p')[1].textContent = 'Whether you know exactly where you want to go or need help finding the right place to begin, we listen first. Then we help you choose thoughtfully, build a practical plan and stay connected from the first conversation until you return home.';
    philosophy.querySelector('.section-label').textContent = 'TRAVEL, TAKEN CARE OF';
    philosophy.querySelector('h2').innerHTML = 'We plan.<br><em>We assist. We look after you.</em>';
    philosophy.querySelectorAll('div')[1].innerHTML = '<p>Before your trip, we understand your preferences, budget and expectations so the plan makes sense for you. During your trip, our 24/7 assistance gives you someone to reach when you need guidance, support or help with the unexpected. Until you return, we stay connected because our responsibility does not end when you leave for your destination.</p><p>There are many places to book a hotel, flight or package. Ghar Beyond is here to offer something beyond the booking: the peace of mind that someone is looking after your journey.</p>';
  }

  const contactColumn = $$('.footer-column').find(column => column.querySelector('h4')?.textContent.trim() === 'Get in touch');
  const configuredPhones = Array.isArray(config.phone) ? config.phone : (config.phone ? [config.phone, '7631047659'] : []);
  if (contactColumn && configuredPhones.length) {
    configuredPhones.slice(1).forEach(phone => {
      const formatted = phone.startsWith('+') ? phone : `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
      if (!contactColumn.querySelector(`a[href="tel:${phone}"]`)) {
        const link = document.createElement('a');
        link.href = `tel:${phone}`;
        link.textContent = formatted;
        contactColumn.insertBefore(link, contactColumn.querySelector('a[href^="mailto:"]'));
      }
    });
  }
  const footer = $('footer');
  if (footer && !footer.querySelector('.footer-social')) {
    const social = document.createElement('div');
    social.className = 'footer-social';
    social.innerHTML = '<span>Follow our journeys</span><div class="footer-social-links"><a href="https://www.instagram.com/ghar.beyond?stkn=bWo1bmRwbGIzejg4" target="_blank" rel="noopener noreferrer" aria-label="Ghar Beyond on Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a><a href="https://www.facebook.com/share/1DBTa1hCDx/" target="_blank" rel="noopener noreferrer" aria-label="Ghar Beyond on Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8h3V4.2c-.5-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 5.9v3.3H5v4.2h2.9V24h4.4v-6.6h3.6l.6-4.2h-4.2V10c0-1.2.3-2 1.7-2Z"/></svg></a><a href="https://www.youtube.com/@gharbeyond" target="_blank" rel="noopener noreferrer" aria-label="Ghar Beyond on YouTube" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z"/></svg></a></div>';
    contactColumn?.appendChild(social);
  }

  const testimonialSection = $('.testimonials');
  if (testimonialSection) {
    testimonialSection.querySelector('.section-label').textContent = 'HOW WE TRAVEL';
    testimonialSection.querySelector('h2').innerHTML = 'The Ghar Beyond<br><em>way of travelling.</em>';
    testimonialSection.querySelector('.section-heading > p').textContent = 'The principles behind every journey we plan, assist with and look after.';
    const principles = [
      ['LISTEN FIRST', 'Every good journey begins by understanding the people taking it, not by choosing a package from a list.', 'The Ghar Beyond approach'],
      ['PLAN THOUGHTFULLY', 'The right itinerary leaves room for your pace, your priorities and the unexpected moments worth remembering.', 'The Ghar Beyond approach'],
      ['STAY PRESENT', 'Our responsibility continues through the journey, with practical guidance and support whenever you need it.', 'The Ghar Beyond approach']
    ];
    testimonialSection.querySelectorAll('.testimonial-grid article').forEach((article, index) => {
      const principle = principles[index];
      if (!principle) return;
      article.querySelector('span').textContent = principle[0];
      article.querySelector('p').textContent = `“${principle[1]}”`;
      article.querySelector('strong').textContent = principle[2];
      article.querySelector('small').textContent = 'How we travel';
    });
  }

  const navbar = $('.navbar');
  const menu = $('#mobileMenu');
  const menuBtn = $('#mobileMenuBtn');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => { const open = menu.classList.toggle('active'); document.body.classList.toggle('menu-open', open); menuBtn.setAttribute('aria-expanded', String(open)); });
    $$('.mobile-menu a', menu).forEach(a => a.addEventListener('click', () => { menu.classList.remove('active'); document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false') }));
  }
  window.addEventListener('scroll', () => navbar && navbar.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

  const chatBtn = $('#chatBtn'), chatBox = $('#chatBox'), closeChat = $('#closeChat');
  if (chatBtn && chatBox) {
    chatBtn.addEventListener('click', () => { const open = chatBox.classList.toggle('active'); chatBox.setAttribute('aria-hidden', String(!open)); });
    closeChat && closeChat.addEventListener('click', () => { chatBox.classList.remove('active'); chatBox.setAttribute('aria-hidden', 'true') });
    document.addEventListener('click', e => { if (chatBox.classList.contains('active') && !chatBox.contains(e.target) && !chatBtn.contains(e.target)) { chatBox.classList.remove('active'); chatBox.setAttribute('aria-hidden', 'true') } });
  }
  const meeting = () => { const url = config.meetingUrl; if (!url || url.includes('REPLACE_WITH')) { alert('Add your real booking link in js/config.js before using video-call booking.'); return; } window.open(url, '_blank', 'noopener,noreferrer') };
  const meetingBtn = $('#meetingBtn'), chatMeeting = $('#chatMeeting');
  meetingBtn && meetingBtn.addEventListener('click', e => { e.preventDefault(); meeting() }); chatMeeting && chatMeeting.addEventListener('click', e => { e.preventDefault(); meeting() });

  const homeDest = $('#homeDestinations');
  if (homeDest && window.GB_DESTINATIONS) {
    homeDest.innerHTML = window.GB_DESTINATIONS.slice(0, 5).map((d, i) => `<article class="destination-card ${i === 0 ? 'large' : ''}"><a href="destinations/${d.slug}/"><div class="card-image"><img src="${d.image}" alt="${d.name}" loading="lazy"><span class="destination-tag">${d.category}</span></div><div class="destination-info"><span class="card-kicker">${d.region}</span><h3>${d.name}</h3><p>${d.shortDescription}</p><div class="card-meta"><span>${d.duration}</span><span class="price-badge">Starts from ${d.price}</span></div><span class="card-link">Explore destination →</span></div></a></article>`).join('');
  }
  const homePackages = $('#homePackages');
  if (homePackages && window.GB_PACKAGES) {
    homePackages.innerHTML = window.GB_PACKAGES.slice(0, 3).map(p => `<article class="package-card"><a href="packages/${p.slug}/"><div class="package-image"><img src="${p.image}" alt="${p.title}" loading="lazy"><span class="price-badge">Starts from ${p.price}</span></div><div class="package-content"><small>${p.category.toUpperCase()} • ${p.duration}</small><h3>${p.title}</h3><p>${p.description}</p><span class="card-link">View package →</span></div></a></article>`).join('');
  }

  const filterGroups = $$('.filter-row[data-filter-group]');
  filterGroups.forEach(group => {
    const type = group.dataset.filterGroup;
    const cards = type === 'destinations' ? $$('.destination-card', document) : $$('.package-card', document);
    const buttons = $$('.filter-btn', group);
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active')); btn.classList.add('active');
      const f = btn.dataset.filter.toLowerCase();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = (f === 'all' || text.includes(f)) ? '' : 'none';
      });
    }));
  });

  const form = $('#travelForm');
  if (form) {
    const qs = new URLSearchParams(location.search); const pre = qs.get('destination'); if (pre && $('#destination')) { const option = $$('#destination option').find(o => o.value.toLowerCase() === pre.toLowerCase()); if (option) $('#destination').value = option.value; }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const val = id => ($(id)?.value || '').trim();
      const message = `Hello Ghar Beyond!\n\nI would like to plan a trip.\n\nName: ${val('#name')}\nMobile: ${val('#phone')}\nEmail: ${val('#email') || 'Not provided'}\nDestination: ${val('#destination') || 'Not decided yet'}\nTravel Date: ${val('#date') || 'Flexible'}\nTravellers: ${val('#travellers') || 'Not specified'}\nTrip Type: ${val('#tripType') || 'Not specified'}\nBudget: ${val('#budget') || 'Not specified'}\n\nSpecial Requirements:\n${val('#requirements') || 'None'}\n\nPlease help me plan my trip.`;
      window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
  }
})();
