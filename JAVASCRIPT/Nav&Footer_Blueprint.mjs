export const navbar = document.querySelector('#navbar');
export const footer = document.getElementsByTagName('footer');
export const date = new Date();

// Arrays
export const navLinks = new Array(10);
navLinks[0] = "/HTML/index.html";
navLinks[1] = "/HTML/About.html";
navLinks[2] = "/HTML/FAQ.html";
navLinks[3] = "/HTML/Contact.html";
navLinks[4] = "/HTML/Store/Page 1/Store_1.html";
navLinks[5] = "/HTML/Login.html";

export const icons = new Array(10);
icons[0] = "/IMG/Social Media Icons & Logos/Palmer_Logo.PNG";
icons[1] = "/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png";
icons[2] = "/IMG/Social Media Icons & Logos/Palmer_Logo.PNG";
icons[3] = "/IMG/Social Media Icons & Logos/FaceBook_Icon.png";
icons[4] = "/IMG/Social Media Icons & Logos/Instagram_Icon.png";
icons[5] = "/IMG/Social Media Icons & Logos/Twitter_Icon.png";
icons[6] = "/IMG/Social Media Icons & Logos/YouTube_Icon.png";

export let animate = new Array(2);

animate[0] = "StoreAnimateGroup1";
animate[1] = "StoreAnimateGroup2";


// Dynamic Navigation Bar
navbar.innerHTML = `
<a href="${navLinks[6]}">
    <img src="${icons[0]}" alt="Palmer Studios logo.">
</a>
<a class="${animate[0]}" href="${navLinks[0]}">Home</a>
<a class="${animate[0]} nav" href="${navLinks[1]}">About</a>
<a class="${animate[0]} nav" href="${navLinks[2]}">FAQ</a>
<a class="${animate[1]} nav" href="${navLinks[3]}">Contact</a>
<a class="${animate[1]} nav" href="${navLinks[4]}">Store</a>
<a class="${animate[1]} nav" href="${navLinks[5]}">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle login-logo" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>Log in
</a>`
    
// Dynamic Footer
footer[0].innerHTML = `
<!-- Start of footer -->
<div class="position-footer-container">
    <div class="position-logos">
        <img width="120" height="140" src="${icons[2]}" alt="Palmer Studios logo.">
        <div class="socialMedia-icons-Container">
            <a href="https://www.facebook.com/kekepalmer">
                <img class="socialMedia-icons" src="${icons[3]}" alt="FaceBook Logo">
            </a>
            <a href="https://www.instagram.com/keke/">
                <img class="socialMedia-icons" src="${icons[4]}" alt="Instagram Icon">
            </a>
            <a href="https://twitter.com/KekePalmer">
                <img class="socialMedia-icons" src="${icons[5]}" alt="Twitter Icon">
            </a>
            <a href="https://www.youtube.com/channel/UCG7azEZJY5PCsjcUCOdvOPw">
                <img class="socialMedia-icons" src="${icons[6]}" alt="YouTube Icon">
            </a>
        </div>
    </div>
    <div class="footer-column-a-1">
        <a href="${navLinks[6]}">Support</a>
        <a href="${navLinks[3]}">Contact Us</a>
        <a href="${navLinks[2]}">FAQ</a>
        <a href="${navLinks[6]}">Downloads</a>
        <a href="${navLinks[6]}">Locate A Dealer</a>
        <a href="${navLinks[4]}">Store</a>
        <a href="${navLinks[6]}">Modeling Registration</a>
    </div>
    <div class="footer-column-a-2">
        <a href="${navLinks[6]}">Palmer Studios</a>
        <a href="${navLinks[1]}">About Palmer Studios</a>
        <a href="${navLinks[6]}">Palmer Designs</a>
        <a href="${navLinks[6]}">Careers</a>
        <a href="${navLinks[6]}">Newsroom</a>
        <a href="${navLinks[6]}">Palmer Access</a>
    </div>
    <form id="footerForm" class="last-footer-col">
        <p id="footerLabel">Stay up to date on the latest modeling show</p>
        <br>
        <input id="footerInput" placeholder="Enter your e-mail address" type="email">
        <br>
        <p id="footerSubmissionResponse"></p>
        <button type="submit" id="footerbtn">Sign Up</button>
    </form>
</div>
<div class="copyright">
    <br>
    <hr>
    <br>
    <p>&copy; copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()}</p>
</div>`

export const footerForm = document.getElementById('footerForm');
export const footerLabel = document.getElementById('footerLabel');
export const footerInput = document.getElementById('footerInput');
export const footerBtn = document.getElementById('footerbtn');
export const footerResponse = document.getElementById('footerSubmissionResponse');

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

function validate() {
    if(footerInput.value == '') {
        alert("You must fill out!")
    }
    else {
        footerLabel.remove()
        footerInput.remove();
        footerBtn.remove();
        console.log('Thank You, you will recieve emails on new content!')
        footerResponse.innerHTML = `<span class="Footer-Response-Icon"><svg viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></span>Thank You, you will recieve emails on new content!`
    }
}

export const navStoreBlueprint = new Array(15);
navStoreBlueprint[0] = navLinks;
navStoreBlueprint[1] = icons;
navStoreBlueprint[2] = animate;
navStoreBlueprint[3] = navbar;
navStoreBlueprint[4] = footer;
navStoreBlueprint[5] = footerForm;
navStoreBlueprint[6] = footerInput;
navStoreBlueprint[7] = footerLabel;
navStoreBlueprint[8] = footerResponse;
navStoreBlueprint[9] = footerBtn;
navStoreBlueprint[10] = date;

