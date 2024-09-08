// Importing Modules
import { displayError } from "../Nav_and_Footer/utils/utils.js";
import { attribute } from "../Nav_and_Footer/utils/nav&footer_data.js";
import { footer } from "../Nav_and_Footer/Nav&Footer.js";
import { date } from "../helpers/helper.js";


// Declaring and Initalizing Variables | Targeting DOM Elements
const submitBtn = document.getElementById('submit-btn');
const signUpBtn = document.querySelector('.signup-btn');
const inputElement = document.querySelectorAll('.userInput');
const checkbox = document.getElementById('checkbox');
const errorElement = document.getElementById('error');


// Error Messages to be displayed
const errorMsg = [
    'Username is Required!',
    'Password is Required!',
    'Username and Password is Required',
    'Username or Password is incorrect No user found',
    'This Username already exists',
    'This password already exists'
];


// Event listener for form submission
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Checking if form inputs are valid
    if(valid()) {
        const userCredentials = [ date.toUTCString(), inputElement[0].value, inputElement[1].value ];
        fetch('/Login/Users')
        .then(res => { return res.json(); })
        // Check if user credentials match any records, and Display error if no records found
        .then(DB => {
            if(DB.length === 0) error(3);
            else searchForUser(DB, userCredentials);
        })
        .catch(err => { return err; });
    }
})


// Searches for the users credentials in database
function searchForUser(DB, userCredentials) {
    for(let i = 0; i < DB.length; i++) {
        // Checking for matching username and password
        if(DB[i].Username === userCredentials[1] && DB[i].Password === userCredentials[2]) {
            console.log('Welcome');
            // location.replace();
        }
         // Displaying error for incorrect credentials
        else error(3);
    }
}


// Checks to make sure the users input is a valid input
function valid() {
    let count = 0;
    for(let i = 0; i < inputElement.length; i++) {
        if(inputElement[i].value === '') {
            if((count + 1) === 2) error(i + 1); else error(i); count++;
        }
    }
    if(!(count >= 1)) return true;
}


// Displays an error with a unique message based on the users input
function error(i) {
    displayError(errorElement, attribute[4], attribute[5], 1);
    errorElement.innerHTML = errorMsg[i];
    setTimeout(() => displayError(errorElement, attribute[5], attribute[4], 1), 4000);
}


// Event listener for sign-up button click
signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.replace('/Register');
})


// Removing Footer
footer[0].remove();