// Creating Dynamic Project Card
const productMainContainer = document.querySelector('.Product-Main-Container');
class myProducts {
    constructor(image, description, price, rating, productLink) {
        this.image = image;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.productLink = productLink;
    }
}

product1 = new myProducts('/IMG/merch1.jpg', 'Keke Palmer White T-Shirt Logo', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_1.html');
product2 = new myProducts('/IMG/keke-do-you-love-me-shirt.jpg', 'Keke do you love me T-Shirt', '$20.00', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_2.html');
product3 = new myProducts('/IMG/product1.jpg', 'Camille Rose Conditioning Cream - Rice Milk & Macadamia', '$1.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_3.html');
product4 = new myProducts('/IMG/product2.jpg', 'Blueberry Bliss Curl Control Jelly', '$3.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_4.html');
product5 = new myProducts('/IMG/product3.jpg', 'Joyful Noise Keke Palmer Hoodie', '$15.75', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_5.html');
product6 = new myProducts('/IMG/product4.jpg', 'Joyful Noise Keke Palmer Hoodie', '$16.45', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_6.html');
product7 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$50.00', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_7.html');
product8 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$12.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_8.html');
product9 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$9.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_9.html');
product10 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$6.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_10.html');
product11 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$8.25', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_11.html');
product12 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$7.50', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_12.html');
product13 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_13.html');
product14 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_14.html');
product15 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_15.html');
product16 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_16.html');
product17 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_17.html');
product18 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_18.html');
product19 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_19.html');
product20 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_20.html');
product21 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_21.html');
product22 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_22.html');
product23 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_23.html');
product24 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902', '/HTML/Store/product_24.html');

myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24];

myProductArray.forEach(product => {
    productMainContainer.innerHTML += `
    <div class="Product-Container">
    <img src="${product.image}" alt="Dynamic images for store products">
    <div class="Product-Card">
        <a href="${product.productLink}" class="Product-Price">${product.price}</a>
        <a href="${product.productLink}" class="Product-description">${product.description}</a>
        <a href="" class="Product-Rating">${product.rating}</a>
        <a class="AddToCart" href="">Add to cart</a>
    </div>
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