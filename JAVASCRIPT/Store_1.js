// Creating Dynamic Project Card
const productMainContainer = document.querySelector('.Product-Main-Container');
const body = document.getElementById('body');
let i = Array.from({length: 25}, (_, i) => i + 0);

class Product {
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

class DiscountItem extends Product {
    constructor(image, description, price, rating, link, newPrice) {
        super(image, description, price, rating, link);
        this.newPrice = newPrice;
    }
    getPrice() {
        return this.newPrice;
    }
}

const price = [24.99, 15.99, 34.99, 34.99, 13.99, 11.99, 10.25, 15.99, 39.99, 5.99, 3.99, 5.65, 15.25, 23.45, 10.25, 6.99, 12.99, 12.82, 15.59, 14.99, 35.99, 20.00, 6.40, 13.99, 25.89];

const rating = ['&#8902', '&#8902 &#8902', '&#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902 &#8902'];

 const img = ['/IMG/Store Products/Store 1/Product_1.jpg', '/IMG/Store Products/Store 1/Product_2.jpg', '/IMG/Store Products/Store 1/Product_3.jpg', '/IMG/Store Products/Store 1/Product_4.jpg', '/IMG/Store Products/Store 1/Product_5.jpg', '/IMG/Store Products/Store 1/Product_6.jpg', '/IMG/Store Products/Store 1/Product_7.jpg', '/IMG/Store Products/Store 1/Product_8.jpg', '/IMG/Store Products/Store 1/Product_9.jpg', '/IMG/Store Products/Store 1/Product_10.jpg', '/IMG/Store Products/Store 1/Product_11.jpg', '/IMG/Store Products/Store 1/Product_12.jpg', '/IMG/Store Products/Store 1/Product_13.jpg', '/IMG/Store Products/Store 1/Product_14.jpg', '/IMG/Store Products/Store 1/Product_15.jpg', '/IMG/Store Products/Store 1/Product_16.jpg', '/IMG/Store Products/Store 1/Product_17.jpg', '/IMG/Store Products/Store 1/Product_18.jpg', '/IMG/Store Products/Store 1/Product_19.jpg', '/IMG/Store Products/Store 1/Product_20.jpg', '/IMG/Store Products/Store 1/Product_21.jpg', '/IMG/Store Products/Store 1/Product_22.jpg', '/IMG/Store Products/Store 1/Product_23.jpg', '/IMG/Store Products/Store 1/Product_24.jpg', '/IMG/Store Products/Store 1/Product_25.jpg'];

const description = ['Light Gray Palmer Hoodie', 'White Palmer T-Shirt - Hustlers', 'Keke Palmer Duvet Set (Purple)', 'Keke Palmer Duvet Set (Tan)', 'Keke Palmer T-Shirt (White)', 'Keke Do You Love Me T-Shirt', 'Black and Brown Exfoliating Cleanser', 'African Clarifying Mud Mask Oils and Spray', 'Skin Safe Manscaping Trimmer', 'Hair Sponge Brush for Twists and Locks (Black)', 'Classic Styling Essential Compact Comb (Black)', 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush', 'Savanna Grass - Album By Kes', 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)', 'Blueberry Bliss Curl Control Jelly', 'African  Black Soap 6 fl oz', 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)', 'Hair Picks (3 Count)', 'Conditioner, Treatment, Detangling Spray, and Shampoo', 'Buttah AHA | BHA Rosewater Toner', 'Champion Adult Mens Everyday Comfort Boxer Underwear', 'Womens Comfort Stretch Brief Panties (Black)', 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)', 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)', 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear'];

const link = ['/HTML/Store/Page 1/product_1.html', '/HTML/Store/Page 1/product_2.html', '/HTML/Store/Page 1/product_3.html', '/HTML/Store/Page 1/product_4.html', '/HTML/Store/Page 1/product_5.html', '/HTML/Store/Page 1/product_6.html', '/HTML/Store/Page 1/product_7.html', '/HTML/Store/Page 1/product_8.html', '/HTML/Store/Page 1/product_9.html', '/HTML/Store/Page 1/product_10.html', '/HTML/Store/Page 1/product_11.html', '/HTML/Store/Page 1/product_12.html', '/HTML/Store/Page 1/product_13.html', '/HTML/Store/Page 1/product_14.html', '/HTML/Store/Page 1/product_15.html', '/HTML/Store/Page 1/product_16.html', '/HTML/Store/Page 1/product_17.html', '/HTML/Store/Page 1/product_18.html', '/HTML/Store/Page 1/product_19.html', '/HTML/Store/Page 1/product_20.html', '/HTML/Store/Page 1/product_21.html', '/HTML/Store/Page 1/product_22.html', '/HTML/Store/Page 1/product_23.html', '/HTML/Store/Page 1/product_24.html', '/HTML/Store/Page 1/product_25.html'];

const product1 = new Product(img[i[0]], description[i[0]], price[i[0]], rating[0], link[i[0]]);
const product2 = new Product(img[i[1]], description[i[1]], price[i[1]], rating[2], link[i[1]]);
const product3 = new DiscountItem(img[i[2]], description[i[2]], price[i[2]], rating[4], link[i[2]], tenPercent(i[2]));
const product4 = new Product(img[i[3]], description[i[3]], price[i[3]], rating[4], link[i[3]]);
const product5 = new Product(img[i[4]], description[i[4]], price[i[4]], rating[4], link[i[4]]);
const product6 = new Product(img[i[5]], description[i[5]], price[i[5]], rating[1], link[i[5]]);
const product7 = new Product(img[i[6]], description[i[6]], price[i[6]], rating[2], link[i[6]]);
const product8 = new Product(img[i[7]], description[i[7]], price[i[7]], rating[3], link[i[7]]);
const product9 = new Product(img[i[8]], description[i[8]], price[i[8]], rating[4], link[i[8]]);
const product10 = new Product(img[i[9]], description[i[9]], price[i[9]], rating[4], link[i[9]]);
const product11 = new Product(img[i[10]], description[i[10]], price[i[10]], rating[4], link[i[10]]);
const product12 = new Product(img[i[11]], description[i[11]], price[i[11]], rating[4], link[i[11]]);
const product13 = new Product(img[i[12]], description[i[12]], price[i[12]], rating[4], link[i[12]]);
const product14 = new Product(img[i[13]], description[i[13]], price[i[13]], rating[4], link[i[13]]);
const product15 = new Product(img[i[14]], description[i[14]], price[i[14]], rating[4], link[i[14]]);
const product16 = new Product(img[i[15]], description[i[15]], price[i[15]], rating[4], link[i[15]]);
const product17 = new Product(img[i[16]], description[i[16]], price[i[16]], rating[4], link[i[16]]);
const product18 = new Product(img[i[17]], description[i[17]], price[i[17]], rating[4], link[i[17]]);
const product19 = new Product(img[i[18]], description[i[18]], price[i[18]], rating[4], link[i[18]]);
const product20 = new Product(img[i[19]], description[i[19]], price[i[19]], rating[4], link[i[19]]);
const product21 = new Product(img[i[20]], description[i[20]], price[i[20]], rating[4], link[i[20]]);
const product22 = new Product(img[i[21]], description[i[21]], price[i[21]], rating[4], link[i[21]]);
const product23 = new Product(img[i[22]], description[i[21]], price[i[22]], rating[4], link[i[22]]);
const product24 = new Product(img[i[23]], description[i[23]], price[i[23]], rating[4], link[i[23]]);
const product25 = new Product(img[i[24]], description[i[24]], price[i[24]], rating[4], link[i[24]]);

myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25];


myProductArray.forEach(product => {
    productMainContainer.innerHTML += `
        <div class="Product-Container">
            <a href="${product.getLink()}">
            <img src="${product.getImage()}" alt="${product.getDescription()}">
            <div class="Product-Card">
                <span class="Price-Container">
                    <p class="Product-Price">${product.getPrice()}</p>
                    <p class="Product-Old-Price">${product.getPrice()}</p>
                </span>
                <p class="Product-description">${product.getDescription()}</p>
                <p class="Product-Rating">${product.rating}</p>
                <span>
                    <a class="AddToList" href="">Add to List</a>
                </span>
            </div>
        </a>
    </div>
    `
})


function getAllLengths() {
    console.log("Number of prices: " + price.length);
    console.log("Number of ratings: " + rating.length);
    console.log("Number of images: " + img.length);
    console.log("Number of descriptions: " + description.length);
    console.log("Number of links: " + link.length);
    console.log("Number of products: " + myProductArray.length);
}

function getOriginalPrice(index) {
    return '$' + originalPrice[index];
}

function tenPercent(index) {
    let discount = 10 / 100;
    let total = price[index] - (price[index] * discount);
    return "$" + parseFloat(total).toFixed(2);
}

function fifteenPercent(index) {
    let discount = 15 / 100;
    let total = price[index] - (price[index] * discount);
    return "$" + parseFloat(total).toFixed(2);
}

function twentyPercent(index) {
    let discount = 20 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function twentyFivePercent(index) {
    let discount = 25 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function thirtyPercent(index) {
    let discount = 30 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function fourtyPercent(index) {
    let discount = 40 / 100;
    let total = price[index] - (price[index] * discount)
    return "$" + parseFloat(total).toFixed(2);
}

function fiftyPercent(index) {
    return "$" + parseFloat(price[index] / 2).toFixed(2);
}




const footerForm = document.getElementById('footerForm');
const footerInput = document.getElementById('footerInput');
const footerBtn = document.getElementById('footerbtn');
const footerResponse = document.getElementById('footerSubmissionResponse');
const footerLabel = document.getElementById('footerLabel');
const companyName = document.getElementById('Company-Name');
const copyright = document.getElementById('copyright');
const nextPage = document.getElementById('Next-Page');


footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

nextPage.addEventListener('click', () => {
    location.replace('/HTML/Store/Page 2/Store_2.html')
})

// Toggle Hamburger menu
const openMenu = document.querySelector('#menu-open');
const sideNavigation = document.querySelector('.nav-container');
openMenu.addEventListener('click', () => {
    sideNavigation.classList.toggle('active');
});





function validate() {
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