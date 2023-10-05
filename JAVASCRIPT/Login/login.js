import { companyInfo, navLinks, icons, attribute, navbar, footer, footerForm, footerInput, footerLabel, footerResponse, footerBtn } from "../Nav&Footer_Blueprint.js";
import { sendDELETERequestToSever, sendPOSTRequestToSever, sendPUTRequestToSever, displayError, date } from "../ExtraTools.js";

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
        const userCredentials = [date.toUTCString(), inputElement[0].value, inputElement[1].value];
        fetch('/users')
        .then(res => { return res.json(); })
        .then(DB => {
            if(DB.length === 0) error(3);
            else {
                for(let i = 0; i < DB.length; i++) {
                    if(DB[i].Username === userCredentials[1] && DB[i].Password === userCredentials[2]) {
                        console.log('Welcome');
                        // location.replace()
                    }
                    else error(3);
                }
            }
        })
        .catch(err => { return err; });
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
    displayError(errorElement, attribute[4], attribute[5], 1);
    errorElement.innerHTML = errorMsg[i];
    setTimeout(() => displayError(errorElement, attribute[5], attribute[4], 1), 4000);
}

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.replace('/HTML/Login/Registration.html');
})
footer[0].remove();