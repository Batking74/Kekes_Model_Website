import Product, { navbar, pageName, companyName, storeTitle, productCount, productMainContainer, nextPage, sideNavigation, openMenu, storeNavigation, footer, footerForm, footerInput, footerBtn, footerResponse, footerLabel, date, pageLink, price, rating, img, description, productLink, myProductArray, navLinks, icons, validate, getAllLengths, getTenPercnt, getFifteenPercnt, getTwentyPercnt, getTwentyFivePercnt, getThirtyPercnt, getFourtyPercnt, getFiftyPercnt } from "./Store_Products_Blueprint.js";

const previousPageBtn = document.getElementById('Previous-Page');


nextPage.addEventListener('click', () => {
    location.replace(`${pageLink[2]}`)
})

previousPageBtn.addEventListener('click', () => {
    location.replace(`${pageLink[0]}`)
})



































// Creating Dynamic Project Card
// const productMainContainer = document.querySelector('.Product-Main-Container');
// class myProducts {
//     constructor(image, imageAlt, description, price, rating, productLink) {
//         this.image = image;
//         this.imageAlt = imageAlt;
//         this.description = description;
//         this.price = price;
//         this.rating = rating;
//         this.productLink = productLink;
//     }
// }

// const originalPrice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const rating = ['&#8902', '&#8902 &#8902', '&#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902', '&#8902 &#8902 &#8902 &#8902 &#8902'];

// const image = ['/IMG/Store Products/Store 2/Product_1.jpg', '/IMG/Store Products/Store 2/Product_2.jpg', '/IMG/Store Products/Store 2/Product_3.jpg', '/IMG/Store Products/Store 2/Product_4.jpg', '/IMG/Store Products/Store 2/Product_5.jpg', '/IMG/Store Products/Store 2/Product_6.jpg', '/IMG/Store Products/Store 2/Product_7.jpg', '/IMG/Store Products/Store 2/Product_8.jpg', '/IMG/Store Products/Store 2/Product_9.jpg', '/IMG/Store Products/Store 2/Product_10.jpg', '/IMG/Store Products/Store 2/Product_11.jpg', '/IMG/Store Products/Store 2/Product_12.jpg', '/IMG/Store Products/Store 2/Product_13.jpg', '/IMG/Store Products/Store 2/Product_14.jpg', '/IMG/Store Products/Store 2/Product_15.jpg', '/IMG/Store Products/Store 2/Product_16.jpg', '/IMG/Store Products/Store 2/Product_17.jpg', '/IMG/Store Products/Store 2/Product_18.jpg', '/IMG/Store Products/Store 2/Product_19.jpg', '/IMG/Store Products/Store 2/Product_20.jpg', '/IMG/Store Products/Store 2/Product_21.jpg', '/IMG/Store Products/Store 2/Product_22.jpg', '/IMG/Store Products/Store 2/Product_23.jpg', '/IMG/Store Products/Store 2/Product_24.jpg', '/IMG/Store Products/Store 2/Product_25.jpg'];

// const description = [];

// const productLink = ['/HTML/Store/Page 2/product_1.html', '/HTML/Store/Page 2/product_2.html', '/HTML/Store/Page 2/product_3.html', '/HTML/Store/Page 2/product_4.html', '/HTML/Store/Page 2/product_5.html', '/HTML/Store/Page 2/product_6.html', '/HTML/Store/Page 2/product_7.html', '/HTML/Store/Page 2/product_8.html', '/HTML/Store/Page 2/product_9.html', '/HTML/Store/Page 2/product_10.html', '/HTML/Store/Page 2/product_11.html', '/HTML/Store/Page 2/product_12.html', '/HTML/Store/Page 2/product_13.html', '/HTML/Store/Page 2/product_14.html', '/HTML/Store/Page 2/product_15.html', '/HTML/Store/Page 2/product_16.html', '/HTML/Store/Page 2/product_17.html', '/HTML/Store/Page 2/product_18.html', '/HTML/Store/Page 2/product_19.html', '/HTML/Store/Page 2/product_20.html', '/HTML/Store/Page 2/product_21.html', '/HTML/Store/Page 2/product_22.html', '/HTML/Store/Page 2/product_23.html', '/HTML/Store/Page 2/product_24.html', '/HTML/Store/Page 2/product_25.html'];

// function getOriginalPrice(index) {
//     return '$' + originalPrice[index];
// }

// product1 = new myProducts(image[0], description[0], description[0], getOriginalPrice(0), rating[3], productLink[0]);
// product2 = new myProducts(image[1], description[1], description[1], getOriginalPrice(1), rating[4], productLink[1]);
// product3 = new myProducts(image[2], description[2], description[2], getOriginalPrice(2), rating[4], productLink[2]);
// product4 = new myProducts(image[3], description[3], description[3], getOriginalPrice(3), rating[3], productLink[3]);
// product5 = new myProducts(image[4], description[4], description[4], getOriginalPrice(4), rating[4], productLink[4]);
// product6 = new myProducts(image[5], description[5], description[5], getOriginalPrice(5), rating[4], productLink[5]);
// product7 = new myProducts(image[6], description[6], description[6], getOriginalPrice(6), rating[3], productLink[6]);
// product8 = new myProducts(image[7], description[7], description[7], getOriginalPrice(7), rating[4], productLink[7]);
// product9 = new myProducts(image[8], description[8], description[8], getOriginalPrice(8), rating[4], productLink[8]);
// product10 = new myProducts(image[9], description[9], description[9], getOriginalPrice(9), rating[4], productLink[9]);
// product11 = new myProducts(image[10], description[10], description[10], getOriginalPrice(10), rating[4], productLink[10]);
// product12 = new myProducts(image[11], description[11], description[11], getOriginalPrice(11), rating[4], productLink[11]);
// product13 = new myProducts(image[12], description[12], description[12], getOriginalPrice(12), rating[4], productLink[12]);
// product14 = new myProducts(image[13], description[13], description[13], getOriginalPrice(13), rating[3], productLink[13]);
// product15 = new myProducts(image[14], description[14], description[14], getOriginalPrice(14), rating[4], productLink[14]);
// product16 = new myProducts(image[15], description[15], description[15], getOriginalPrice(15), rating[4], productLink[15]);
// product17 = new myProducts(image[16], description[16], description[16], getOriginalPrice(16), rating[3], productLink[16]);
// product18 = new myProducts(image[17], description[17], description[17], getOriginalPrice(17), rating[4], productLink[17]);
// product19 = new myProducts(image[18], description[18], description[18], getOriginalPrice(18), rating[4], productLink[18]);
// product20 = new myProducts(image[19], description[19], description[19], getOriginalPrice(19), rating[3], productLink[19]);
// product21 = new myProducts(image[20], description[20], description[20], getOriginalPrice(20), rating[4], productLink[20]);
// product22 = new myProducts(image[21], description[21], description[21], getOriginalPrice(21), rating[4], productLink[21]);
// product23 = new myProducts(image[22], description[22], description[22], getOriginalPrice(22), rating[4], productLink[22]);
// product24 = new myProducts(image[23], description[23], description[23], getOriginalPrice(23), rating[4], productLink[23]);
// product25 = new myProducts(image[24], description[24], description[24], getOriginalPrice(24), rating[4], productLink[24]);

// myProductArray = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25];

// myProductArray.forEach(product => {
//     productMainContainer.innerHTML += `
//     <div class="Product-Container">
//         <a href="${product.productLink}">
//             <img src="${product.image}" alt="${product.imageAlt}">
//             <div class="Product-Card">
//                 <p class="Product-Price">${product.price}</p>
//                 <p class="Product-description">${product.description}</p>
//                 <p class="Product-Rating">${product.rating}</p>
//                 <span>
//                     <a class="AddToCart" href="">Add to cart</a>
//                 </span>
//             </div>
//         </a>
// </div>`;
// })

// // Footer
// const footerForm = document.getElementById('footerForm');
// const footerInput = document.getElementById('footerInput');
// const footerBtn = document.getElementById('footerbtn');
// const footerResponse = document.getElementById('footerSubmissionResponse');
// const footerLabel = document.getElementById('footerLabel');
// footerForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if(footerInput.value == '') {
//     }
//     else {
//         footerLabel.remove()
//         footerInput.remove();
//         footerBtn.remove();
//         console.log('Thank You, you will recieve emails on new content!')
//         footerResponse.innerHTML = `<svg class="Footer-Response-Icon" viewBox="0 0 24 24"><path fill="green" d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>Thank You, you will recieve emails on new content!`
//     }
// })

// const goBack = document.getElementById('Store-Page-Nav-Btn-Left');
// const nextPage = document.getElementById('Store-Page-Nav-Btn-Right');
// nextPage.addEventListener('click', () => {
//     location.replace('/HTML/Store/Page 3/Store_3.html')
// })

// goBack.addEventListener('click', () => {
//     location.replace('/HTML/Store/Page 1/Store_1.html')
// })
