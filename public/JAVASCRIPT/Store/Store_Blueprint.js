import { navbar } from "../Nav&Footer_Blueprint.js";
import { getProductsFromDB, getProductElements, getProductInstance, calculateDiscount } from "./Store_tools.js";
import { sendGETRequestToSever } from "../ExtraTools.js";
import LinkedList from "../LinkedList.js";
import { HTML } from "../HTML.js";
export const products = await sendGETRequestToSever('/products');

// Dynamic Store HTML Page
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
export const hamburgerBtn = document.querySelector('#hamburger-btn');
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

// Store landing page Links
pageLink[0] = `/Palmerstore`;
pageLink[1] = `/Palmerstore/Page2`;
pageLink[2] = `/Palmerstore/Page3`;

// Dynamic Elements
setStoreName("Palmer Store");
setDocName("Palmer Studios Store");

// Creating Dynamic Project Card/Classes
export default class Product {
    constructor(image, description, price, rating, link, id) {
        this.image = image;
        this.imageAlt = description;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.link = link;
        this.id = id;
    }
    getImage() { return this.image; }
    getAlt() { return this.imageAlt; }
    getDescription() { return this.description; }
    getPrice() { return this.price; }
    getLink() { return this.link; }
    getId() { return this.id; }
}

// Creating Store Products
export function instantiateProducts(start, end) {
    for(let i = start; i < end; i++) {
        const attr = getProductsFromDB(i);
        const object = new Product(attr[0], attr[2], attr[1], rating[4], attr[3], attr[4]);
        productArray.insertAtHead(object);
        productMainContainer.innerHTML += HTML.StoreProduct;
    }
}

export function displayProducts(productsLength) {
    for(let i = 0; i < productsLength; i++) {  
        const element = getProductElements();
        const productAttr = getProductInstance(i);
        element[0][i].setAttribute('src', productAttr[0]);
        element[0][i].setAttribute('alt', productAttr[2]);
        element[5][i].setAttribute('href', productAttr[3]);
        element[1][i].textContent = `${productAttr[1]}`;
        element[4][i].textContent = productAttr[2];
        element[2][i].textContent = getDiscount(productAttr[1], element[3][i], productAttr[4]);

        // Non Discounted Products Condition
        if(element[2][i].textContent == productAttr[1]) {
            element[2][i].textContent = `${productAttr[1]}`;
            element[1][i].textContent = '';
            element[3][i].innerHTML = '';
        }
    }
}

// Getting Discounts
function getDiscount(price, percentageOff, id) {
    if(price <= 20 && price > 10) price = calculateDiscount(30, price, percentageOff);
    else if(price >= 100) price = calculateDiscount(50, price, percentageOff);
    else if(id == 23) price = calculateDiscount(20, price, percentageOff);
    else if(id == 18) price = calculateDiscount(37, price, percentageOff);
    else if(id == 5) price = calculateDiscount(25, price, percentageOff);
    else if(id == 12) price = calculateDiscount(30, price, percentageOff);
    return price;
}

export function setStoreName(storeName) {
    storeTitle.forEach(element => element.innerHTML = storeName);
}

export function setDocName(docName) {
    pageName.forEach(element => element.innerHTML = docName);
}

export function setNumProducts(num) {
    const numberOfProducts = document.querySelector('#Products-Count');
    numberOfProducts.innerHTML = `${num}`;
}

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

export function getNavigator(index) {
    const attribute = new Array(4);
    attribute[0] = `/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png`;
    attribute[1] = `/IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.png`;
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

hamburgerBtn.addEventListener('click', () => { navbar.classList.toggle('active'); });