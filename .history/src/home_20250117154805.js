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


  document.getElementById('submitButton').addEventListener('click', function(event) {
    
    event.preventDefault();
  
    fetch('https://web3forms.com/api/v1/submit', {
      method: 'POST',
      body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Message sent successfully!');
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  