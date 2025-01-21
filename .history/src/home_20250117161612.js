function toggleMenu() {
    const menu = document.querySelector('.navbar .center-links');
    menu.classList.toggle('active');
}

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior
  
      const targetId = this.getAttribute('href'); // Get the target section's id
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Enable smooth scrolling
          block: 'start', // Align to the top of the section
        });
      }
    });
  });

  function validatePhone(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  }

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    formData.append('access_key', 'f366a208-4a55-41c9-8898-09ee06530176');
  
    fetch('https://web3forms.com/api/v1/submit', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'  // This will disable CORS, but you won't be able to read the response
    })
    .then(response => {
      // Response won't be accessible here in 'no-cors' mode
      console.log(response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  
  