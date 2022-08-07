// Creating Dynamic Project Card
const productMainContainer = document.querySelector('.Product-Main-Container');
class myProducts {
    constructor(image, description, price, rating) {
        this.image = image;
        this.description = description;
        this.price = price;
        this.rating = rating;
    }
}

product1 = new myProducts('/IMG/merch1.jpg', 'Keke Palmer White T-Shirt Logo', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product2 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$20.00', '&#8902 &#8902 &#8902 &#8902 &#8902');
product3 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$1.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product4 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$3.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product5 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$15.75', '&#8902 &#8902 &#8902 &#8902 &#8902');
product6 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$16.45', '&#8902 &#8902 &#8902 &#8902 &#8902');
product7 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$50.00', '&#8902 &#8902 &#8902 &#8902 &#8902');
product8 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$12.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product9 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$9.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product10 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$6.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product11 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$8.25', '&#8902 &#8902 &#8902 &#8902 &#8902');
product12 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$7.50', '&#8902 &#8902 &#8902 &#8902 &#8902');
product13 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product14 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product15 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product16 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product17 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product18 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product19 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product20 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product21 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product22 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product23 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
product24 = new myProducts('/IMG/Tiki.jpg', 'Joyful Noise Keke Palmer Hoodie', '$34.99', '&#8902 &#8902 &#8902 &#8902 &#8902');
myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24];
myProductArray.forEach(product => {
    productMainContainer.innerHTML += `
    <div class="Product-Container">
    <img src="${product.image}" alt="Dynamic images for store products">
        <div class="Product-Card">
        <h3 class="Product-Price">${product.price}</h3>
        <p class="Product-description">${product.description}</p>
        <p class="Product-Rating">${product.rating}</p>
    </div>
</div>`;
})