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

  function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}


let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;

    function changeSlide() {
        slides[currentSlide].style.display = 'none'; // Hide current slide
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        slides[currentSlide].style.display = 'block'; // Show the next slide
    }

    // Initial setup to display the first image
    slides[currentSlide].style.display = 'block';

    // Change image every 3 seconds
    setInterval(changeSlide, 3000);

  
  
  