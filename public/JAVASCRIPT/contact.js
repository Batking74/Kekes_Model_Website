import { companyInfo, navLinks, icons, attribute, navbar, footer, footerForm, footerInput, footerLabel, footerResponse, footerBtn } from "./Nav&Footer_Blueprint.js";
import { HTML } from "./HTML.js";

// console.log(companyInfo)
// Targeting Elements
const formContactInfo = document.querySelector('.info-container');
const form = document.querySelector('#form');
const inputElement = document.querySelectorAll('#userInput');
const errorElement = document.querySelectorAll('#errorMsg');
const errorMsg = new Array(5);
const baseURL = 'http://localhost:5000/Contact/';

errorMsg[0] = 'First name is required!';
errorMsg[1] = 'Email is required!';
errorMsg[2] = 'Last name is required!';
errorMsg[3] = 'Phone number is required!';
errorMsg[4] = 'Message is required';

formContactInfo.innerHTML = HTML.Contact;

const imgElement = document.querySelectorAll('.Dynamic-img');
const aElement = document.querySelectorAll('.Dynamic-link');
const pElement = document.querySelectorAll('.Dynamic-Data');

// Contact Information Attributes: Phone Number
imgElement[1].setAttribute('src', icons[7]);
pElement[0].textContent = companyInfo[0];

// Email
imgElement[2].setAttribute('src', icons[8]);
pElement[1].textContent = companyInfo[1];

// Location
imgElement[3].setAttribute('src', icons[9]);
pElement[2].textContent = companyInfo[2];

// Social Media: FaceBook Icon
aElement[1].setAttribute('href', navLinks[6]);
imgElement[4].setAttribute('src', icons[12]);
imgElement[4].setAttribute('class', attribute[3]);

// Instagram Icon
aElement[2].setAttribute('href', navLinks[7]);
imgElement[5].setAttribute('src', icons[13]);
imgElement[5].setAttribute('class', attribute[3]);

// Twitter Icon
aElement[3].setAttribute('href', navLinks[8]);
imgElement[6].setAttribute('src', icons[14]);
imgElement[6].setAttribute('class', attribute[3]);

// Twitter Icon
aElement[4].setAttribute('href', navLinks[9]);
imgElement[7].setAttribute('src', icons[15]);
imgElement[7].setAttribute('class', attribute[3]);

inputElement[3].addEventListener('input', () => {
    const inputLength = inputElement[3].value.length;
        if(inputLength > 2 && inputLength < 4) {
            inputElement[3].value = inputElement[3].value + '-';
        }
        else if(inputLength > 6 && inputLength < 8) {
            inputElement[3].value = inputElement[3].value + '-';
        }
})

function validate() {
    let count = 0;
    for(let i = 0; i < inputElement.length; i++) {
        if(inputElement[i].value == '') {
            errorElement[i].innerHTML = errorMsg[i];
            setTimeout(() => errorElement[i].innerHTML = '', 5000);
            count++;
        }
    }
    if(!(count >= 1)) {
        console.log('Form Completed Submitting...');
        const userSubmission = {
                Date: Date(),
                Email: inputElement[1].value,
                First_name: inputElement[0].value,
                Last_name: inputElement[2].value,
                Phone_Number: inputElement[3].value,
                User_Message: inputElement[4].value
            };
            console.log(userSubmission)
            postToServer(userSubmission);
    }
}

async function postToServer(data) {
    await fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(res => {
            console.log(res);
            localStorage.setItem('New Contact Message', JSON.stringify(data));
            form.reset();
        })
        .catch(reject => { console.log(reject); })
}
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

footer[0].remove();