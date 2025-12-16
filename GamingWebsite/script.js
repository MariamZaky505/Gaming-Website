const toggleLinks = document.querySelectorAll('.signUpBtn-link, .signIBtn-link');
const wrapper = document.querySelector('.wrapper');

toggleLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper.classList.toggle('active');
    });
});

// Validation for login form
document.getElementById('loginForm').addEventListener('submit', function (event) {
    var username = document.getElementById('loginUsername').value.trim();
    var password = document.getElementById('loginPassword').value.trim();

    if (!username || !password) {
        alert('Please enter both username and password.');
        event.preventDefault();
        return;
    }

    // Username validation: No numbers allowed
    if (/\d/.test(username)) {
        alert('Username should not contain numbers.');
        event.preventDefault();
        return;
    }

    // Password validation: Should include symbols and be at least 8 characters long
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('Password should be at least 8 characters long and include symbols.');
        event.preventDefault();
        return;
    }
});

// Validation for signup form
document.getElementById('signupForm').addEventListener('submit', function (event) {
    var username = document.getElementById('signupUsername').value.trim();
    var email = document.getElementById('signupEmail').value.trim();
    var password = document.getElementById('signupPassword').value.trim();

    if (!username || !email || !password) {
        alert('Please fill out all fields.');
        event.preventDefault();
        return;
    }

    // Username validation: No numbers allowed
    if (/\d/.test(username)) {
        alert('Username should not contain numbers.');
        event.preventDefault();
        return;
    }

    
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('Password should be at least 8 characters long and include symbols.');
        event.preventDefault();
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}