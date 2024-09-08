// Importing Modules
import { productArray, storeTitle, pageName, rating } from "../Store_Blueprint.js";
import { sendGETRequestToSever } from "../../helpers/request_methods.js";
export let products;
try {
    products = await sendGETRequestToSever(`/Store/Products`);
}
catch(error) {

}


// Declares variables containing product details
export function getProductsFromDB(i) {
    const id = products[i].id;
    const img = products[i].Image;
    const price = products[i].Price;
    const descrip = products[i].Description;
    const discountedPrice = products[i].DiscountedPrice;
    const percentageOff = products[i].PercentageOff;
    const numberOfReviews = products[i].NumberOfReviews;
    products[i].Rating = rating[parseInt(Math.random() * 5)];
    return [img, descrip, price, discountedPrice, id, percentageOff, numberOfReviews, products[i].Rating];
}


// Gets all product instance Variables
export function getProductInstance(i) {
    const id = productArray.getIndex(i).value.getId();
    const img = productArray.getIndex(i).value.getImage();
    const price = productArray.getIndex(i).value.getPrice();
    const descrip = productArray.getIndex(i).value.getDescription();
    const discountedPrice = productArray.getIndex(i).value.getDiscountedPrice();
    const percentageOff = productArray.getIndex(i).value.getPercentageOFF();
    const rate = productArray.getIndex(i).value.getRating();
    const numberOfReviews = productArray.getIndex(i).value.getNumberOfReviews();
    return [img, price, descrip, id, discountedPrice, percentageOff, numberOfReviews, rate];
}


// Grabs all elements thats needed to display product info
export function getProductElmt() {
    const itemImages = document.querySelectorAll('.itemImage');
    const itemRegularPrices = document.querySelectorAll('.itemRegularPrice');
    const itemDiscountPrices = document.querySelectorAll('.itemDiscount');
    const itemPercentagesOff = document.querySelectorAll('.itemPercentageOff');
    const itemDiscriptions = document.querySelectorAll('.itemDiscription');
    const rate = document.querySelectorAll('.Product-Rating');
    const itemPageLinks = document.querySelectorAll('.itemPageLink');
    return [itemImages, itemRegularPrices, itemDiscountPrices, itemPercentagesOff, itemDiscriptions, itemPageLinks, rate]
}


// Calculates discounts if a Product is on sale
export function calculateDiscount(percentageOffElement, dbPercentage, price) {
    if(price.includes('$')) price = parseFloat(price.substring(1));
    dbPercentage = parseInt(dbPercentage);
    let discount = dbPercentage / 100;
    let total = price - (price * discount);
    percentageOffElement.textContent = `${dbPercentage}% OFF!`;
    return `$${parseFloat(total).toFixed(2)}`;
}


// Sets the Stores name (page1, page2, page3...)
export function setStoreName(storeName) {
    storeTitle.forEach(element => element.innerHTML = storeName);
}


// Setting the document name on each store page
export function setDocName(docName) {
    pageName.forEach(element => element.innerHTML = docName);
}


// Setting the number of products on each store page
export function setNumProducts(num) {
    const numberOfProducts = document.querySelector('#Products-Count');
    numberOfProducts.innerHTML = `${num}`;
}