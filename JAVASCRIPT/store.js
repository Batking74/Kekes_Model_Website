// Creating Dynamic Project Card
const productMainContainer = document.querySelector('.Product-Main-Container');
class myProducts {
    constructor(image, imageAlt, description, price, rating, productLink) {
        this.image = image;
        this.imageAlt = imageAlt;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.productLink = productLink;
    }
}

product1 = new myProducts('/IMG/Store Products/Product_1.jpg', 'Picture of Curl Moisture Milk product Product', 'Camille Rose Curl Love Moisture Milk', '$6.99', '&#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_1.html');

product2 = new myProducts('/IMG/Store Products/Product_2.jpg', 'A picture of Curl Control Jelly product', 'Blueberry Bliss Curl Control Jelly', '$8.50', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_2.html');

product3 = new myProducts('/IMG/Store Products/Product_3.jpg', 'Conditioner and treatment products', 'Hair Care Conditioner Bundle', '$10.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_3.html');

product4 = new myProducts('/IMG/Store Products/Product_4.jpg', 'African Clarifying Mud Mask', 'African Black Soap for Skin', '$11.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_4.html');

product5 = new myProducts('/IMG/Store Products/Product_5.webp', 'Buttah Rosewater Toner for Skin', 'Buttah Rosewater Toner for Skin', '$9.75', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_5.html');

product6 = new myProducts('/IMG/Store Products/Product_6.webp', '', 'Joyful Noise Keke Palmer Hoodie', '$16.45', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_6.html');

product7 = new myProducts('/IMG/Store Products/Product_7.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$50.00', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_7.html');

product8 = new myProducts('/IMG/Store Products/Product_8.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$12.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_8.html');

product9 = new myProducts('/IMG/Store Products/Product_9.webp', 'image', 'Joyful Noise Keke Palmer Hoodie', '$9.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_9.html');

product10 = new myProducts('/IMG/Store Products/Product_10.webp', 'image', 'Joyful Noise Keke Palmer Hoodie', '$6.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_10.html');

product11 = new myProducts('/IMG/Store Products/Product_11.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$8.25', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_11.html');

product12 = new myProducts('/IMG/Store Products/Product_12.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$7.50', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_12.html');

product13 = new myProducts('/IMG/Store Products/Product_13.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_13.html');
product14 = new myProducts('/IMG/Store Products/Product_14.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_14.html');

product15 = new myProducts('/IMG/Store Products/Product_15.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_15.html');

product16 = new myProducts('/IMG/Store Products/Product_16.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_16.html');

product17 = new myProducts('/IMG/Store Products/Product_17.webp', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_17.html');

product18 = new myProducts('/IMG/Store Products/Product_18.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_18.html');

product19 = new myProducts('/IMG/Store Products/Product_19.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_19.html');

product20 = new myProducts('/IMG/Store Products/Product_20.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_20.html');

product21 = new myProducts('/IMG/Store Products/Product_21.webp', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_21.html');

product22 = new myProducts('/IMG/Store Products/Product_22.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_22.html');

product23 = new myProducts('/IMG/Store Products/Product_23.jpg', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_23.html');

product24 = new myProducts('/IMG/Store Products/Product_24.webp', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_24.html');

product25 = new myProducts('/IMG/Store Products/Product_25.webp', 'image', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_24.html');

myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25];

myProductArray.forEach(product => {
    productMainContainer.innerHTML += `
    <div class="Product-Container">
        <a href="${product.productLink}">
            <img src="${product.image}" alt="${product.imageAlt}">
            <div class="Product-Card">
                <p class="Product-Price">${product.price}</p>
                <p class="Product-description">${product.description}</p>
                <p class="Product-Rating">${product.rating}</p>
                <span>
                    <a class="AddToCart" href="">Add to cart</a>
                </span>
            </div>
        </a>
</div>`;
})

// Footer
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