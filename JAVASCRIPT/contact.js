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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

function validate() {
    new Promise((resolve, reject) => {
        if (firstName.value === '' || null || undefined) {
            let fNameError = 'First name is required!';
            reject(fNameError);
            firstNameError.innerHTML = fNameError;
        }
        else if (lastName.value === '' || null || undefined) {
            let lNameError = 'Last name is required!';
            reject(lNameError);
            lastNameError.innerHTML = lNameError;
        }
        else if (email.value === '' || null || undefined) {
            let mailError = 'Email is required!';
            reject(mailError);
            emailError.innerHTML = mailError;
        }
        else if (phoneNumber.value === '' || null || undefined) {
            let phone = 'Phone number is required!';
            reject(phone);
            phoneNumberError.innerHTML = phone;
        }
        else if (userMessage.value === '' || null || undefined) {
            let msg = 'Message is required';
            reject(msg);
            messageError.innerHTML = msg;
        }
        else {
            resolve('Form Completed Submitting...');
        }
    })
    .then(getData => {
        console.log(getData);
        const userContactSubmission = [{
            id: Date.now(),
            First_name: firstName.value,
            Last_name: lastName.value,
            Email: email.value,
            Phone_Number: phoneNumber.value,
            User_Message: userMessage.value
        }];
        console.log(userContactSubmission);
        localStorage.setItem('New Contact Message', JSON.stringify(userContactSubmission));
    })
    .then(complete => {
        console.log(complete);
        form.reset();
        // location.replace('/HTML/contactAction.html');
    })
    .catch(reject => {
        console.log(reject);
    })
}