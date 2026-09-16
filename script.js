// Плавное появление элементов при прокрутке.
const items = document.querySelectorAll('.section, .contact-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });
items.forEach(item => observer.observe(item));
