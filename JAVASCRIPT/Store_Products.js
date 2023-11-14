import {companyInfo} from "../JAVASCRIPT/Nav&Footer_Blueprint.js";

// Declaring and initializing variables
const product = JSON.parse(localStorage.getItem('ProductObject'));
const title = document.getElementsByTagName('title')[0];
const productDescription = document.getElementsByTagName('h1')[0];
const productImage = document.querySelector('.Product-image');
const productRating = document.querySelector('#Rating');
const oldPrice = document.querySelector('.Product-Old-Price');
const numOfReviews = document.querySelector('#Number-of-Reviews');
console.log(product)





numOfReviews.textContent = product.NumOfReviews;

productRating.innerHTML = product.Rating;

// oldPrice.textContent = 

productDescription.textContent = product.Description;

title.textContent = `${companyInfo.CompanyName} - ${product.Description}`;

productImage.setAttribute('src', product.Image);
productImage.setAttribute('alt', product.Description);

document.addEventListener('beforeunload', () => {
    localStorage.removeItem('ProductObject');
})