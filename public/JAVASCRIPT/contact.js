import { HTML } from "./HTML.js";
import { sendPOSTRequestToSever } from "./ExtraTools.js";
import { navLinks, icons, attribute, footer, setContactSocialMediaIcons, setContactInfo, companyInfo } from "./Nav&Footer_Blueprint.js";

// Targeting Elements
const formContactInfo = document.querySelector('.info-container');
const form = document.querySelector('#form');
const inputElement = document.querySelectorAll('#userInput');
const errorElement = document.querySelectorAll('#errorMsg');
const errorMsg = new Array(5);
errorMsg[0] = 'First name is required!';
errorMsg[1] = 'Email is required!';
errorMsg[2] = 'Last name is required!';
errorMsg[3] = 'Phone number is required!';
errorMsg[4] = 'Message is required';

formContactInfo.innerHTML = HTML.Contact;
const imgElement = document.querySelectorAll('.Dynamic-img');
const aElement = document.querySelectorAll('.Dynamic-link');
const pElement = document.querySelectorAll('.Dynamic-Data');

setContactInfo(pElement, imgElement, 1, 0, icons[7], companyInfo.PhoneNumber);
setContactInfo(pElement, imgElement, 2, 1, icons[8], companyInfo.Email);
setContactInfo(pElement, imgElement, 3, 2, icons[9], companyInfo.Location);
// FaceBook Icon
setContactSocialMediaIcons(aElement, imgElement, 4, 1, navLinks[6], icons[12], attribute[3]);
// Instagram Icon
setContactSocialMediaIcons(aElement, imgElement, 5, 2, navLinks[7], icons[13], attribute[3]);
// Twitter Icon
setContactSocialMediaIcons(aElement, imgElement, 6, 3, navLinks[8], icons[14], attribute[3]);
// Twitter Icon
setContactSocialMediaIcons(aElement, imgElement, 7, 4, navLinks[9], icons[15], attribute[3]);

async function validate() {
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
        const res = await sendPOSTRequestToSever('/Contact', userSubmission);
        console.log(res)

    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})
footer[0].remove();


fetch('/Register', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify('hello')
}).then(res => console.log(res))