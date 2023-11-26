import { sendPOSTRequestToSever } from "./utils/utils1.js";
import * as navTools from "./utils/Nav&Footer_utils.js";
import { HTML } from "./HTML.js";

// Targeting Elements
const formContactInfo = document.querySelector('.info-container');
const form = document.querySelector('#form');
const inputElement = document.querySelectorAll('.userInput');
const errorElement = document.querySelectorAll('.errorMsg');

// Error Messages
const errorMsg = new Array(5);
errorMsg[0] = 'First name is required!';
errorMsg[1] = 'Email is required!';
errorMsg[2] = 'Last name is required!';
errorMsg[3] = 'Phone number is required!';
errorMsg[4] = 'Message is required';

// Displaying Company Contact Information
formContactInfo.innerHTML = HTML.Contact;
const imgElement = document.querySelectorAll('.Dynamic-img');
const aElement = document.querySelectorAll('.Dynamic-link');
const pElement = document.querySelectorAll('.Dynamic-Data');

navTools.setContactInfo(pElement, imgElement, 1, 0, navTools.icons[7], navTools.companyInfo.PhoneNumber);
navTools.setContactInfo(pElement, imgElement, 2, 1, navTools.icons[8], navTools.companyInfo.Email);
navTools.setContactInfo(pElement, imgElement, 3, 2, navTools.icons[9], navTools.companyInfo.Location);

// FaceBook Icon
navTools.setContactSocialMediaIcons(aElement, imgElement, 4, 1, navTools.navLinks[6], navTools.icons[12], navTools.attribute[3]);

// Instagram Icon
navTools.setContactSocialMediaIcons(aElement, imgElement, 5, 2, navTools.navLinks[7], navTools.icons[13], navTools.attribute[3]);

// Twitter Icon
navTools.setContactSocialMediaIcons(aElement, imgElement, 6, 3, navTools.navLinks[8], navTools.icons[14], navTools.attribute[3]);

// Twitter Icon
navTools.setContactSocialMediaIcons(aElement, imgElement, 7, 4, navTools.navLinks[9], navTools.icons[15], navTools.attribute[3]);


// Validates User input, and if all feilds are valid a POST request is sent to the server.
function validate() {
    let count = 0;
    for(let i = 0; i < inputElement.length; i++) {
        if(inputElement[i].value === '') {
            errorElement[i].innerHTML = errorMsg[i];
            setTimeout(() => errorElement[i].innerHTML = '', 5000);
            count++;
        }
    }
    if(!(count >= 1)) {
        const userSubmission = {
            id: 3,
            Date: Date(),
            Email: inputElement[1].value,
            Firstname: inputElement[0].value,
            Lastname: inputElement[2].value,
            PhoneNumber: inputElement[3].value,
            UserMessage: inputElement[4].value
        };
        submit(userSubmission);
    }
}


// Submits Users Contact Message
async function submit(userSubmission) {
    try {
        const res = await sendPOSTRequestToSever('/Contact', userSubmission);
        console.log(res);
        location.replace('../HTML/Contact_Submission.html');
    }
    catch(error) {
        console.log(error);
    }
}

// Adds Click Event Listener to form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

navTools.footer[0].remove();