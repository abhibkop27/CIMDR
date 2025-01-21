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


  // carrer

  function submitForm(event) {
    event.preventDefault();  // Prevents the default form submission

    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    const formData = new FormData(form);

    // Send the form data using Fetch API
    fetch('https://web3forms.com/api/v1/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            responseMessage.innerHTML = '<p style="color: green;">Your application has been submitted successfully!</p>';
            form.reset();  // Optionally reset the form after successful submission
        } else {
            responseMessage.innerHTML = '<p style="color: red;">There was an error with your submission. Please try again.</p>';
        }
    })
    .catch(error => {
        responseMessage.innerHTML = '<p style="color: red;">An error occurred while submitting your form. Please try again.</p>';
    });
}
  
  