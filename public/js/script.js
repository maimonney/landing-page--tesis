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
document.addEventListener('DOMContentLoaded', function() {
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
  
  
