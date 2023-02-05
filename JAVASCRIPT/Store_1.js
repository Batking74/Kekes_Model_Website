// Creating Dynamic Project Card
const productMainContainer = document.querySelector('.Product-Main-Container');

class Product {
    constructor(image, description, price, rating, link) {
        this.image = image;
        this.imageAlt = description;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.link = link;
    }
}

class DiscountItem {
    constructor(image, description, price, newPrice, rating, link) {
        this.image = image;
        this.imageAlt = description;
        this.description = description;
        this.newPrice = newPrice;
        this.price = price;
        this.rating = rating;
        this.link = link;
    }
}

let price = [24.99, 15.99, 34.99, 34.99, 13.99, 11.99, 10.25, 15.99, 39.99, 5.99, 3.99, 5.65, 15.25, 23.45, 10.25, 6.99, 12.99, 12.82, 15.59, 14.99, 35.99, 20.00, 6.40, 13.99, 25.89];

const rating = ['&#8902', '&#8902 &#8902', '&#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902 &#8902'];

 let img = ['/IMG/Store Products/Store 1/Product_1.jpg', '/IMG/Store Products/Store 1/Product_2.jpg', '/IMG/Store Products/Store 1/Product_3.jpg', '/IMG/Store Products/Store 1/Product_4.jpg', '/IMG/Store Products/Store 1/Product_5.jpg', '/IMG/Store Products/Store 1/Product_6.jpg', '/IMG/Store Products/Store 1/Product_7.jpg', '/IMG/Store Products/Store 1/Product_8.jpg', '/IMG/Store Products/Store 1/Product_9.jpg', '/IMG/Store Products/Store 1/Product_10.jpg', '/IMG/Store Products/Store 1/Product_11.jpg', '/IMG/Store Products/Store 1/Product_12.jpg', '/IMG/Store Products/Store 1/Product_13.jpg', '/IMG/Store Products/Store 1/Product_14.jpg', '/IMG/Store Products/Store 1/Product_15.jpg', '/IMG/Store Products/Store 1/Product_16.jpg', '/IMG/Store Products/Store 1/Product_17.jpg', '/IMG/Store Products/Store 1/Product_18.jpg', '/IMG/Store Products/Store 1/Product_19.jpg', '/IMG/Store Products/Store 1/Product_20.jpg', '/IMG/Store Products/Store 1/Product_21.jpg', '/IMG/Store Products/Store 1/Product_22.jpg', '/IMG/Store Products/Store 1/Product_23.jpg', '/IMG/Store Products/Store 1/Product_24.jpg', '/IMG/Store Products/Store 1/Product_25.jpg'];

let description = ['Light Gray Palmer Hoodie', 'White Palmer T-Shirt - Hustlers', 'Keke Palmer Duvet Set (Purple)', 'Keke Palmer Duvet Set (Tan)', 'Keke Palmer T-Shirt (White)', 'Keke Do You Love Me T-Shirt', 'Black and Brown Exfoliating Cleanser', 'African Clarifying Mud Mask Oils and Spray', 'Skin Safe Manscaping Trimmer', 'Hair Sponge Brush for Twists and Locks (Black)', 'Classic Styling Essential Compact Comb (Black)', 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush', 'Savanna Grass - Album By Kes', 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)', 'Blueberry Bliss Curl Control Jelly', 'African  Black Soap 6 fl oz', 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)', 'Hair Picks (3 Count)', 'Conditioner, Treatment, Detangling Spray, and Shampoo', 'Buttah AHA | BHA Rosewater Toner', 'Champion Adult Mens Everyday Comfort Boxer Underwear', 'Womens Comfort Stretch Brief Panties (Black)', 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)', 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)', 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear'];

let link = ['/HTML/Store/Page 1/product_1.html', '/HTML/Store/Page 1/product_2.html', '/HTML/Store/Page 1/product_3.html', '/HTML/Store/Page 1/product_4.html', '/HTML/Store/Page 1/product_5.html', '/HTML/Store/Page 1/product_6.html', '/HTML/Store/Page 1/product_7.html', '/HTML/Store/Page 1/product_8.html', '/HTML/Store/Page 1/product_9.html', '/HTML/Store/Page 1/product_10.html', '/HTML/Store/Page 1/product_11.html', '/HTML/Store/Page 1/product_12.html', '/HTML/Store/Page 1/product_13.html', '/HTML/Store/Page 1/product_14.html', '/HTML/Store/Page 1/product_15.html', '/HTML/Store/Page 1/product_16.html', '/HTML/Store/Page 1/product_17.html', '/HTML/Store/Page 1/product_18.html', '/HTML/Store/Page 1/product_19.html', '/HTML/Store/Page 1/product_20.html', '/HTML/Store/Page 1/product_21.html', '/HTML/Store/Page 1/product_22.html', '/HTML/Store/Page 1/product_23.html', '/HTML/Store/Page 1/product_24.html', '/HTML/Store/Page 1/product_25.html'];




let array = [price.length, img.length, description.length, link.length];
console.log("Price Length: " + array[0]);
console.log("Image Length: " + array[1]);
console.log("Description/Alt Length: " + array[2]);
console.log("Link Length: " + array[3]);

let i = 0;
if(i < array[0] && i < array[1] && i < array[2] && i < array[3]) {
    product1 = new Product(img[i], description[i], price[i], rating[0], link[i]);
    product2 = new Product(img[i], description[i], price[i], rating[2], link[i]);
    product3 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product4 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product5 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product6 = new Product(img[i], description[i], price[i], rating[1], link[i]);
    product7 = new Product(img[i], description[i], price[i], rating[2], link[i]);
    product8 = new Product(img[i], description[i], price[i], rating[3], link[i]);
    product9 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product10 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product11 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product12 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product13 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product14 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product15 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product16 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product17 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product18 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product19 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product20 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product21 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product22 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product23 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product24 = new Product(img[i], description[i], price[i], rating[4], link[i]);
    product25 = new Product(img[i], description[i], price[i], rating[4], link[i]);

    myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25];

    myProductArray.forEach(product => {
        productMainContainer.innerHTML += `
        <div class="Product-Container">
            <a href="${product.link}">
                <img src="${product.img}" alt="${product.description}">
                <div class="Product-Card">
                    <span class="Price-Container">
                        <p class="Product-Price">${product.link}</p>
                        <p class="Product-Old-Price">${product.price}</p>
                    </span>
                    <p class="Product-description">${product.description}</p>
                    <p class="Product-Rating">${product.rating}</p>
                    <span>
                        <a class="AddToList" href="">Add to List</a>
                    </span>
                </div>
            </a>
    </div>`
    })
}













function getOriginalPrice(index) {
    return '$' + originalPrice[index];
}

function tenPercent(index) {
    let discount = 10 / 100;
    let total = originalPrice[index] - (originalPrice[index] * discount);
    return "$" + parseFloat(total).toFixed(2);
}

function fifteenPercent(index) {
    let discount = 15 / 100;
    let total = originalPrice[index] - (originalPrice[index] * discount);
    return "$" + parseFloat(total).toFixed(2);
}

function twentyPercent(index) {
    let discount = 20 / 100;
    let total = originalPrice[index] - (originalPrice[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function twentyFivePercent(index) {
    let discount = 25 / 100;
    let total = originalPrice[index] - (originalPrice[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function thirtyPercent(index) {
    let discount = 30 / 100;
    let total = originalPrice[index] - (originalPrice[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function fourtyPercent(index) {
    let discount = 40 / 100;
    let total = originalPrice[index] - (originalPrice[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function fiftyPercent(index) {
    return "$" + parseFloat(originalPrice[index] / 2).toFixed(2);
}




const footerForm = document.getElementById('footerForm');
const footerInput = document.getElementById('footerInput');
const footerBtn = document.getElementById('footerbtn');
const footerResponse = document.getElementById('footerSubmissionResponse');
const footerLabel = document.getElementById('footerLabel');
footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(footerInput.value == '') {
    }
    else {
        footerLabel.remove()
        footerInput.remove();
        footerBtn.remove();
        console.log('Thank You, you will recieve emails on new content!')
        footerResponse.innerHTML = `<svg class="Footer-Response-Icon" viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>Thank You, you will recieve emails on new content!`
    }
})

const nextPage = document.getElementById('Next-Page');
nextPage.addEventListener('click', () => {
    location.replace('/HTML/Store/Page 2/Store_2.html')
})

// Toggle Hamburger menu
const openMenu = document.querySelector('#menu-open');
const sideNavigation = document.querySelector('.nav-container');
openMenu.addEventListener('click', () => {
    sideNavigation.classList.toggle('active');
});