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
    event.preventDefault();  // Prevent the form from submitting and refreshing the page

    // Create FormData from the form
    const formData = new FormData(this);

    // Manually append the access_key to FormData (optional as it's already in the form, but ensure it's passed)
    formData.append('access_key', 'f366a208-4a55-41c9-8898-09ee06530176');

    // Make the fetch request to Web3Forms API
    fetch('https://web3forms.com/api/v1/submit', {
        method: 'POST',
        body: formData  // Sending FormData containing form fields
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Application submitted successfully!');
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
});

  
  