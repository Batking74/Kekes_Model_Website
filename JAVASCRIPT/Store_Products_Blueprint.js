// Targeting Elements
export const navbar = document.querySelector('#navbar');
export const pageName = document.querySelectorAll('#Page-Name');
export const companyName = document.querySelectorAll('#Company-Name');
export const storeTitle = document.querySelectorAll('#Store-Title');
export const productCount = document.querySelector('#Products-Count');
export const productMainContainer = document.querySelector('.Product-Main-Container');
export const nextPage = document.getElementById('Next-Page');
export const sideNavigation = document.querySelector('.nav-container');
export const openMenu = document.querySelector('#menu-open')
export const storeNavigation = document.querySelector('.nav-2');
export const footer = document.getElementsByTagName('footer');
export const footerForm = document.getElementById('footerForm');
export const footerInput = document.getElementById('footerInput');
export const footerBtn = document.getElementById('footerbtn');
export const footerResponse = document.getElementById('footerSubmissionResponse');
export const footerLabel = document.getElementById('footerLabel');
export const date = new Date();

storeTitle.forEach(element => {
    element.innerHTML = "Palmer Store";
})

pageName.forEach(element => {
    element.innerHTML = "Palmer Studios Store | Page 1";
})

companyName.forEach(element => {
    element.innerHTML = "Palmer Studios";
})


// Declaring and Initializing Arrays
export const pageLink = ['/HTML/Store/Page 1/Store_1.html', '/HTML/Store/Page 2/Store_2.html', '/HTML/Store/Page 3/Store_3.html'];

export const price = [24.99, 15.99, 34.99, 34.99, 13.99, 11.99, 10.25, 15.99, 39.99, 5.99, 3.99, 5.65, 15.25, 23.45, 10.25, 6.99, 12.99, 12.82, 15.59, 14.99, 35.99, 20.00, 6.40, 13.99, 25.89];
    
export const rating = ['&#8902', '&#8902 &#8902', '&#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902 &#8902'];

export const img = ['/IMG/Store Products/Store 1/Product_1.jpg', '/IMG/Store Products/Store 1/Product_2.jpg', '/IMG/Store Products/Store 1/Product_3.jpg', '/IMG/Store Products/Store 1/Product_4.jpg', '/IMG/Store Products/Store 1/Product_5.jpg', '/IMG/Store Products/Store 1/Product_6.jpg', '/IMG/Store Products/Store 1/Product_7.jpg', '/IMG/Store Products/Store 1/Product_8.jpg', '/IMG/Store Products/Store 1/Product_9.jpg', '/IMG/Store Products/Store 1/Product_10.jpg', '/IMG/Store Products/Store 1/Product_11.jpg', '/IMG/Store Products/Store 1/Product_12.jpg', '/IMG/Store Products/Store 1/Product_13.jpg', '/IMG/Store Products/Store 1/Product_14.jpg', '/IMG/Store Products/Store 1/Product_15.jpg', '/IMG/Store Products/Store 1/Product_16.jpg', '/IMG/Store Products/Store 1/Product_17.jpg', '/IMG/Store Products/Store 1/Product_18.jpg', '/IMG/Store Products/Store 1/Product_19.jpg', '/IMG/Store Products/Store 1/Product_20.jpg', '/IMG/Store Products/Store 1/Product_21.jpg', '/IMG/Store Products/Store 1/Product_22.jpg', '/IMG/Store Products/Store 1/Product_23.jpg', '/IMG/Store Products/Store 1/Product_24.jpg', '/IMG/Store Products/Store 1/Product_25.jpg'];

export const description = ['Light Gray Palmer Hoodie', 'White Palmer T-Shirt - Hustlers', 'Keke Palmer Duvet Set (Purple)', 'Keke Palmer Duvet Set (Tan)', 'Keke Palmer T-Shirt (White)', 'Keke Do You Love Me T-Shirt', 'Black and Brown Exfoliating Cleanser', 'African Clarifying Mud Mask Oils and Spray', 'Skin Safe Manscaping Trimmer', 'Hair Sponge Brush for Twists and Locks (Black)', 'Classic Styling Essential Compact Comb (Black)', 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush', 'Savanna Grass - Album By Kes', 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)', 'Blueberry Bliss Curl Control Jelly', 'African  Black Soap 6 fl oz', 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)', 'Hair Picks (3 Count)', 'Conditioner, Treatment, Detangling Spray, and Shampoo', 'Buttah AHA | BHA Rosewater Toner', 'Champion Adult Mens Everyday Comfort Boxer Underwear', 'Womens Comfort Stretch Brief Panties (Black)', 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)', 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)', 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear'];

export const link = ['/HTML/Store/Page 1/product_1.html', '/HTML/Store/Page 1/product_2.html', '/HTML/Store/Page 1/product_3.html', '/HTML/Store/Page 1/product_4.html', '/HTML/Store/Page 1/product_5.html', '/HTML/Store/Page 1/product_6.html', '/HTML/Store/Page 1/product_7.html', '/HTML/Store/Page 1/product_8.html', '/HTML/Store/Page 1/product_9.html', '/HTML/Store/Page 1/product_10.html', '/HTML/Store/Page 1/product_11.html', '/HTML/Store/Page 1/product_12.html', '/HTML/Store/Page 1/product_13.html', '/HTML/Store/Page 1/product_14.html', '/HTML/Store/Page 1/product_15.html', '/HTML/Store/Page 1/product_16.html', '/HTML/Store/Page 1/product_17.html', '/HTML/Store/Page 1/product_18.html', '/HTML/Store/Page 1/product_19.html', '/HTML/Store/Page 1/product_20.html', '/HTML/Store/Page 1/product_21.html', '/HTML/Store/Page 1/product_22.html', '/HTML/Store/Page 1/product_23.html', '/HTML/Store/Page 1/product_24.html', '/HTML/Store/Page 1/product_25.html'];



// export let myProductArray = Array.from({length: 25}, (_, i) => i + 0);
export let myProductArray = new Array(25);
console.log(myProductArray);




// Creating Dynamic Project Card/Classes
export default class Product {
    constructor(image, description, price, rating, link) {
        this.image = image;
        this.imageAlt = description;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.link = link;
    }

    getImage() {
        return this.image;
    }

    getAlt() {
        return this.imageAlt;
    }

    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    getLink() {
        return this.link;
    }
}

// Instantiating
for(let i = 0; i < img.length; i++) {
    const objects = new Product(img[i], description[i], price[i], rating[4], link[i]);
    myProductArray.push(objects);

    // Displaying Each Products Attributes
    productMainContainer.innerHTML += `
        <div class="Product-Container">
            <a href="${link[i]}">
            <img src="${img[i]}" alt="${description[i]}">
            <div class="Product-Card">
                <span class="Price-Container">
                    <p class="Product-Price">$${price[i]}</p>
                    <p class="Product-Old-Price">$${price[i]}</p>
                </span>
                <p class="Product-description">${description[i]}</p>
                <p class="Product-Rating">${rating[4]}</p>
                <span>
                    <a class="AddToList" href="">Add to List</a>
                </span>
            </div>
        </a>
    </div>
    `
}

// Dynamic HTML Page
navbar.innerHTML += `
<a href="#">
                <img src="/IMG/Social Media Icons & Logos/Palmer_Logo.PNG" alt="Palmer Studios logo.">
            </a>
            <a class="nav-animate-group1" href="/HTML/index.html">Home</a>
            <a class="nav-animate-group1 nav" href="/HTML/About.html">About</a>
            <a class="nav-animate-group1 nav" href="/HTML/FAQ.html">FAQ</a>
            <a class="nav-animate-group2 nav" href="/HTML/Contact.html">Contact</a>
            <a class="nav-animate-group2 nav" href="#">Store</a>
            <a class="nav-animate-group2" href="/HTML/Login.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle login-logo" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>Log in
            </a>

`

storeNavigation.innerHTML += `
<h2>Page 1 of 3</h2>
            <img id="Next-Page" src="/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png" alt="Store Page Navigator">

`

footer[0].innerHTML += `
    <!-- Start of footer -->
<div class="position-footer-container">
        <div class="position-logos">
            <img width="120" height="140" src="/IMG/Social Media Icons & Logos/Palmer_Logo.PNG" alt="Palmer Studios logo.">
            <div class="socialMedia-icons-Container">
                <a href="https://www.facebook.com/kekepalmer">
                    <img class="socialMedia-icons" src="/IMG/Social Media Icons & Logos/FaceBook_Icon.png" alt="FaceBook Logo">
                </a>
                <a href="https://www.instagram.com/keke/">
                    <img class="socialMedia-icons" src="/IMG/Social Media Icons & Logos/Instagram_Icon.png" alt="Instagram Icon">
                </a>
                <a href="https://twitter.com/KekePalmer">
                    <img class="socialMedia-icons" src="/IMG/Social Media Icons & Logos/Twitter_Icon.png" alt="Twitter Icon">
                </a>
                <a href="https://www.youtube.com/channel/UCG7azEZJY5PCsjcUCOdvOPw">
                    <img class="socialMedia-icons" src="/IMG/Social Media Icons & Logos/YouTube_Icon.png" alt="YouTube Icon">
                </a>
            </div>
        </div>
        <div class="footer-column-a-1">
            <a href="">Support</a>
            <a href="/HTML/Contact.html">Contact Us</a>
            <a href="/HTML/FAQ.html">FAQ</a>
            <a href="">Downloads</a>
            <a href="">Locate A Dealer</a>
            <a href="#">Store</a>
            <a href="">Modeling Registration</a>
        </div>
        <div class="footer-column-a-2">
            <a href="">Palmer Studios</a>
            <a href="">About Palmer Studios</a>
            <a href="">Palmer Designs</a>
            <a href="">Careers</a>
            <a href="">Newsroom</a>
            <a href="">Palmer Access</a>
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

// Dynamic Elements

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

nextPage.addEventListener('click', () => {
    location.replace(`${pageLink[1]}`);
})

openMenu.addEventListener('click', () => {
    sideNavigation.classList.toggle('active');
});


// Other Functions
export function validate() {
    if(footerInput.value == '') {
    }
    else {
        footerLabel.remove()
        footerInput.remove();
        footerBtn.remove();
        console.log('Thank You, you will recieve emails on new content!')
        footerResponse.innerHTML = `<span class="Footer-Response-Icon"><svg viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg></span>Thank You, you will recieve emails on new content!`
    }
}


export function getI(n) {
    if(n === i.length) {
        return
    }
    n--;
    getI();
}


export function getAllLengths() {
    console.log("Number of prices: " + price.length);
    console.log("Number of ratings: " + rating.length);
    console.log("Number of images: " + img.length);
    console.log("Number of descriptions: " + description.length);
    console.log("Number of links: " + link.length);
    console.log("Number of products: " + myProductArray.length);
}

export function getTenPercnt(index) {
    let discount = 10 / 100;
    let total = price[index] - (price[index] * discount);
    return "$" + parseFloat(total).toFixed(2);
}


export function getFifteenPercnt(index) {
    let discount = 15 / 100;
    let total = price[index] - (price[index] * discount);
    return "$" + parseFloat(total).toFixed(2);
}


export function getTwentyPercnt(index) {
    let discount = 20 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}


export function getTwentyFivePercnt(index) {
    let discount = 25 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}


export function getThirtyPercnt(index) {
    let discount = 30 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}


export function getFourtyPercnt(index) {
    let discount = 40 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}


export function getFiftyPercnt(index) {
    return "$" + parseFloat(price[index] / 2).toFixed(2);
}