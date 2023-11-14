import { date } from "../JAVASCRIPT/ExtraTools.js";
const name = ['Dynamic-img', 'Dynamic-link', 'Dynamic-Data'];
const ad = `../IMG/Ads/Sale_ad_1.jpg`;
const num = [27, 22, 28];
export const HTML = {
    // Contact Page Side Info HTML
    Contact: `
    <h1>Contact<br>Information</h1>
    <p>Fill out the form then click<br>send</p>
    <div class="info-group-1">
        <img class="${name[0]}" width="${num[0]}" height="${num[0]}" alt="Phone Icon">
        <p class="${name[2]}"></p>
    </div>
    <div class="info-group-2">
        <img class="${name[0]}" width="${num[1]}" height="${num[1]}" alt="Mail Icon">
        <p class="${name[2]}"></p>
    </div>
    <div class="info-group-3">
        <img class="${name[0]}" width="${num[2]}" height="${num[2]}" alt="Location Icon">
        <p class="${name[2]}"></p>
    </div>
    <div class="info-group-4">
        <a class="${name[1]}">
            <img class="${name[0]}" alt="FaceBook Logo">
        </a>
        <a class="${name[1]}">
            <img class="${name[0]}" alt="Instagram Icon">
        </a>
        <a class="${name[1]}">
            <img class="${name[0]}" alt="Twitter Icon">
        </a>
        <a class="${name[1]}">
            <img class="${name[0]}" alt="YouTube Icon">
        </a>
    </div>
    `,

    // Store Pages Body HTML
    StoreBody: `
    <header><h1 id="Store-Title"></h1></header>
    <aside style="text-align: center;">
        <img src="${ad}" alt="Sale ad" class="store-ad">
    </aside>
    <section class="Product-Main-Container">
        <div class="title">
            <div><h1>Products | <span id="Store-Title"></span></h1></div>
            <div>
                <select aria-label="Sort Store products" name="Filter" id="Filter">
                    <option value="sort by">Sort by</option>
                    <option value="Best Selling">Best Selling</option>
                    <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                    <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                    <option value="Price, low to high">Price, low to high</option>
                    <option value="Price, high to low">Price, high to low</option>
                </select>
                <span class="counter"><span id="Products-Count"></span> Products</span>
            </div>
            <div><hr></div>
        </div>
    </section>
    <!-- Store Navigation -->
    <nav id="nav-2"></nav>`,

    // Store Products HTML
    StoreProduct: `
    <section class="Product-Container">
        <a href="#" class="itemPageLink">
            <img class="itemImage">
            <div class="Product-Card">
                <span class="Price-Container">
                    <p class="itemDiscount"></p>
                    <p class="itemRegularPrice"></p>
                </span>
                <p class="itemDiscription Product-description"></p>
                <br>
                <p class="itemPercentageOff"></p>
                <p class="Product-Rating"></p>
                <span>
                    <a href="#" class="AddToList">Add to List</a>
                </span>
            </div>
        </a>
    </section>`,

    // Navbar HTML for all Webpages
    Navbar: `
    <a class="${name[1]}">
        <img class="${name[0]}" alt="Company logo.">
    </a>
    <a class="${name[1]}">Home</a>
    <a class="${name[1]}">About</a>
    <a class="${name[1]}">FAQ</a>
    <a class="${name[1]}">Contact</a>
    <a class="${name[1]}">Store</a>
    <a class="${name[1]}">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle login-logo" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>Log in
    </a>`,

    // Footer HTML for all Webpages
    Footer: `
    <!-- Start of footer -->
    <div class="position-footer-container">
        <div class="position-logos">
            <img class="${name[0]}" width="120" height="140" alt="Company logo.">
            <div class="socialMedia-icons-Container">
                <a class="${name[1]}">
                    <img class="${name[0]}" alt="FaceBook Logo">
                </a>
                <a class="${name[1]}">
                    <img class="${name[0]}" alt="Instagram Icon">
                </a>
                <a class="${name[1]}">
                    <img class="${name[0]}" alt="Twitter Icon">
                </a>
                <a class="${name[1]}">
                    <img class="${name[0]}" alt="YouTube Icon">
                </a>
            </div>
        </div>
        <div class="footer-column-a-1">
            <a class="${name[1]}">Support</a>
            <a class="${name[1]}">Contact Us</a>
            <a class="${name[1]}">FAQ</a>
            <a class="${name[1]}">Downloads</a>
            <a class="${name[1]}">Locate A Dealer</a>
            <a class="${name[1]}">Store</a>
            <a class="${name[1]}">Modeling Registration</a>
        </div>
        <div class="footer-column-a-2">
            <a class="${name[1]} Company-Name" aria-label="Palmer Studios"></a>
            <a class="${name[1]}" aria-label=""About "">About <span class="Company-Name"></span></a>
            <a class="${name[1]}">Palmer Designs</a>
            <a class="${name[1]}">Careers</a>
            <a class="${name[1]}">Newsroom</a>
            <a class="${name[1]}">Palmer Access</a>
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
        <p>&copy; copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()} | <span class="Company-Name"></span></p>
    </div>`,
    
    // Footer submit icon HTML
    FooterInputResponse: `<span class="Footer-Response-Icon"><svg viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></span>Thank You, you will recieve emails on new content!`,
}