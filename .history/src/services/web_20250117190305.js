document.getElementById('return').addEventListener('click', function() {
    window.location.href = 'src/home.html'; // Replace with your actual path
  });

  function openWhatsApp() {
    // Replace this with your WhatsApp number in international format
    const phoneNumber = '+918805011007';
    const message = 'Hello, I am interested in your services!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}