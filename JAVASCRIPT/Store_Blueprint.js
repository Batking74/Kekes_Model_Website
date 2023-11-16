import {} from "../JAVASCRIPT/Nav&Footer_Blueprint.js";
import LinkedList from "../JAVASCRIPT/LinkedList.js";
import { HTML } from "../JAVASCRIPT/HTML.js";
import Stack from "./Stack.js";

// Dynamic Store HTML Page
export const main = document.getElementsByTagName('main');
main[0].innerHTML = HTML.StoreBody;


// Targeting Elements
export const body = document.getElementsByTagName('body');
export const storeName = document.getElementsByTagName('header');
export const storeAd = document.getElementsByTagName('aside');
export const numberOfProducts = document.querySelector('#Products-Count');
export const productMainContainer = document.querySelector('.Product-Main-Container');
export const storeNavigation = document.querySelector('#nav-2');
export const sideNavigation = document.querySelector('.nav-container');
export let pageName = document.querySelectorAll('#Page-Name');
export let storeTitle = document.querySelectorAll('#Store-Title');


// Declaring LinkedLists
export let pageLink = new LinkedList();
export const productArray = new LinkedList();
export let price = new LinkedList();
export let isDiscounted = new LinkedList();
export let description = new LinkedList();
export let img = new LinkedList();
export let productReviews = new LinkedList();
export const productsList = new LinkedList();
export const rating = new Array(5);

rating[0] = '&#8902';
rating[1] = '&#8902 &#8902';
rating[2] = '&#8902 &#8902 &#8902';
rating[3] = '&#8902 &#8902 &#8902 &#8902';
rating[4] = '&#8902 &#8902 &#8902 &#8902 &#8902';


// Store landing page Links
pageLink[0] = `../HTML/Store_1.html`;
pageLink[1] = `../HTML/Store_2.html`;
pageLink[2] = `../HTML/Store_3.html`;


// HTML Attribute Values
const attribute = new Array(4);
attribute[0] = `../IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.webp`;
attribute[1] = `../IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.webp`;
attribute[2] = "Next-Page";
attribute[3] = "Previous-Page";


// Dynamic Elements
setStoreName("Palmer Store");
setDocName("Palmer Studios Store");


// Creating Dynamic Project Card/Class
export default class Product {
    constructor(image, description, price, rating, isDiscounted, numOfReviews, id) {
        this.Image = image;
        this.Description = description;
        this.Price = price;
        this.Rating = rating;
        this.NumOfReviews = numOfReviews;
        this.isDiscounted = isDiscounted;
        this.id = id;
    }
    getImage() {
        return this.Image;
    }
    getDescription() {
        return this.Description;
    }
    getPrice() {
        return this.Price;
    }
    isDiscounted() {
        return this.isDiscounted;
    }
    getId() {
        return this.id;
    }
    getNumOfReviews() {
        return this.NumOfReviews;
    }
}


// ID Generator
export function* generateId(i) {
    let id = 4381971 + (i * 27385);
    while(true) yield id;
}


// Creating Store Products/Objects
export function createProducts(array, randomNum) {
    for(let i = 0; i < array.length; i++) {
        const itemImage = img.getIndex(i).value;
        const itemPrice = price.getIndex(i).value;
        const itemDescription = description.getIndex(i).value;
        const isDiscounted = this.isDiscounted.getIndex(i).value;
        const numOfReviews = productReviews.getIndex(i).value;
        const random = parseInt(Math.random() * 5);
        let id = generateId(i).next().value + randomNum;
        
        // Instantiate Objects
        const object = new Product(itemImage, itemDescription, itemPrice, rating[random], isDiscounted, numOfReviews, id);
        
        // Push objects to list
        productsList.insertAtHead(object);
        
        // Displaying Each Products Attributes
        productMainContainer.innerHTML += HTML.StoreProduct;
    }
}


// Displays all Product instances to the Web Page
export function displayProducts() {
    for(let i = 0; i < productsList.length; i++) {
        const itemImage = img.getIndex(i).value;
        const regularPrice = price.getIndex(i).value;
        const id = productsList.getIndex(i).value.id;
        const isDiscounted = this.isDiscounted.getIndex(i).value;
        const itemImages = document.querySelectorAll('.itemImage');
        const ratingElement = document.querySelectorAll('.Product-Rating');
        const itemRegularPrices = document.querySelectorAll('.itemRegularPrice');
        const percentageOffElement = document.querySelectorAll('.itemPercentageOff');
        
        // Building HTML Store HTML
        ratingElement.item(i).innerHTML = productsList.getIndex(i).value.Rating;
        productMainContainer.children[i].setAttribute('id', id)
        itemImages[i].setAttribute('src', itemImage);
        itemImages[i].setAttribute('alt', description.getIndex(i).value);
        
        // If the product insn't discounted display the normal price else display the discounted price.
        if(isDiscounted != false) {
            const discount = getDiscount(regularPrice, isDiscounted[1], percentageOffElement[i], id);
            itemRegularPrices[i].textContent = `$${regularPrice}`;
            display(discount, i);
            continue;
        }
        display(`$${regularPrice}`, i);
    }
}


// Displays all prices and Descriptions
function display(price, i) {
    const itemDiscriptions = document.querySelectorAll('.itemDiscription');
    const itemDiscountPrices = document.querySelectorAll('.itemDiscount');
    itemDiscriptions[i].textContent = description.getIndex(i).value;
    itemDiscountPrices[i].textContent = price;
}


// Getting Discounts
function getDiscount(originalPrice, percentOff, element) {
    let discount = percentOff / 100;
    let total = originalPrice - (originalPrice * discount);
    element.textContent = `${percentOff}% OFF!`;
    return `$${parseFloat(total).toFixed(2)}`;
}


// Sets the store name in HTML
export function setStoreName(storeName) {
    storeTitle.forEach(element => element.innerHTML = storeName);
}


// Sets the store title element/tag name in HTML
export function setDocName(docName) {
    pageName.forEach(element => element.innerHTML = docName);
}


// Sets the number of products on each store (ex: 23 products)
export function setNumProducts(num) {
    const numberOfProducts = document.querySelector('#Products-Count');
    numberOfProducts.innerHTML = `${num}`;
}


// Sets a new HTML Navigation depending on which page the user is on
export function setNewNavigator(navIndex, eventIndex) {
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
    storeNavigation.innerHTML = nav[navIndex];
    addEvent(eventIndex);
}


// Sets new eventlisteners to new navigations
export function addEvent(index) {
    const nextPage = document.querySelector('#Next-Page');
    const backButton = document.querySelector('#Previous-Page');
    if(index == 0) {
        nextPage.addEventListener('click', () => location.replace(`${pageLink[1]}`));
    }

    if(index == 1) {
        nextPage.addEventListener('click', () => location.replace(`${pageLink[2]}`));
        backButton.addEventListener('click', () => location.replace(`${pageLink[0]}`));
    }

    if(index == 2) {
        backButton.addEventListener('click', () => location.replace(`${pageLink[1]}`));
    }
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
    console.log(img);
    console.log(img.reverse());
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
