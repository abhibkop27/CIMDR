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
    // Navigate to the apply.html file in the same directory
    window.location.href = ''; // Update the path if the file is in another folder
  });