const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.getElementById('error');
const checkbox = document.getElementById('checkbox');

// This is what I'm saying to the computer "Form listen out for a submit, and when you hear a submit prevent the form from submitting/don't submit it."
form.addEventListener('submit', (stop) => {
    var messages = []
    if(email.value === ' ' || email.value > 20 || email.value < 7 || email.value == null) {
        messages.push('Hello Finnish up!');
    }

    if(password.value.length >= 16) {
        messages.push('Password must be shorter!');
    }

    if(messages.length > 0) {
        stop.preventDefault();
        error.innerHTML = messages.join(', ');
    }
});