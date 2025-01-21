function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");
}

function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
}

const applyButton = document.getElementById('applyButton');

  // Add a click event listener
  applyButton.addEventListener('click', function () {
    // Navigate to another page
    window.location.href = 'interview_form.html'; // Replace with your desired URL
  });