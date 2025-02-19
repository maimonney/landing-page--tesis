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

// Form
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');
  console.log("Parámetro 'success':", success); 

  const sendButton = document.getElementById('sendButton');
  const spinner = document.getElementById('spinner');
  const buttonText = document.getElementById('buttonText');
  const successMessage = document.getElementById('successMessage');
  const form = document.querySelector('form');

  function showSpinner() {
    sendButton.disabled = true;
    buttonText.style.display = 'none'; 
    spinner.style.display = 'inline-block'; 
  }

  function hideSpinner() {
    sendButton.disabled = false; 
    buttonText.style.display = 'inline-block'; 
    spinner.style.display = 'none';
  }

  function showSuccessMessage() {
    console.log("Mostrando mensaje de éxito"); 
    successMessage.classList.remove('hidden'); 
    successMessage.style.opacity = 1; 
    successMessage.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
      successMessage.style.opacity = 0; 
      setTimeout(() => {
        successMessage.classList.add('hidden'); 
      }, 500); 
    }, 3000);
  }

  form.addEventListener('submit', function () {
    showSpinner();
  });

  if (success === 'true') {
    hideSpinner(); 
    showSuccessMessage();

    const currentUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, '', currentUrl);

    form.reset(); 
  }
  
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-opacity-70', 'bg-black');
    } else {
      header.classList.remove('bg-opacity-70', 'bg-black');
    }
  });

  // Menu
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
});
