function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");
}

function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
}

// Function to handle navigation
function navigateToPage() {
    window.location.href = './interview_form.html'; // Replace with your file path
  }