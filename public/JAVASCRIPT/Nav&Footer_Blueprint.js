import { HTML } from "./HTML.js";
export let navbar = document.querySelector('#navbar');
export const footer = document.getElementsByTagName('footer');
export const companyInfo = new Array(0);

fetch('/companyinfo')
.then(res => res.json())
.then(data => {
    setCompanyName(data.CompanyName)
})

// Organizing Data in Arrays
export const navLinks = new Array(10);
navLinks[0] = `/`;
navLinks[1] = `/About`;
navLinks[2] = `/FAQ`;
navLinks[3] = `/Contact`;
navLinks[4] = `/Palmerstore`;
navLinks[5] = `/Login`;
navLinks[6] = "https://www.facebook.com/kekepalmer";
navLinks[7] = "https://www.instagram.com/keke";
navLinks[8] = "https://twitter.com/KekePalmer";
navLinks[9] = "https://www.youtube.com/channel/UCG7azEZJY5PCsjcUCOdvOPw";
navLinks[10] = "/Register";
navLinks[11] = "#";

export const icons = new Array(20);
icons[0] = `/IMG/Social Media Icons & Logos/Palmer_Logo.PNG`;
icons[1] = `/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png`;
icons[2] = `/IMG/Social Media Icons & Logos/Palmer_Logo.PNG`;
icons[3] = `/IMG/Social Media Icons & Logos/FaceBook_Icon.png`;
icons[4] = `/IMG/Social Media Icons & Logos/Instagram_Icon.png`;
icons[5] = `/IMG/Social Media Icons & Logos/Twitter_Icon.png`;
icons[6] = `/IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[7] = `/IMG/Social Media Icons & Logos/Black_Phone_Icon.png`;
icons[8] = `/IMG/Social Media Icons & Logos/Black_Mail_Icon.png`;
icons[9] = `/IMG/Social Media Icons & Logos/Black_Location_Icon.png`;
icons[10] = `/IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[11] = `/IMG/Social Media Icons & Logos/YouTube_Icon.png`;
icons[12] = `/IMG/Social Media Icons & Logos/Black_FaceBook_Icon.png`;
icons[13] = `/IMG/Social Media Icons & Logos/Black_Instagram_Icon.png`;
icons[14] = `/IMG/Social Media Icons & Logos/Black_Twitter_Icon.png`;
icons[15] = `/IMG/Social Media Icons & Logos/Black_YouTube_Icon.png`;

export const attribute = new Array(10);
attribute[0] = "StoreAnimateGroup1";
attribute[1] = "StoreAnimateGroup2";
attribute[2] = "nav";
attribute[3] = "socialMedia-icons";

// Dynamic Navigation Bar
navbar.innerHTML = HTML.Navbar;

// Dynamic Footer
footer[0].innerHTML = HTML.Footer;
export const aElement = document.querySelectorAll('.Dynamic-link');
export const imgElement = document.querySelectorAll('.Dynamic-img');

// Palmer Studios Logo Attributes
aElement[0].setAttribute('href', `${navLinks[11]}`);
imgElement[0].setAttribute('src', `${icons[0]}`);

// Home Navigation Attributes
aElement[1].setAttribute('class', `${attribute[0]} ${attribute[2]}`);
aElement[1].setAttribute('href', `${navLinks[0]}`);

// About Navigation Attributes
aElement[2].setAttribute('class', `${attribute[0]} ${attribute[2]}`);
aElement[2].setAttribute('href', `${navLinks[1]}`);

// FAQ Navigation Attributes
aElement[3].setAttribute('class', `${attribute[0]} ${attribute[2]}`);
aElement[3].setAttribute('href', `${navLinks[2]}`);

// Contact Navigation Attributes
aElement[4].setAttribute('class', `${attribute[1]} ${attribute[2]}`);
aElement[4].setAttribute('href', `${navLinks[3]}`);

// Store Navigation Attributes
aElement[5].setAttribute('class', `${attribute[1]} ${attribute[2]}`);
aElement[5].setAttribute('href', `${navLinks[4]}`);

// Login Navigation Attributes
aElement[6].setAttribute('class', `${attribute[1]} ${attribute[2]}`);
aElement[6].setAttribute('href', `${navLinks[5]}`);

// Palmer Studios Logo
imgElement[1].setAttribute('src', `${icons[0]}`);

// Facebook Icon Attributes
imgElement[2].setAttribute('src', `${icons[3]}`);
imgElement[2].setAttribute('class', `${attribute[3]}`);
aElement[7].setAttribute('href', `${navLinks[6]}`);

// Instagram Icon Attributes
imgElement[3].setAttribute('src', `${icons[4]}`);
imgElement[3].setAttribute('class', `${attribute[3]}`);
aElement[8].setAttribute('href', `${navLinks[7]}`);

// // Twitter Icon Attributes
imgElement[4].setAttribute('src', `${icons[5]}`);
imgElement[4].setAttribute('class', `${attribute[3]}`);
aElement[9].setAttribute('href', `${navLinks[8]}`);

// // YouTube Icon Attributes
imgElement[5].setAttribute('src', `${icons[6]}`);
imgElement[5].setAttribute('class', `${attribute[3]}`);
aElement[10].setAttribute('href', `${navLinks[9]}`);

// Other Links
aElement[11].setAttribute('href', `${navLinks[11]}`);
aElement[12].setAttribute('href', `${navLinks[3]}`);
aElement[13].setAttribute('href', `${navLinks[2]}`);
aElement[14].setAttribute('href', `${navLinks[11]}`);
aElement[15].setAttribute('href', `${navLinks[11]}`);
aElement[16].setAttribute('href', `${navLinks[4]}`);
aElement[17].setAttribute('href', `${navLinks[11]}`);
aElement[18].setAttribute('href', `${navLinks[0]}`);
aElement[19].setAttribute('href', `${navLinks[1]}`);
aElement[20].setAttribute('href', `${navLinks[11]}`);
aElement[21].setAttribute('href', `${navLinks[11]}`);
aElement[22].setAttribute('href', `${navLinks[11]}`);
aElement[23].setAttribute('href', `${navLinks[11]}`);

export let companyName = document.querySelectorAll('#Company-Name');
export const footerForm = document.getElementById('footerForm');
export const footerLabel = document.getElementById('footerLabel');
export const footerInput = document.getElementById('footerInput');
export const footerBtn = document.getElementById('footerbtn');
export const footerResponse = document.getElementById('footerSubmissionResponse');

async function validate() {
    if(footerInput.value == '') {
        alert("You must fill out!");
        }
        else {
            footerLabel.remove();
            footerInput.remove();
            footerBtn.remove();
            console.log('Thank You, you will recieve emails on new content!')
            sendToBackend(footerInput.value);
            footerResponse.innerHTML = HTML.FooterInputResponse;
        }
    }

    function sendToBackend(email) {
        console.log('Done!');
    }
    
    export function setCompanyName(name) {
        companyName.forEach(element => { element.innerHTML = name; })
    }
    
    footerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validate();
})