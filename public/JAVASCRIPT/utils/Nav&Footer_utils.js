import { HTML } from "../HTML.js";
import { setImgs, setLinks, date, sendPOSTRequestToSever, sendGETRequestToSever, sendPUTRequestToSever } from "./utils1.js";
export let navbar = document.querySelector('#navbar');
export const footer = document.getElementsByTagName('footer');
export const companyInfo = await sendGETRequestToSever('/Companyinfo');
export let responseContainer = document.querySelectorAll('.prompt-output-container');
export let responseFromAI;
const promptInputs = document.querySelectorAll('.prompt-input');


for(let promptInput of promptInputs) {
    promptInput.addEventListener('keydown', async (e) => {
        if(e.key === 'Enter') {
            try {
                const value = promptInput.value;
                promptInput.value = '';
                const usersInput = document.createElement('p');
                const aiInput = document.createElement('p');
                aiInput.setAttribute('class', 'prompt-output');
                usersInput.textContent = `You: ${value}`;
                aiInput.textContent = await sendPOSTRequestToSever('/CompanyAI/', { Prompt: value });
                responseContainer.forEach(container => {
                    container.append(usersInput);
                    container.append(aiInput);
                })
                const text = new SpeechSynthesisUtterance(aiInput.textContent);
                text.rate = 1.7;
                speechSynthesis.speak(text);
            }
            catch(error) {
                console.log(error);
            }
        }
    })
}

console.log(promptInputs)




// Organizing Data in Arrays
export const navLinks = new Array(10);
navLinks[0] = `/`;
navLinks[1] = `https://github.com/Batking74/Kekes_Model_Website`;
navLinks[2] = `https://batking74.github.io/Portfolio-Website/#contact-section`;
navLinks[3] = `/Contact`;
navLinks[4] = `/Store`;
navLinks[5] = `/Login`;
navLinks[6] = "https://www.facebook.com/kekepalmer";
navLinks[7] = "https://www.instagram.com/keke";
navLinks[8] = "https://twitter.com/KekePalmer";
navLinks[9] = "https://www.youtube.com/channel/UCG7azEZJY5PCsjcUCOdvOPw";
navLinks[10] = "#";
navLinks[11] = "#";
navLinks[12] = "#";
navLinks[13] = "#";
navLinks[14] = "#";
navLinks[15] = "#";
navLinks[16] = "#";
navLinks[17] = "#";
navLinks[18] = "/Register";

export const icons = new Array(20);
icons[0] = `/IMG/Social Media Icons & Logos/Palmer_Logo.webp`;
icons[1] = `/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.webp`;
icons[2] = `/IMG/Social Media Icons & Logos/Palmer_Logo.PNG`;
icons[3] = `/IMG/Social Media Icons & Logos/FaceBook_Icon.webp`;
icons[4] = `/IMG/Social Media Icons & Logos/Instagram_Icon.webp`;
icons[5] = `/IMG/Social Media Icons & Logos/Twitter_Icon.webp`;
icons[6] = `/IMG/Social Media Icons & Logos/YouTube_Icon.webp`;
icons[7] = `/IMG/Social Media Icons & Logos/Black_Phone_Icon.webp`;
icons[8] = `/IMG/Social Media Icons & Logos/Black_Mail_Icon.webp`;
icons[9] = `/IMG/Social Media Icons & Logos/Black_Location_Icon.webp`;
icons[10] = `/IMG/Social Media Icons & Logos/YouTube_Icon.webp`;
icons[11] = `/IMG/Social Media Icons & Logos/YouTube_Icon.webp`;
icons[12] = `/IMG/Social Media Icons & Logos/Black_FaceBook_Icon.webp`;
icons[13] = `/IMG/Social Media Icons & Logos/Black_Instagram_Icon.webp`;
icons[14] = `/IMG/Social Media Icons & Logos/Black_Twitter_Icon.webp`;
icons[15] = `/IMG/Social Media Icons & Logos/Black_YouTube_Icon.webp`;

export const attribute = new Array(10);
attribute[0] = "StoreAnimateGroup1";
attribute[1] = "StoreAnimateGroup2";
attribute[2] = "nav";
attribute[3] = "socialMedia-icons";
attribute[4] = 'Error-Style';
attribute[5] = 'Hide-Error-Style';

// Dynamic Navigation Bar
navbar.innerHTML = HTML.Navbar;

// Dynamic Footer
footer[0].innerHTML = HTML.Footer;
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

export let companyNameElements = document.querySelectorAll('.Company-Name');
export const footerForm = document.getElementById('footerForm');
export const footerLabel = document.getElementById('footerLabel');
export const footerInput = document.getElementById('footerInput');
export const footerBtn = document.getElementById('footerbtn');
export const footerResponse = document.getElementById('footerSubmissionResponse');
export const footerTextResponse = footerResponse.nextElementSibling;

console.log(footerTextResponse)


// Validates Footer Form
async function validate() {
    if(footerInput.value === '') alert("You must fill out!");
    else {
        footerLabel.remove();
        footerInput.remove();
        footerBtn.remove();
        const userData = {
            id: 4,
            Date: date.toUTCString(),
            Email: footerInput.value,
        }
        try {
            const res = await sendPOSTRequestToSever('/Register/ReceiveEmails', userData);
            footerResponse.innerHTML = HTML.FooterInputResponse + res;
        }
        catch (error) {
            console.log(error);
        }
    }
}


// Sets the Social Media Icons on the Contact Page
export function setContactSocialMediaIcons(aEle, imgEle, imgIndex, linkIndex, navLink, icon, attr) {
    aEle[linkIndex].setAttribute('href', navLink);
    imgEle[imgIndex].setAttribute('src', icon);
    imgEle[imgIndex].setAttribute('class', attr);
}


// Sets the contact Companies information on the Contact page
export function setContactInfo(pEle, imgEle, imgIndex, pIndex, icon, companyInfo) {
    imgEle[imgIndex].setAttribute('src', icon);
    pEle[pIndex].textContent = companyInfo;
}


// Displays Company Name on all targeted elements in the Website
export function setCompanyName(name) {
    companyNameElements.forEach(element => {
        element.textContent = name;
    })
}


// Event Listener for Validating Footer Form
footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})


// Toggle Hamburger menu
const hamburgerBtn = document.querySelector('#hamburger-nav');
hamburgerBtn.addEventListener('click', (e) => navbar.classList.toggle('active'));
setCompanyName(companyInfo.CompanyName);