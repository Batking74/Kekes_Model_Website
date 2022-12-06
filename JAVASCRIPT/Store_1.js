// Creating Dynamic Project Card
const productMainContainer = document.querySelector('.Product-Main-Container');

class myProducts {
    // Abstraction 
    constructor(image, imageAlt, description, discountPrice, originalPrice, rating, productLink) {
        // Encapsulation
        this.image = image;
        this.imageAlt = imageAlt;
        this.description = description;
        this.discountPrice = discountPrice;
        this.originalPrice = originalPrice;
        this.rating = rating;
        this.productLink = productLink;
    }
}

const originalPrice = [24.99, 15.99, 34.99, 34.99, 13.99, 11.99, 10.25, 15.99, 39.99, 5.99, 3.99, 5.65, 15.25, 23.45, 10.25, 6.99, 12.99, 12.82, 15.59, 14.99, 35.99, 20.00, 6.40, 13.99, 25.89];
const rating = ['&#8902', '&#8902 &#8902', '&#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902 &#8902'];

 const image = ['/IMG/Store Products/Store 1/Product_1.jpg', '/IMG/Store Products/Store 1/Product_2.jpg', '/IMG/Store Products/Store 1/Product_3.jpg', '/IMG/Store Products/Store 1/Product_4.jpg', '/IMG/Store Products/Store 1/Product_5.jpg', '/IMG/Store Products/Store 1/Product_6.jpg', '/IMG/Store Products/Store 1/Product_7.jpg', '/IMG/Store Products/Store 1/Product_8.jpg', '/IMG/Store Products/Store 1/Product_9.jpg', '/IMG/Store Products/Store 1/Product_10.jpg', '/IMG/Store Products/Store 1/Product_11.jpg', '/IMG/Store Products/Store 1/Product_12.jpg', '/IMG/Store Products/Store 1/Product_13.jpg', '/IMG/Store Products/Store 1/Product_14.jpg', '/IMG/Store Products/Store 1/Product_15.jpg', '/IMG/Store Products/Store 1/Product_16.jpg', '/IMG/Store Products/Store 1/Product_17.jpg', '/IMG/Store Products/Store 1/Product_18.jpg', '/IMG/Store Products/Store 1/Product_19.jpg', '/IMG/Store Products/Store 1/Product_20.jpg', '/IMG/Store Products/Store 1/Product_21.jpg', '/IMG/Store Products/Store 1/Product_22.jpg', '/IMG/Store Products/Store 1/Product_23.jpg', '/IMG/Store Products/Store 1/Product_24.jpg', '/IMG/Store Products/Store 1/Product_25.jpg'];

const description = ['Light Gray Palmer Hoodie', 'White Palmer T-Shirt - Hustlers', 'Keke Palmer Duvet Set (Purple)', 'Keke Palmer Duvet Set (Tan)', 'Keke Palmer T-Shirt (White)', 'Keke Do You Love Me T-Shirt', 'Black and Brown Exfoliating Cleanser', 'African Clarifying Mud Mask Oils and Spray', 'Skin Safe Manscaping Trimmer', 'Hair Sponge Brush for Twists and Locks (Black)', 'Classic Styling Essential Compact Comb (Black)', 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush', 'Savanna Grass - Album By Kes', 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)', 'Blueberry Bliss Curl Control Jelly', 'African  Black Soap 6 fl oz', 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)', 'Hair Picks (3 Count)', 'Conditioner, Treatment, Detangling Spray, and Shampoo', 'Buttah AHA | BHA Rosewater Toner', 'Champion Adult Mens Everyday Comfort Boxer Underwear', 'Womens Comfort Stretch Brief Panties (Black)', 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)', 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)', 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear'];

const productLink = ['/HTML/Store/Page 1/product_1.html', '/HTML/Store/Page 1/product_2.html', '/HTML/Store/Page 1/product_3.html', '/HTML/Store/Page 1/product_4.html', '/HTML/Store/Page 1/product_5.html', '/HTML/Store/Page 1/product_6.html', '/HTML/Store/Page 1/product_7.html', '/HTML/Store/Page 1/product_8.html', '/HTML/Store/Page 1/product_9.html', '/HTML/Store/Page 1/product_10.html', '/HTML/Store/Page 1/product_11.html', '/HTML/Store/Page 1/product_12.html', '/HTML/Store/Page 1/product_13.html', '/HTML/Store/Page 1/product_14.html', '/HTML/Store/Page 1/product_15.html', '/HTML/Store/Page 1/product_16.html', '/HTML/Store/Page 1/product_17.html', '/HTML/Store/Page 1/product_18.html', '/HTML/Store/Page 1/product_19.html', '/HTML/Store/Page 1/product_20.html', '/HTML/Store/Page 1/product_21.html', '/HTML/Store/Page 1/product_22.html', '/HTML/Store/Page 1/product_23.html', '/HTML/Store/Page 1/product_24.html', '/HTML/Store/Page 1/product_25.html'];

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

// Math.round(originalPrice[index] / 2);

// Instantiation 
product1 = new myProducts(image[0], description[0], description[0], fifteenPercent(0) , getOriginalPrice(0), rating[3], productLink[0]);
product2 = new myProducts(image[1], description[1], description[1], fifteenPercent(1), getOriginalPrice(1), rating[4], productLink[1]);
product3 = new myProducts(image[2], description[2], description[2], fifteenPercent(2), getOriginalPrice(2), rating[4], productLink[2]);
product4 = new myProducts(image[3], description[3], description[3], twentyPercent(3), getOriginalPrice(3), rating[3], productLink[3]);
product5 = new myProducts(image[4], description[4], description[4], twentyPercent(4), getOriginalPrice(4), rating[2], productLink[4]);
product6 = new myProducts(image[5], description[5], description[5], twentyFivePercent(5), getOriginalPrice(5), rating[4], productLink[5]);
product7 = new myProducts(image[6], description[6], description[6], tenPercent(6), getOriginalPrice(6), rating[4], productLink[6]);
product8 = new myProducts(image[7], description[7], description[7], fifteenPercent(7), getOriginalPrice(7), rating[4], productLink[7]);
product9 = new myProducts(image[8], description[8], description[8], fiftyPercent(8), getOriginalPrice(8), rating[4], productLink[8]);
product10 = new myProducts(image[9], description[9], description[9], tenPercent(9), getOriginalPrice(9), rating[4], productLink[9]);
product11 = new myProducts(image[10], description[10], description[10], tenPercent(10), getOriginalPrice(10), rating[4], productLink[10]);
product12 = new myProducts(image[11], description[11], description[11], tenPercent(11), getOriginalPrice(11), rating[4], productLink[11]);
product13 = new myProducts(image[12], description[12], description[12], tenPercent(12), getOriginalPrice(12), rating[4], productLink[12]);
product14 = new myProducts(image[13], description[13], description[13], fiftyPercent(13), getOriginalPrice(13), rating[4], productLink[13]);
product15 = new myProducts(image[14], description[14], description[14], fiftyPercent(14), getOriginalPrice(14), rating[4], productLink[14]);
product16 = new myProducts(image[15], description[15], description[15], fiftyPercent(15), getOriginalPrice(15), rating[4], productLink[15]);
product17 = new myProducts(image[16], description[16], description[16], fiftyPercent(16), getOriginalPrice(16), rating[4], productLink[16]);
product18 = new myProducts(image[17], description[17], description[17], fiftyPercent(17), getOriginalPrice(17), rating[4], productLink[17]);
product19 = new myProducts(image[18], description[18], description[18], fiftyPercent(18), getOriginalPrice(18), rating[4], productLink[18]);
product20 = new myProducts(image[19], description[19], description[19], fiftyPercent(19), getOriginalPrice(19), rating[4], productLink[19]);
product21 = new myProducts(image[20], description[20], description[20], fiftyPercent(20), getOriginalPrice(20), rating[4], productLink[20]);
product22 = new myProducts(image[21], description[21], description[21], fiftyPercent(21), getOriginalPrice(21), rating[4], productLink[21]);
product23 = new myProducts(image[22], description[22], description[22], fiftyPercent(22), getOriginalPrice(22), rating[4], productLink[22]);
product24 = new myProducts(image[23], description[23], description[23], fiftyPercent(23), getOriginalPrice(23), rating[4], productLink[23]);
product25 = new myProducts(image[24], description[24], description[24], fiftyPercent(24), getOriginalPrice(24), rating[4], productLink[24]);

myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25];

myProductArray.forEach(product => {
    productMainContainer.innerHTML += `
    <div class="Product-Container">
        <a href="${product.productLink}">
            <img src="${product.image}" alt="${product.imageAlt}">
            <div class="Product-Card">
                <span class="Price-Container">
                    <p class="Product-Price">${product.discountPrice}</p>
                    <p class="Product-Old-Price">${product.originalPrice}</p>
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