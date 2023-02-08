import Product, { bluePrints } from "./Store_Products_Blueprint.js";
console.log(bluePrints);

bluePrints[18] = "Palmer Studios Store | Page 2"

bluePrints[7].innerHTML = `
    <img id="Previous-Page" src="/IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.png" alt="Back">
    <h2>Page 2 of 3</h2>
    <img id="Next-Page" src="/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png" alt="Next Page">
`

let backButton = document.getElementById('Previous-Page');

backButton.addEventListener('click', () => {
    location.replace(`${bluePrints[10][0]}`)
})







// const originalPrice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const rating = ['&#8902', '&#8902 &#8902', '&#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902 &#8902'];

// const image = ['/IMG/Store Products/Store 2/Product_1.jpg', '/IMG/Store Products/Store 2/Product_2.jpg', '/IMG/Store Products/Store 2/Product_3.jpg', '/IMG/Store Products/Store 2/Product_4.jpg', '/IMG/Store Products/Store 2/Product_5.jpg', '/IMG/Store Products/Store 2/Product_6.jpg', '/IMG/Store Products/Store 2/Product_7.jpg', '/IMG/Store Products/Store 2/Product_8.jpg', '/IMG/Store Products/Store 2/Product_9.jpg', '/IMG/Store Products/Store 2/Product_10.jpg', '/IMG/Store Products/Store 2/Product_11.jpg', '/IMG/Store Products/Store 2/Product_12.jpg', '/IMG/Store Products/Store 2/Product_13.jpg', '/IMG/Store Products/Store 2/Product_14.jpg', '/IMG/Store Products/Store 2/Product_15.jpg', '/IMG/Store Products/Store 2/Product_16.jpg', '/IMG/Store Products/Store 2/Product_17.jpg', '/IMG/Store Products/Store 2/Product_18.jpg', '/IMG/Store Products/Store 2/Product_19.jpg', '/IMG/Store Products/Store 2/Product_20.jpg', '/IMG/Store Products/Store 2/Product_21.jpg', '/IMG/Store Products/Store 2/Product_22.jpg', '/IMG/Store Products/Store 2/Product_23.jpg', '/IMG/Store Products/Store 2/Product_24.jpg', '/IMG/Store Products/Store 2/Product_25.jpg'];

// const description = [];

// const productLink = ['/HTML/Store/Page 2/product_1.html', '/HTML/Store/Page 2/product_2.html', '/HTML/Store/Page 2/product_3.html', '/HTML/Store/Page 2/product_4.html', '/HTML/Store/Page 2/product_5.html', '/HTML/Store/Page 2/product_6.html', '/HTML/Store/Page 2/product_7.html', '/HTML/Store/Page 2/product_8.html', '/HTML/Store/Page 2/product_9.html', '/HTML/Store/Page 2/product_10.html', '/HTML/Store/Page 2/product_11.html', '/HTML/Store/Page 2/product_12.html', '/HTML/Store/Page 2/product_13.html', '/HTML/Store/Page 2/product_14.html', '/HTML/Store/Page 2/product_15.html', '/HTML/Store/Page 2/product_16.html', '/HTML/Store/Page 2/product_17.html', '/HTML/Store/Page 2/product_18.html', '/HTML/Store/Page 2/product_19.html', '/HTML/Store/Page 2/product_20.html', '/HTML/Store/Page 2/product_21.html', '/HTML/Store/Page 2/product_22.html', '/HTML/Store/Page 2/product_23.html', '/HTML/Store/Page 2/product_24.html', '/HTML/Store/Page 2/product_25.html'];