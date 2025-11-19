// script.js - Maximum Spice Activated 🔥

VANTA.NET({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00ffff,
  backgroundColor: 0x0f001a,
  points: 14,
  maxDistance: 24,
  spacing: 17,
  showDots: true
});

// Neon Cursor
document.addEventListener('mousemove', e => {
  document.querySelector('.cursor').style.left = e.clientX + 'px';
  document.querySelector('.cursor').style.top = e.clientY + 'px';
});

// Typing Animation
const fullText = "Anandh Ramachandran";
let i = 0;
const typingEl = document.querySelector('.typing');
typingEl.innerHTML = '';
function type() {
  if (i < fullText.length) {
    if (i === 7) typingEl.innerHTML += '<span class="highlight">';
    typingEl.innerHTML += fullText.charAt(i);
    if (i === fullText.length - 1) typingEl.innerHTML += '</span>';
    i++;
    setTimeout(type, 130);
  }
}
setTimeout(type, 800);

// Confetti on name click
document.querySelector('.typing').addEventListener('click', () => {
  confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 }, colors: ['#ff00ff','#00ffff','#ffffff'] });
});

// Konami Code = Total Chaos
new Konami(() => {
  alert("Warrior Mode Activated 🥊");
  confetti({ particleCount: 800, spread: 360 });
  document.body.style.filter = "hue-rotate(180deg) invert(0.2)";
  setTimeout(() => document.body.style.filter = "", 6000);
});

// Extra Particles Layer
particlesJS('background', {
  particles: { number: { value: 90 }, color: { value: '#ff00ff' }, opacity: { value: 0.6, random: true }, size: { value: 4, random: true }, line_linked: { enable: true, distance: 160, color: '#00ffff', opacity: 0.4, width: 1 }, move: { enable: true, speed: 2.5 } },
  interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
});

// Section fade-in
new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.2 }).observeAll = (sels => sels.forEach(s => new IntersectionObserver(o => o.forEach(e => { if (e.isIntersecting) e.target.style.opacity = 1, e.target.style.transform = 'translateY(0)', e.target.style.transition = 'all 1.2s'; }), { threshold: 0.15 }).observe(s)));
document.querySelectorAll('section').forEach(s => { s.style.opacity = 0; s.style.transform = 'translateY(60px)'; });

// Theme toggle
document.getElementById('toggle').addEventListener('change', e => {
  document.documentElement.dataset.theme = e.target.checked ? 'light' : 'dark';
});