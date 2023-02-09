// Targeting Elements
export let pageName = document.querySelectorAll('#Page-Name');
export const companyName = document.querySelectorAll('#Company-Name');
export const storeTitle = document.querySelectorAll('#Store-Title');
export const productCount = document.querySelector('#Products-Count');
export const productMainContainer = document.querySelector('.Product-Main-Container');
export const sideNavigation = document.querySelector('.nav-container');
export const storeNavigation = document.querySelector('#nav-2');

// Dynamic Elements
setStoreName("Palmer Store");
setDocName("Palmer Studios Store | Page 1");
setCompanyName("Palmer Studios");

storeNavigation.innerHTML = `
    <h2>Page 1 of 3</h2>
    <img id="Next-Page" src="/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png" alt="Next Page">
`

// Declaring and Initializing Arrays
const arrayLength = 29;
export const pageLink = new Array(arrayLength);
pageLink[0] = '/HTML/Store/Page 1/Store_1.html';
pageLink[1] = '/HTML/Store/Page 2/Store_2.html';
pageLink[2] = '/HTML/Store/Page 3/Store_3.html';

export const price = new Array(arrayLength);
price[0] = 24.99;
price[1] = 15.99;
price[2] = 34.99;
price[3] = 34.99;
price[4] = 13.99;
price[5] = 11.99;
price[6] = 10.25;
price[7] = 15.99;
price[8] = 39.99;
price[9] = 5.99;
price[10] = 3.99;
price[11] = 5.65;
price[12] = 15.25;
price[13] = 23.45;
price[14] = 10.25;
price[15] = 6.99;
price[16] = 12.99;
price[17] = 12.82;
price[18] = 15.59;
price[19] = 14.99;
price[20] = 35.99;
price[21] = 20.00;
price[22] = 6.40;
price[23] = 13.99;
price[24] = 25.89;
price[25] = 599.99;
price[26] = 1000.99;
price[27] = 2000.99;
price[28] = 59.99;
    
export const rating = new Array(arrayLength);
rating[0] = '&#8902';
rating[1] = '&#8902 &#8902';
rating[2] = '&#8902 &#8902 &#8902';
rating[3] = '&#8902 &#8902 &#8902 &#8902';
rating[4] = '&#8902 &#8902 &#8902 &#8902 &#8902';

export const img = new Array(arrayLength);
img[0] = '/IMG/Store Products/Store 1/Product_1.jpg';
img[1] = '/IMG/Store Products/Store 1/Product_2.jpg';
img[2] = '/IMG/Store Products/Store 1/Product_3.jpg';
img[3] = '/IMG/Store Products/Store 1/Product_4.jpg';
img[4] = '/IMG/Store Products/Store 1/Product_5.jpg';
img[5] = '/IMG/Store Products/Store 1/Product_6.jpg';
img[6] = '/IMG/Store Products/Store 1/Product_7.jpg';
img[7] = '/IMG/Store Products/Store 1/Product_8.jpg';
img[8] = '/IMG/Store Products/Store 1/Product_9.jpg';
img[9] = '/IMG/Store Products/Store 1/Product_10.jpg';
img[10] = '/IMG/Store Products/Store 1/Product_11.jpg';
img[11] = '/IMG/Store Products/Store 1/Product_12.jpg';
img[12] = '/IMG/Store Products/Store 1/Product_13.jpg';
img[13] = '/IMG/Store Products/Store 1/Product_14.jpg';
img[14] = '/IMG/Store Products/Store 1/Product_15.jpg';
img[15] = '/IMG/Store Products/Store 1/Product_16.jpg';
img[16] = '/IMG/Store Products/Store 1/Product_17.jpg';
img[17] = '/IMG/Store Products/Store 1/Product_18.jpg';
img[18] = '/IMG/Store Products/Store 1/Product_19.jpg';
img[19] = '/IMG/Store Products/Store 1/Product_20.jpg';
img[20] = '/IMG/Store Products/Store 1/Product_21.jpg';
img[21] = '/IMG/Store Products/Store 1/Product_22.jpg';
img[22] = '/IMG/Store Products/Store 1/Product_23.jpg';
img[23] = '/IMG/Store Products/Store 1/Product_24.jpg';
img[24] = '/IMG/Store Products/Store 1/Product_25.jpg';
img[25] = '/IMG/Store Products/Store 1/Product_26.jpg';
img[26] = '/IMG/Store Products/Store 1/Product_27.jpg';
img[27] = '/IMG/Store Products/Store 1/Product_27.jpg';
img[28] = '/IMG/Store Products/Store 1/Product_28.jpg';

export const description = new Array(arrayLength);
description[0] = 'Light Gray Palmer Hoodie';
description[1] = 'White Palmer T-Shirt - Hustlers';
description[2] = 'Keke Palmer Duvet Set (Purple)';
description[3] = 'Keke Palmer Duvet Set (Tan)';
description[4] = 'Keke Palmer T-Shirt (White)';
description[5] = 'Keke Do You Love Me T-Shirt';
description[6] = 'Black and Brown Exfoliating Cleanser';
description[7] = 'African Clarifying Mud Mask Oils and Spray';
description[8] = 'Skin Safe Manscaping Trimmer';
description[9] = 'Hair Sponge Brush for Twists and Locks (Black)';
description[10] = 'Classic Styling Essential Compact Comb (Black)';
description[11] = 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush';
description[12] = 'Savanna Grass - Album By Kes';
description[13] = 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)';
description[14] = 'Blueberry Bliss Curl Control Jelly';
description[15] = 'African  Black Soap 6 fl oz';
description[16] = 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)';
description[17] = 'Hair Picks (3 Count)';
description[18] = 'Conditioner, Treatment, Detangling Spray, and Shampoo';
description[19] = 'Buttah AHA | BHA Rosewater Toner';
description[20] = 'Champion Adult Mens Everyday Comfort Boxer Underwear';
description[21] = 'Womens Comfort Stretch Brief Panties (Black)';
description[22] = 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)';
description[23] = 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)';
description[24] = 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear';
description[25] = 'PS5';
description[26] = 'XBOX';
description[27] = 'XBOX Series';
description[28] = 'GTA5';

export const productLink = new Array(arrayLength);
productLink[0] = '/HTML/Store/Page 1/product_1.html';
productLink[1] = '/HTML/Store/Page 1/product_2.html';
productLink[2] = '/HTML/Store/Page 1/product_3.html';
productLink[3] = '/HTML/Store/Page 1/product_4.html';
productLink[4] = '/HTML/Store/Page 1/product_5.html';
productLink[5] = '/HTML/Store/Page 1/product_6.html';
productLink[6] = '/HTML/Store/Page 1/product_7.html';
productLink[7] = '/HTML/Store/Page 1/product_8.html';
productLink[8] = '/HTML/Store/Page 1/product_9.html';
productLink[9] = '/HTML/Store/Page 1/product_10.html';
productLink[10] = '/HTML/Store/Page 1/product_11.html';
productLink[11] = '/HTML/Store/Page 1/product_12.html';
productLink[12] = '/HTML/Store/Page 1/product_13.html';
productLink[13] = '/HTML/Store/Page 1/product_14.html';
productLink[14] = '/HTML/Store/Page 1/product_15.html';
productLink[15] = '/HTML/Store/Page 1/product_16.html';
productLink[16] = '/HTML/Store/Page 1/product_17.html';
productLink[17] = '/HTML/Store/Page 1/product_18.html';
productLink[18] = '/HTML/Store/Page 1/product_19.html';
productLink[19] = '/HTML/Store/Page 1/product_20.html';
productLink[20] = '/HTML/Store/Page 1/product_21.html';
productLink[21] = '/HTML/Store/Page 1/product_22.html';
productLink[22] = '/HTML/Store/Page 1/product_23.html';
productLink[23] = '/HTML/Store/Page 1/product_24.html';
productLink[24] = '/HTML/Store/Page 1/product_25.html';
productLink[25] = '/HTML/Store/Page 1/product_25.html';
productLink[26] = '/HTML/Store/Page 1/product_25.html';
productLink[26] = '/HTML/Store/Page 1/product_25.html';
productLink[26] = '/HTML/Store/Page 1/product_25.html';

export let myProductArray = new Array(productLink.length);
setNumProducts(myProductArray.length);

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
export function getObjects(object) {
    for(let i = 0; i < object.length; i++) {
        const objects = new Product(img[i], description[i], price[i], rating[4], productLink[i]);
        myProductArray.push(objects);
    
        // Displaying Each Products Attributes
        productMainContainer.innerHTML += `
            <div class="Product-Container">
                <a href="${productLink[i]}">
                <img src="${img[i]}" alt="${description[i]}">
                <div class="Product-Card">
                    <span class="Price-Container">
                        <p class="Product-Price">${getDiscount()}</p>
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
                function getDiscount() {
                    const oldPrice = document.querySelector('.Product-Old-Price');
                    if(price[i] <= 70) {
                        let discount = 70 / 100;
                        let total = price[i] - (price[i] * discount);
                        console.log("70% OFF!");
                        return "$" + parseFloat(total).toFixed(2);
                    }
                    
                    else if(price[i] >= 60 && price[i] <= 70) {
                        let discount = 40 / 100;
                        let total = price[i] - (price[i] * discount);
                        console.log("40% OFF!");
                        return "$" + parseFloat(total).toFixed(2);
                    }
    
                    else if(price[i] <= 50 || price[i] >= 55) {
                        let discount = 30 / 100;
                        let total = price[i] - (price[i] * discount);
                        console.log("30% OFF!");
                        return "$" + parseFloat(total).toFixed(2);
                    }
    
                    else if(price[i] <= 40) {
                        let discount = 25 / 100;
                        let total = price[i] - (price[i] * discount);
                        console.log("25% OFF!");
                        return "$" + parseFloat(total).toFixed(2);
                    }
    
                    else if(price[i] >= 25) {
                        let discount = 20 / 100;
                        let total = price[i] - (price[i] * discount);
                        console.log("20% OFF!");
                        return "$" + parseFloat(total).toFixed(2);
                    }
    
                    else if(price[i] >= 15) {
                        let discount = 15 / 100;
                        let total = price[i] - (price[i] * discount);
                        console.log("15% OFF!");
                        return "$" + parseFloat(total).toFixed(2);
                    }
    
    
                    else if(price[i] <= 15) {
                        let discount = 10 / 100;
                        let total = price[i] - (price[i] * discount);
                        console.log("10% OFF!");
                        return "$" + parseFloat(total).toFixed(2);
                    }
    
                    else {
                        oldPrice.classList.add('Remove-Old-Price');
                        console.log("Nothing");
                    }
        }
    }
}

export function setStoreName(storeName) {
    storeTitle.forEach(element => {
        element.innerHTML = storeName;
    })
}

export function setDocName(docName) {
    pageName.forEach(element => {
        element.innerHTML = docName;
    })
}

export function setCompanyName(name) {
    companyName.forEach(element => {
        element.innerHTML = name;
    })
}

export function getAllLengths() {
    console.log("Number of prices: " + price.length);
    console.log("Number of ratings: " + rating.length);
    console.log("Number of images: " + img.length);
    console.log("Number of descriptions: " + description.length);
    console.log("Number of links: " + productLink.length);
    console.log("Number of products: " + myProductArray.length);
}

export function setNumProducts(num) {
    productCount.innerHTML = `${num}`;
}

export const nextPage = document.querySelector('#Next-Page');
export const openMenu = document.querySelector('#menu-open');

openMenu.addEventListener('click', () => {
    sideNavigation.classList.toggle('active');
});

nextPage.addEventListener('click', () => {
    location.replace(`${pageLink[1]}`);
})

export const bluePrints = [pageName, companyName, storeTitle, productCount, productMainContainer, sideNavigation, storeNavigation, pageLink, price, rating, img, description, productLink, myProductArray, nextPage, openMenu];