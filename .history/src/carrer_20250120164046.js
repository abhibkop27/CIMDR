function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");
}

function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
}

document.getElementById('applyButton').onclick = function () {
    // Navigate to a local file
    window.location.href = './interview_form.html'; // Replace with your file path
  };