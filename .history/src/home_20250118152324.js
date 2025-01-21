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


// carousel.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

// Show the slide based on the current index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Change slide automatically every 3 seconds
function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    showSlide(currentSlide);
}

// Show previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to the previous slide
    showSlide(currentSlide);
}

// Show next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    showSlide(currentSlide);
}

// Initial setup to display the first image
showSlide(currentSlide);

// Change image every 3 seconds
setInterval(autoSlide, 2000);
