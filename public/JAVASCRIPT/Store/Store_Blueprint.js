// Importing Modules
import { sendPUTRequestToSever } from "../helpers/request_methods.js";
import LinkedList from "../helpers/LinkedList.js";
import * as util from "./helpers/helpers.js";
import "../Nav_and_Footer/Nav&Footer.js";
import { HTML } from "../HTML.js";


// Dynamic Store HTML Page | Displaying Store
export const main = document.getElementsByTagName('main');
main[0].innerHTML = HTML.StoreBody;


// Targeting Elements & Creating Arrays
export const body = document.getElementsByTagName('body');
export const storeName = document.getElementsByTagName('header');
export const storeAd = document.getElementsByTagName('aside');
export const numberOfProducts = document.querySelector('#Products-Count');
export const productMainContainer = document.querySelector('.Product-Main-Container');
export const storeNavigation = document.querySelector('#nav-2');
export const sideNavigation = document.querySelector('.nav-container');
export let pageName = document.querySelectorAll('#Page-Name');
export let storeTitle = document.querySelectorAll('#Store-Title');
export let pageLink = new LinkedList();
export const productArray = new LinkedList();
export const rating = new Array(5);
rating[0] = '&#8902';
rating[1] = '&#8902 &#8902';
rating[2] = '&#8902 &#8902 &#8902';
rating[3] = '&#8902 &#8902 &#8902 &#8902';
rating[4] = '&#8902 &#8902 &#8902 &#8902 &#8902';


// Store page Links for Navigating
pageLink[0] = '/Store';
pageLink[1] = `/Store/Page2`;
pageLink[2] = `/Store/Page3`;


// Dynamic Elements for setting Store Title
util.setStoreName("Palmer Store");
util.setDocName("Palmer Studios Store");


// Creating Dynamic Project Card/Classes
export default class Product {
    constructor(image, description, price, rating, discountedPrice, id, percentageOff, numOfReviews) {
        this.discountedPrice = discountedPrice;
        this.percentageOff = percentageOff;
        this.numOfReviews = numOfReviews;
        this.description = description;
        this.imageAlt = description;
        this.rating = rating;
        this.image = image;
        this.price = price;
        this.id = id;
    }
    getDiscountedPrice() { return this.discountedPrice; }
    getNumberOfReviews() { return this.numOfReviews; }
    getPercentageOFF() { return this.percentageOff; }
    getRating() { return this.rating; }
    getDescription() { return this.description; }
    getAlt() { return this.imageAlt; }
    getImage() { return this.image; }
    getPrice() { return this.price; }
    getId() { return this.id; }
}


// Creating Store Products
export function instantiateProducts(start, end) {
    // Loops through the specified range of products to display
    for(let i = start; i < end; i++) {
        // Retrieve product details from the database
        const [img, descrip, price, discount, id, percentageOff, reviews, rate] = util.getProductsFromDB(i);

        // Create a new Product instance with retrieved details
        const object = new Product(img, descrip, price, rate, discount, id, percentageOff, reviews);
        
        // Add the created product instance to the productArray
        productArray.insertAtHead(object);

        // Append the corresponding HTML element to the DOM
        productMainContainer.innerHTML += HTML.StoreProduct;
    }
}


// Displays all products to the webpage
export function displayProducts(productsLength) {
    for(let i = 0; i < productsLength; i++) {
        // Getting all elements and instances
        const [imgElmt,priceElmt,discountPriceElmt,percentOffElmt,descripElmt,linkElmt, rateElmt] = util.getProductElmt();
        const [img, price, descrip, id, discount, percentOff, reviews, rate] = util.getProductInstance(i);
        // Setting Attributes
        imgElmt[i].setAttribute('src', img);
        imgElmt[i].setAttribute('alt', descrip);
        linkElmt[i].setAttribute('href', `http://localhost:5000/Store/Product?descrip=${descrip}&id=${id}`);
        // Displaying data
        rateElmt[i].innerHTML = rate;
        priceElmt[i].textContent = price;
        descripElmt[i].textContent = descrip;
        discountPriceElmt[i].textContent = getDiscount(percentOffElmt[i], percentOff, price, discount, id);
        // Non Discounted Products Condition
        if(percentOff === '0%') {
            discountPriceElmt[i].textContent = `${price}`;
            priceElmt[i].textContent = '';
            percentOffElmt[i].innerHTML = '';
        }
    }
}


// Getting Discounted items
function getDiscount(percentageOffElement, dbPercentage, price, discountPrice, id) {
    if(dbPercentage !== '0%') {
        const total = util.calculateDiscount(percentageOffElement, dbPercentage, price);
        if(discountPrice === 'none') {
            sendPUTRequestToSever('/Store/Product/Discounts', { id: id, value: total, column: 'DiscountedPrice' });
        }
        return total;
    }
    return price;
}


// Setting eventlisters for all navigations on each page
export function newNavigations(index) {
    const nextPage = document.querySelector('#Next-Page');
    const backButton = document.querySelector('#Previous-Page');
    if(index === 0) {
        nextPage.addEventListener('click', () => location.replace(`${pageLink[1]}`));
    }

    if(index === 1) {
        nextPage.addEventListener('click', () => location.replace(`${pageLink[2]}`));
        backButton.addEventListener('click', () => location.replace(`${pageLink[0]}`));
    }

    if(index === 2) {
        backButton.addEventListener('click', () => location.replace(`${pageLink[1]}`));
    }
}


// Setting different navigations for each page
export function getNavigator(index) {
    const attribute = new Array(4);
    attribute[0] = `/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.webp`;
    attribute[1] = `/IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.webp`;
    attribute[2] = "Next-Page";
    attribute[3] = "Previous-Page";
    const nav = new Array(3);
    nav[0] = `
    <h2>Page 1 of 3</h2>
    <img id="${attribute[2]}" src="${attribute[0]}" alt="Next Page">`;

    nav[1] = `
    <img id="${attribute[3]}" src="${attribute[1]}" alt="Back">
    <h2>Page 2 of 3</h2>
    <img id="${attribute[2]}" src="${attribute[0]}" alt="Next Page">`;

    nav[2] = `
    <img id="${attribute[3]}" src="${attribute[1]}" alt="Back">
    <h2>Page 3 of 3</h2>`;
    return nav[index];
}


export function sortList() {
    const filterOptions = document.getElementById('Filter');
    filterOptions.addEventListener('change', (element) => {
        const userSelection = element.target.value;
        if(userSelection === 'Best Selling') getBestSellers();
        else if(userSelection === 'Alphabetically, A-Z') sortAtoZ();
        else if(userSelection === 'Alphabetically, Z-A') sortZtoA();
        else if(userSelection === 'Price, low to high') sortLowToHigh();
        else if(userSelection === 'Price, high to low') sortHighToLow();
    });
}


function getBestSellers() {
    console.log("Sorted Best Sellers!!!");
}


function sortAtoZ() {
    console.log("Sorted A to Z!!!");
}


function sortZtoA() {
    console.log("Sorted Z to A!!!");
}


function sortLowToHigh() {
    console.log("Sorted Low to High!!!");
}


function sortHighToLow() {
    console.log("Sorted High to Low!!!");
}