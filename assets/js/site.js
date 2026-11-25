const menu = document.querySelector('#site-nav');
const menuButton = document.querySelector('.menu-toggle');
const menuLabel = menuButton.querySelector('.sr-only');
const menuLinks = [...menu.querySelectorAll('a')];
const mobileLayout = matchMedia('(max-width: 920px)');

function setMenu(open, returnFocus = false) {
  menu.inert = mobileLayout.matches && !open;
  menu.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Menüyü kapat' : 'Menüyü aç';
  if (returnFocus) menuButton.focus();
  updateBackToTop();
}

document.querySelector('.site-header').classList.add('has-menu');
menuButton.hidden = false;
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') === 'false'));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false, true);
});
mobileLayout.addEventListener('change', () => setMenu(false));

function updateActiveLink() {
  const selected = menuLinks.find((link) => link.hash === location.hash) || menuLinks[0];
  menuLinks.forEach((link) => link.removeAttribute('aria-current'));
  selected.setAttribute('aria-current', 'location');
}

menuLinks.forEach((link) => link.addEventListener('click', () => {
  if (mobileLayout.matches) setMenu(false, true);
}));
window.addEventListener('hashchange', updateActiveLink);
updateActiveLink();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const cards = [...document.querySelectorAll('.card, .staff, .about, .contact')];
  const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
      entry.target.style.setProperty('--delay', `${index * 70}ms`);
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  cards.forEach((card) => observer.observe(card));
}

const backToTop = document.querySelector('.back-to-top');

function updateBackToTop() {
  const visible = window.scrollY >= 400 && !menu.classList.contains('is-open');
  backToTop.classList.toggle('is-visible', visible);
  backToTop.inert = !visible;
  backToTop.tabIndex = visible ? 0 : -1;
  backToTop.setAttribute('aria-hidden', String(!visible));
}

document.body.classList.add('has-scroll');
setMenu(false);
window.addEventListener('scroll', updateBackToTop, { passive: true });
window.addEventListener('pageshow', updateBackToTop);

backToTop.addEventListener('click', (event) => {
  event.preventDefault();
  const top = document.querySelector('.brand a');
  top.focus({ preventScroll: true });
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  updateActiveLink();
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});

