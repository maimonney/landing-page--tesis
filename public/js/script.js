// Acordion
function toggleAccordion(index) {
  const content = document.getElementById('content-' + index);
  const icon = document.getElementById('icon-' + index);

  if (content.classList.contains('max-h-0')) {
    content.classList.remove('max-h-0');
    content.classList.add('max-h-96');
    icon.classList.add('rotate-180');
  } else {
    content.classList.remove('max-h-96');
    content.classList.add('max-h-0');
    icon.classList.remove('rotate-180');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('bg-opacity-70', 'bg-black');
      } else {
          header.classList.remove('bg-opacity-70', 'bg-black');
      }
  });

  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const menuClose = document.getElementById('menu-close');

  menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('menu-open');
  });

  menuClose.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('menu-open');
  });

  window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
          menu.classList.remove('hidden', 'translate-x-full', 'menu-open');
          menu.classList.add('lg:flex', 'translate-x-0');
      } else {
          menu.classList.add('hidden');
          menu.classList.remove('menu-open');
      }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');

  if (success === 'true') {
      const successMessage = document.getElementById('successMessage');
      successMessage.classList.remove('hidden');

      setTimeout(() => {
          successMessage.classList.add('hidden');
          const currentUrl = window.location.href.split('?')[0];
          window.history.replaceState({}, '', currentUrl + '?success=false');
      }, 3000);

      document.querySelector('form').reset();
  }
});

