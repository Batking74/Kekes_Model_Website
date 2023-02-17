import { navStoreBlueprint } from "./Nav&Footer_Blueprint.mjs";
const formContactInfo = document.querySelector('.info-container');
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

navStoreBlueprint[1][0] = "/IMG/Social Media Icons & Logos/Black_FaceBook_Icon.png";
navStoreBlueprint[1][1] = "/IMG/Social Media Icons & Logos/Black_Instagram_Icon.png";
navStoreBlueprint[1][2] = "/IMG/Social Media Icons & Logos/Black_Twitter_Icon.png";
navStoreBlueprint[1][3] = "/IMG/Social Media Icons & Logos/Black_YouTube_Icon.png";

formContactInfo.innerHTML = `
<h1>Contact<br>Information</h1>
<p>Fill out the form then click<br>send</p>
<div class="info-group-1">
    <img width="27" height="27" src="/IMG/Social Media Icons & Logos/Black_Phone_Icon.png" alt="Phone Icon">
    <p>410-459-4859</p>
</div>
<div class="info-group-2">
    <img width="22" height="22" src="/IMG/Social Media Icons & Logos/Black_Mail_Icon.png" alt="Mail Icon">
    <p>Keke@gmail.com</p>
</div>
<div class="info-group-3">
    <img width="28" height="28" src="/IMG/Social Media Icons & Logos/Black_Location_Icon.png" alt="Location Icon">
    <p>7625 Belair Rd,<br>Nottingham, MD 21236</p>
</div>
<div class="info-group-4">
    <a href="${navStoreBlueprint[0][0]}">
        <img width="25" height="25" style="color: red;" class="socialMedia-icons" src="${navStoreBlueprint[1][0]}" alt="FaceBook Logo">
    </a>
    <a href="${navStoreBlueprint[0][1]}">
        <img width="25" height="25" class="socialMedia-icons" src="${navStoreBlueprint[1][1]}" alt="Instagram Icon">
    </a>
    <a href="${navStoreBlueprint[0][2]}">
        <img width="25" height="25" class="socialMedia-icons" src="${navStoreBlueprint[1][2]}" alt="Twitter Icon">
    </a>
    <a href="${navStoreBlueprint[0][3]}">
        <img width="25" height="25" class="socialMedia-icons" src="${navStoreBlueprint[1][3]}" alt="YouTube Icon">
    </a>
</div>
`

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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

console.log(navStoreBlueprint);
navStoreBlueprint[3][0].remove();