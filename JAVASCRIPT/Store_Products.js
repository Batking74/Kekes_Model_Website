const html = document.getElementById('html')

let productLink = ['/HTML/Store/Page 1/product_1.html', '/HTML/Store/Page 1/product_2.html', '/HTML/Store/Page 1/product_3.html', '/HTML/Store/Page 1/product_4.html', '/HTML/Store/Page 1/product_5.html', '/HTML/Store/Page 1/product_6.html', '/HTML/Store/Page 1/product_7.html', '/HTML/Store/Page 1/product_8.html', '/HTML/Store/Page 1/product_9.html', '/HTML/Store/Page 1/product_10.html', '/HTML/Store/Page 1/product_11.html', '/HTML/Store/Page 1/product_12.html', '/HTML/Store/Page 1/product_13.html', '/HTML/Store/Page 1/product_14.html', '/HTML/Store/Page 1/product_15.html', '/HTML/Store/Page 1/product_16.html', '/HTML/Store/Page 1/product_17.html', '/HTML/Store/Page 1/product_18.html', '/HTML/Store/Page 1/product_19.html', '/HTML/Store/Page 1/product_20.html', '/HTML/Store/Page 1/product_21.html', '/HTML/Store/Page 1/product_22.html', '/HTML/Store/Page 1/product_23.html', '/HTML/Store/Page 1/product_24.html', '/HTML/Store/Page 1/product_25.html'];

productLink.forEach( (element, image) => {
    html.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/CSS/Store_Products.css">
    </head>
    <body>
        <!-- Start of navigation bar -->
        <nav class="Animate_Nav nav-container">
            <a href="#">
                <img src="/IMG/Social Media Icons & Logos/Palmer_Logo.PNG" alt="Palmer Studios logo.">
            </a>
            <a id="special-nav-btn" href="/HTML/index.html">Home</a>
            <a class="nav-btn" href="/HTML/About.html">About</a>
            <a class="nav-btn" href="/HTML/FAQ.html">FAQ</a>
            <a class="nav-btn" href="/HTML/Contact.html">Contact</a>
            <a class="nav-btn" href="/HTML/Store/Page 1/Store_1.html">Store</a>
            <a id="special-nav-btn" href="/HTML/Login.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle login-logo" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>Log in
            </a>
        </nav>

        <div class="Product-Main-Container">
            <div>
                <img src="${img[image]}" class="Product-image" alt="">
            </div>
            <div class="Product-Details">
                <h1>Keke Do You Love Me T-Shirt</h1>
                <a href="#" class="Ratings">
                    <p>&#8902 &#8902 &#8902 &#8902 &#8902</p>
                    <p>2 reviews</p>
                </a>
                <h2>$7.99 <span>$11.99</span></h2>
                <div>
                <input type="color">
                <input type="color">
            </div>
            <div>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>
            <div class="Product-Detail-text">
                <p><img src="/IMG/Social Media Icons & Logos/Palmer_Studios_Icon.png"> and shipped by Palmer Studios</p>
                <p><img src="/IMG/Social Media Icons & Logos/Return_Icon.png"> Free 14-Day returns</p>
            </div>
            <button class="AddToCart">Add to Cart</button>
        </div>
        <div class="Product-Discription-Container">
            <h1>About this item</h1>
            <br>
            <hr>
            <br>
            <h3>Product Details</h3>
            <br>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vitae sequi modi quam voluptatum ipsa dicta suscipit praesentium sapiente ipsum placeat id earum rerum natus, sunt nesciunt veniam illum eos voluptate exercitationem eaque ducimus ut perspiciatis quod? Rerum.</p>
            <br>
            <br>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <br>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem</li>
                <br>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                <br>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem</li>
                <br>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem</li>
            </ul>
        </div>
        <p>We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it.  See our disclaimer</p>
    </div>
    
    <!-- Start of footer -->
    <footer>
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
                <a href="/HTML/Store/Page 1/Store_1.html">Store</a>
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
            <p>&copy; copyright 2022 Nazir Knuckles Inc</p>
        </div>
    </footer>
    <script src="/JAVASCRIPT/Store_Products.js"></script>
    <script src="/JAVASCRIPT/Store_Products_Blueprint.js"></script>
</body>
    
    
    
    `
})