import { HTML } from "./HTML.js";
import { setImgs, setLinks, date } from "./ExtraTools.js";
export let navbar = document.querySelector('#navbar');
export const footer = document.getElementsByTagName('footer');

export const companyInfo = {
    CompanyName: 'Palmer Studios',
    PhoneNumber: '410-895-4859',
    Email: 'Keke@gmail.com',
    Location: '7625 Belair Rd, Nottingham, MD 21236',
    Website: 'https://batking74.github.io/Kekes_Model_Website/'
}

// Organizing Data in Arrays
export const navLinks = new Array(10);
navLinks[0] = `http://127.0.0.1:5500/index.html`;
navLinks[1] = `https://github.com/Batking74/Kekes_Model_Website/tree/frontend`;
navLinks[2] = `https://batking74.github.io/Portfolio-Website/#contact-section`;
navLinks[3] = `./HTML/Contact.html`;
navLinks[4] = `./HTML/Store/Store_1.html`;
navLinks[5] = `./HTML/Login/Login.html`;
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
navLinks[18] = "./HTML/Login/Registration.html";

export const icons = new Array(20);
icons[0] = `./IMG/Social Media Icons & Logos/Palmer_Logo.PNG`;
icons[1] = `./IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png`;
icons[2] = `./IMG/Social Media Icons & Logos/Palmer_Logo.PNG`;
icons[3] = `./IMG/Social Media Icons & Logos/FaceBook_Icon.png`;
icons[4] = `./IMG/Social Media Icons & Logos/Instagram_Icon.png`;
icons[5] = `./IMG/Social Media Icons & Logos/Twitter_Icon.png`;
icons[6] = `./IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[7] = `./IMG/Social Media Icons & Logos/Black_Phone_Icon.png`;
icons[8] = `./IMG/Social Media Icons & Logos/Black_Mail_Icon.png`;
icons[9] = `./IMG/Social Media Icons & Logos/Black_Location_Icon.png`;
icons[10] = `./IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[11] = `./IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[12] = `./IMG/Social Media Icons & Logos/Black_FaceBook_Icon.png`;
icons[13] = `./IMG/Social Media Icons & Logos/Black_Instagram_Icon.png`;
icons[14] = `./IMG/Social Media Icons & Logos/Black_Twitter_Icon.png`;
icons[15] = `./IMG/Social Media Icons & Logos/Black_YouTube_Icon.png`;

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

export let companyNameElements = document.querySelectorAll('#Company-Name');
export const footerForm = document.getElementById('footerForm');
export const footerLabel = document.getElementById('footerLabel');
export const footerInput = document.getElementById('footerInput');
export const footerBtn = document.getElementById('footerbtn');
export const footerResponse = document.getElementById('footerSubmissionResponse');

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
        footerResponse.innerHTML = HTML.FooterInputResponse;
    }
}

export function setContactSocialMediaIcons(aEle, imgEle, imgIndex, linkIndex, navLink, icon, attr) {
    aEle[linkIndex].setAttribute('href', navLink);
    imgEle[imgIndex].setAttribute('src', icon);
    imgEle[imgIndex].setAttribute('class', attr);
}

export function setContactInfo(pEle, imgEle, imgIndex, pIndex, icon, companyInfo) {
    imgEle[imgIndex].setAttribute('src', icon);
    pEle[pIndex].textContent = companyInfo;
}

export function setCompanyName(name) {
    companyNameElements.forEach(element => { element.innerHTML = name; })
}

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

// Toggle Hamburger menu
const hamburgerBtn = document.querySelector('#hamburger-nav');
hamburgerBtn.addEventListener('click', (e) => navbar.classList.toggle('active'));
setCompanyName(companyInfo.CompanyName)