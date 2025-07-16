// 🌐 Language toggle logic
function setLang(lang) {
  document.body.classList.toggle('lang-en', lang === 'en');
  document.body.classList.toggle('lang-mr', lang === 'mr');
}

let current = 'en';
setLang(current);

// 🔄 Change language every 3 seconds
setInterval(() => {
  current = current === 'en' ? 'mr' : 'en';
  setLang(current);
}, 3000);

// 🖼️ Image hover swap logic
document.querySelectorAll('.hover-swap').forEach(img => {
  const originalSrc = img.getAttribute('src');
  const hoverSrc = img.getAttribute('data-hover');

  img.addEventListener('mouseenter', () => {
    img.setAttribute('src', hoverSrc);
  });

  img.addEventListener('mouseleave', () => {
    img.setAttribute('src', originalSrc);
  });
});

// 🔍 Lightbox popup logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.popup').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const imgSrc = link.getAttribute('href');
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});
