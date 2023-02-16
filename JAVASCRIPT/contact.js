import { navStoreBlueprint } from "./Nav&Footer_Blueprint.mjs";

const contactContainer = document.querySelector('.main-container');
const form = document.querySelector('#form');
const firstName = document.querySelector('#first_Name');
const lastName = document.querySelector('#last_Name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#Phone_number');
const button = document.querySelector('#btn');
const userMessage = document.querySelector('#textAreaMessage');
const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const phoneNumberError = document.querySelector('#phoneNumberError');
const messageError = document.querySelector('#messageError');
const userData = [firstName, lastName, email, phoneNumber, userMessage];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

// if(userData.forEach())

function validate() {
    new Promise((resolve, reject) => {
        if (firstName.value === '') {
            let fNameError = 'First name is required!';
            reject(fNameError);
            firstNameError.innerHTML = fNameError;
            setTimeout(() => firstNameError.remove(), 5000);
        }
        else if (lastName.value === '') {
            let lNameError = 'Last name is required!';
            reject(lNameError);
            lastNameError.innerHTML = lNameError;
            setTimeout(() => lastNameError.remove(), 5000);
        }
        else if (email.value === '') {
            let mailError = 'Email is required!';
            reject(mailError);
            emailError.innerHTML = mailError;
            setTimeout(() => emailError.remove(), 5000);
        }
        else if (phoneNumber.value === '') {
            let phone = 'Phone number is required!';
            reject(phone);
            phoneNumberError.innerHTML = phone;
            setTimeout(() => phoneNumberError.remove(), 5000);
        }
        else if (userMessage.value === '') {
            let msg = 'Message is required';
            reject(msg);
            messageError.innerHTML = msg;
            setTimeout(() => messageError.remove(), 5000);
        }
        else {
            resolve('Form Completed Submitting...');
        }
    })
    .then(getData => {
        console.log(getData);
        const userSubmission = [{
            Date: Date(),
            First_name: firstName.value,
            Last_name: lastName.value,
            Email: email.value,
            Phone_Number: phoneNumber.value,
            User_Message: userMessage.value
        }];
        console.log(userSubmission);
        localStorage.setItem('New Contact Message', JSON.stringify(userSubmission));
    })
    .then(complete => {
        console.log(complete);
        form.reset();
        // location.replace('/HTML/Contact_Submission.html');
    })
    .catch(reject => {
        console.log(reject);
    })
}