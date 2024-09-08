// Importing Modules
import { sendGETRequestToSever } from "../helpers/request_methods.js";
import { icons, navLinks, attribute } from "./utils/nav&footer_data.js";
import { setImgs, setLinks, displayResponse, setCompanyName } from "./utils/utils.js";
import { handleAndLogError, date } from "../helpers/helper.js";
import { promptTransfomer } from "./utils/Transformer.js";
import { HTML } from "../HTML.js";


// Declaring and Initializing Variables
export let responseContainer = document.querySelectorAll('.prompt-output-container');
const promptInputs = document.querySelectorAll('.prompt-input');
export const footer = document.getElementsByTagName('footer');
export let navbar = document.querySelector('#navbar');
export let responseFromAI;
export let companyInfo;


// Retrieving Company Data to display on Frontend
try {
    companyInfo = await sendGETRequestToSever('/Companyinfo');
}
catch(error) {
    handleAndLogError('Nav&Footer file companyInfo', error);
}


// Init Transformer Model
initTransformerModel();


// Allows user to chat with Ai Transformer Model
function initTransformerModel() {
    for(let promptInput of promptInputs) {
        promptInput.addEventListener('keydown', async (e) => {
            if(e.key === 'Enter') {
                promptTransfomer(promptInput);
            }
        })
    }
}


// Display HTML for Navbar and Footer
navbar.innerHTML = HTML.Navbar;
footer[0].innerHTML = HTML.Footer;


// Dynamic Footer
export const aElement = document.querySelectorAll('.Dynamic-link');
export const imgElement = document.querySelectorAll('.Dynamic-img');
setImgs(imgElement, attribute, icons);
setLinks(aElement, attribute, navLinks, 3);
setLinks(aElement, attribute, navLinks, 2);
setLinks(aElement, attribute, navLinks, 11);
setLinks(aElement, attribute, navLinks, 12);
setLinks(aElement, attribute, navLinks, 4);
setLinks(aElement, attribute, navLinks, 13);
setLinks(aElement, attribute, navLinks, 0);
setLinks(aElement, attribute, navLinks, 1);
setLinks(aElement, attribute, navLinks, 14);
setLinks(aElement, attribute, navLinks, 15);
setLinks(aElement, attribute, navLinks, 16);
setLinks(aElement, attribute, navLinks, 17);


// Declaring and Initalizing Variables for Footer | Targeting footer elements
export let companyNameElements = document.querySelectorAll('.Company-Name');
export const footerForm = document.getElementById('footerForm');
export const footerLabel = document.getElementById('footerLabel');
export const footerInput = document.getElementById('footerInput');
export const footerBtn = document.getElementById('footerbtn');
export const footerResponse = document.getElementById('footerSubmissionResponse');
export const footerTextResponse = footerResponse.nextElementSibling;


// Validates Footer Form
async function validateNewsLetterSignUp() {
    if(footerInput.value === '') alert("You must fill out!");
    else {
        footerLabel.remove();
        footerInput.remove();
        footerBtn.remove();
        const userData = {
            id: 4,
            Date: date.toUTCString(),
            // Sanitize Data
            Email: footerInput.value,
        }
        displayResponse(userData);
    }
}


// Sets the Social Media Icons on the Contact Page
export function setContactSocialMediaIcons(aEle, imgEle, imgIndex, linkIndex, navLink, icon, attr) {
    aEle[linkIndex].setAttribute('href', navLink);
    imgEle[imgIndex].setAttribute('src', icon);
    imgEle[imgIndex].setAttribute('class', attr);
}


// Sets the Companies information on the Contact page
export function setContactInfo(pEle, imgEle, imgIndex, pIndex, icon, companyInfo) {
    imgEle[imgIndex].setAttribute('src', icon);
    pEle[pIndex].textContent = companyInfo;
}


// Event Listener for Validating Footer Form
footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateNewsLetterSignUp();
})


// Toggle Hamburger menu
const hamburgerBtn = document.querySelector('#hamburger-nav');
hamburgerBtn.addEventListener('click', (e) => navbar.classList.toggle('active'));


// Displays Company Name on all targeted elements in the Website
setCompanyName(companyInfo.CompanyName);