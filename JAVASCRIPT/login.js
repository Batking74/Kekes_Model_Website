import * as navTools from "../JAVASCRIPT/Nav&Footer_Blueprint.js";
import * as tools from "../JAVASCRIPT/ExtraTools.js";

const submitBtn = document.getElementById('submit-btn');
const signUpBtn = document.querySelector('.signup-btn');
const inputElement = document.querySelectorAll('.userInput');
const checkbox = document.getElementById('checkbox');
const errorElement = document.getElementById('error');
const errorMsg = [
    'Username is Required!',
    'Password is Required!',
    'Username and Password is Required',
    'Username or Password is incorrect No user found',
    'This Username already exists',
    'This password already exists'];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(valid()) {
        const userCredentials = [tools.date.toUTCString(), inputElement[0].value, inputElement[1].value];
        success(`Welcome! ${userCredentials[1]}`);
    }
})

function valid() {
    let count = 0;
    for(let i = 0; i < inputElement.length; i++) {
        if(inputElement[i].value === '') { if((count + 1) === 2) error(i + 1); else error(i); count++; }
    }
    if(!(count >= 1)) return true;
}

function error(i) {
    tools.displayError(errorElement, navTools.attribute[4], navTools.attribute[5], 1);
    errorElement.innerHTML = errorMsg[i];
    setTimeout(() => tools.displayError(errorElement, navTools.attribute[5], navTools.attribute[4], 1), 4000);
}

function success(message) {
    tools.displayError(errorElement, navTools.attribute[4], navTools.attribute[5], 1);
    errorElement.style.background = 'green';
    errorElement.innerHTML = message;
    setTimeout(() => tools.displayError(errorElement, navTools.attribute[5], navTools.attribute[4], 1), 4000);
}

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.replace('../HTML/Registration.html');
})
navTools.footer[0].remove();