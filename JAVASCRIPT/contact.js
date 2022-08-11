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
            setTimeout(() => firstNameError.remove(), 5000);
        }
        else if (lastName.value === '' || null || undefined) {
            let lNameError = 'Last name is required!';
            reject(lNameError);
            lastNameError.innerHTML = lNameError;
            setTimeout(() => lastNameError.remove(), 5000);
        }
        else if (email.value === '' || null || undefined) {
            let mailError = 'Email is required!';
            reject(mailError);
            emailError.innerHTML = mailError;
            setTimeout(() => emailError.remove(), 5000);
        }
        else if (phoneNumber.value === '' || null || undefined) {
            let phone = 'Phone number is required!';
            reject(phone);
            phoneNumberError.innerHTML = phone;
            setTimeout(() => phoneNumberError.remove(), 5000);
        }
        else if (userMessage.value === '' || null || undefined) {
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
        const userContactSubmission = [{
            Date: Date(),
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

// Footer
const footerForm = document.getElementById('footerForm');
const footerInput = document.getElementById('footerInput');
const footerBtn = document.getElementById('footerbtn');
const footerResponse = document.getElementById('footerSubmissionResponse');
const footerLabel = document.getElementById('footerLabel');
footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(footerInput.value == '') {
    }
    else {
        footerLabel.remove()
        footerInput.remove();
        footerBtn.remove();
        console.log('Thank You, you will recieve emails on new content!')
        footerResponse.innerHTML = `<svg class="Footer-Response-Icon" viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>Thank You, you will recieve emails on new content!`
    }
})