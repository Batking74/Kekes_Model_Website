// Creating Dynamic Project Card
const productMainContainer = document.querySelector('.Product-Main-Container');
class myProducts {
    constructor(image, imageAlt, description, price, oldPrice, rating, productLink) {
        this.image = image;
        this.imageAlt = imageAlt;
        this.description = description;
        this.price = price;
        this.oldPrice = oldPrice;
        this.rating = rating;
        this.productLink = productLink;
    }

}

product1 = new myProducts('/IMG/Store Products/Store 1/Product_1.jpg', 'Light Gray Palmer Hoodie', 'Light Gray Palmer Hoodie','$19.99', '$24.99', '&#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_1.html');
product2 = new myProducts('/IMG/Store Products/Store 1/Product_2.jpg', 'White Palmer T-Shirt - Hustlers', 'White Palmer T-Shirt - Hustlers', '$10.99', '$15.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_2.html');
product3 = new myProducts('/IMG/Store Products/Store 1/Product_3.jpg', 'Keke Palmer Duvet Set (Purple)', 'Keke Palmer Duvet Set (Purple)', '$29.99', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_3.html');
product4 = new myProducts('/IMG/Store Products/Store 1/Product_4.jpg', 'Keke Palmer Duvet Set (Tan)', 'Keke Palmer Duvet Set (Tan)', '$29.99', '$34.99', '&#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_4.html');
product5 = new myProducts('/IMG/Store Products/Store 1/Product_5.jpg', 'Keke Palmer T-Shirt (White)', 'Keke Palmer T-Shirt (White)', '$7.99', '$13.99', '&#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_5.html');
product6 = new myProducts('/IMG/Store Products/Store 1/Product_6.jpg', 'Keke Do You Love Me T-Shirt', 'Keke Do You Love Me T-Shirt', '$7.99', '$11.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_6.html');
product7 = new myProducts('/IMG/Store Products/Store 1/Product_7.jpg', 'Black and Brown Exfoliating Cleanser', 'Black and Brown Exfoliating Cleanser', '$6.75', '$10.25', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_7.html');
product8 = new myProducts('/IMG/Store Products/Store 1/Product_8.jpg', 'African Clarifying Mud Mask Oils and Spray', 'African Clarifying Mud Mask Oils and Spray', '$9.99', '$15.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_8.html');
product9 = new myProducts('/IMG/Store Products/Store 1/Product_9.jpg', 'Skin Safe Manscaping Trimmer', 'Skin Safe Manscaping Trimmer', '$35.75', '$39.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_9.html');
product10 = new myProducts('/IMG/Store Products/Store 1/Product_10.jpg', 'Hair Sponge Brush for Twists and Locks (Black)', 'Hair Sponge Brush for Twists and Locks (Black)', '$3.99', '$5.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_10.html');
product11 = new myProducts('/IMG/Store Products/Store 1/Product_11.jpg', 'Classic Styling Essential Compact Comb (Black)', 'Classic Styling Essential Compact Comb (Black)', '$1.99', '$3.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_11.html');
product12 = new myProducts('/IMG/Store Products/Store 1/Product_12.jpg', 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush', 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush', '$2.75', '$5.65', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_12.html');
product13 = new myProducts('/IMG/Store Products/Store 1/Product_13.jpg', 'Savanna Grass - Album By Kes', 'Savanna Grass - Album By Kes', '$12.99', '$15.25', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_13.html');
product14 = new myProducts('/IMG/Store Products/Store 1/Product_14.jpg', 'Nyraju Natural Skincare Serum For Acne(Cleanser and Toner)', 'Nyraju Natural Skincare Serum for Acne (Cleanser and Toner)', '$19.99', '$23.45', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_14.html');
product15 = new myProducts('/IMG/Store Products/Store 1/Product_15.jpg', 'Blueberry Bliss Curl Control Jelly', 'Blueberry Bliss Curl Control Jelly', '$8.99', '$10.25', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_15.html');
product16 = new myProducts('/IMG/Store Products/Store 1/Product_16.jpg', 'African  Black Soap 6 fl oz', 'African  Black Soap 6 fl oz', '$5.99', '$6.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_16.html');
product17 = new myProducts('/IMG/Store Products/Store 1/Product_17.jpg', 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)', 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)', '$4.45', '$5.35', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_17.html');
product18 = new myProducts('/IMG/Store Products/Store 1/Product_18.jpg', 'Hair Picks (3 Count)', 'Hair Picks (3 Count)', '$4.90', '$5.80', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_18.html');
product19 = new myProducts('/IMG/Store Products/Store 1/Product_19.jpg', 'Conditioner, Treatment, Detangling Spray, and Shampoo', 'Conditioner, Treatment, Detangling Spray, and Shampoo', '$15.99', '$19.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_19.html');
product20 = new myProducts('/IMG/Store Products/Store 1/Product_20.jpg', 'Buttah AHA | BHA Rosewater Toner', 'Buttah AHA | BHA Rosewater Toner', '$10.35', '$13.72', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_20.html');
product21 = new myProducts('/IMG/Store Products/Store 1/Product_21.jpg', 'Champion Adult Mens Everyday Comfort Boxer Underwear', 'Champion Adult Mens Everyday Comfort Boxer Underwear', '$10.99', '$12.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_21.html');
product22 = new myProducts('/IMG/Store Products/Store 1/Product_22.jpg', 'Womens Comfort Stretch Brief Panties (Black)', 'Womens Comfort Stretch Brief Panties (Black)', '$9.99', '$12.82', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_22.html');
product23 = new myProducts('/IMG/Store Products/Store 1/Product_23.jpg', 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)', 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)', '11.59', '$15.59', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_23.html');
product24 = new myProducts('/IMG/Store Products/Store 1/Product_24.jpg', 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)', 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)', '$12.99', '$14.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/product_24.html');
product25 = new myProducts('/IMG/Store Products/Store 1/Product_25.jpg', 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear', 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear', '$32.99', '$35.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/Page 1/Product_25.html');

myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25];

myProductArray.forEach(product => {
    productMainContainer.innerHTML += `
    <div class="Product-Container">
        <a href="${product.productLink}">
            <img src="${product.image}" alt="${product.imageAlt}">
            <div class="Product-Card">
                <span class="Price-Container">
                    <p class="Product-Price">${product.price}</p>
                    <p class="Product-Old-Price">${product.oldPrice}</p>
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