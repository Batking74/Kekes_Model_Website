// Dynamic HTML Pages
export function getHTMLDOC() {
    navbar.innerHTML = `
    <a href="${navLinks[6]}">
        <img src="${icons[0]}" alt="Palmer Studios logo.">
    </a>
    <a class="nav-animate-group1" href="${navLinks[0]}">Home</a>
    <a class="nav-animate-group1 nav" href="${navLinks[1]}">About</a>
    <a class="nav-animate-group1 nav" href="${navLinks[2]}">FAQ</a>
    <a class="nav-animate-group2 nav" href="${navLinks[3]}">Contact</a>
    <a class="nav-animate-group2 nav" href="${navLinks[4]}">Store</a>
    <a class="nav-animate-group2" href="${navLinks[5]}">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle login-logo" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>Log in
    </a>
`

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
}