const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const mainContent = document.getElementById('main-content');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.remove('translate-x-full');
    nav.classList.add('translate-x-0');
    bar.style.display = 'none'; 
    mainContent.classList.add('blur-sm', 'brightness-50', 'pointer-events-none');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('translate-x-0');
    nav.classList.add('translate-x-full');
    bar.style.display = 'block'; 
    mainContent.classList.remove('blur-sm', 'brightness-50', 'pointer-events-none');
  });
}


window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    // Reset
    nav.classList.add('translate-x-full');
    bar.style.display = 'none';
    mainContent.classList.remove('blur-sm', 'brightness-50', 'pointer-events-none');
  } else {
    bar.style.display = 'block';
  }
});

