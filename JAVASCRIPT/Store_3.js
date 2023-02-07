import Product, { companyName, productCount, productMainContainer, nextPage, sideNavigation, openMenu, footerForm, footerInput, footerBtn, footerResponse, footerLabel, copyright, date, pageLink, price, rating, img, description, link, validate, getAllLengths, getTenPercnt, getFifteenPercnt, getTwentyPercnt, getTwentyFivePercnt, getThirtyPercnt, getFourtyPercnt, getFiftyPercnt } from "./Store_Products_Blueprint.js";



const image = ['/IMG/Store Products/Store 3/Product_1.jpg', '/IMG/Store Products/Store 3/Product_2.jpg', '/IMG/Store Products/Store 3/Product_3.jpg', '/IMG/Store Products/Store 3/Product_4.jpg', '/IMG/Store Products/Store 3/Product_5.jpg', '/IMG/Store Products/Store 3/Product_6.jpg', '/IMG/Store Products/Store 3/Product_7.jpg', '/IMG/Store Products/Store 3/Product_8.jpg', '/IMG/Store Products/Store 3/Product_9.jpg', '/IMG/Store Products/Store 3/Product_10.jpg', '/IMG/Store Products/Store 3/Product_11.jpg', '/IMG/Store Products/Store 3/Product_12.jpg', '/IMG/Store Products/Store 3/Product_13.jpg', '/IMG/Store Products/Store 3/Product_14.jpg', '/IMG/Store Products/Store 3/Product_15.jpg', '/IMG/Store Products/Store 3/Product_16.jpg', '/IMG/Store Products/Store 3/Product_17.jpg', '/IMG/Store Products/Store 3/Product_18.jpg', '/IMG/Store Products/Store 3/Product_19.jpg', '/IMG/Store Products/Store 3/Product_20.jpg', '/IMG/Store Products/Store 3/Product_21.jpg', '/IMG/Store Products/Store 3/Product_22.jpg', '/IMG/Store Products/Store 3/Product_23.jpg', '/IMG/Store Products/Store 3/Product_24.jpg', '/IMG/Store Products/Store 3/Product_25.jpg', ];

const description = [];

const productLink = ['/HTML/Store/Page 3/product_1.html', '/HTML/Store/Page 3/product_2.html', '/HTML/Store/Page 3/product_3.html', '/HTML/Store/Page 3/product_4.html', '/HTML/Store/Page 3/product_5.html', '/HTML/Store/Page 3/product_6.html', '/HTML/Store/Page 3/product_7.html', '/HTML/Store/Page 3/product_8.html', '/HTML/Store/Page 3/product_9.html', '/HTML/Store/Page 3/product_10.html', '/HTML/Store/Page 3/product_11.html', '/HTML/Store/Page 3/product_12.html', '/HTML/Store/Page 3/product_13.html', '/HTML/Store/Page 3/product_14.html', '/HTML/Store/Page 3/product_15.html', '/HTML/Store/Page 3/product_16.html', '/HTML/Store/Page 3/product_17.html', '/HTML/Store/Page 3/product_18.html', '/HTML/Store/Page 3/product_19.html', '/HTML/Store/Page 3/product_20.html', '/HTML/Store/Page 3/product_21.html', '/HTML/Store/Page 3/product_22.html', '/HTML/Store/Page 3/product_23.html', '/HTML/Store/Page 3/product_24.html', '/HTML/Store/Page 3/product_25.html'];

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


const goBack = document.getElementById('Store-Page-Nav-Btn-Left');
goBack.addEventListener('click', () => {
    location.replace('/HTML/Store/Page 2/Store_2.html')
})