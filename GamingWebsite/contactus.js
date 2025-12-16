document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

   
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = 'Your message has been submitted!';
});
