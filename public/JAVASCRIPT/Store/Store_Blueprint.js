import { companyInfo, navLinks, icons, attribute, navbar, footer, footerForm, footerInput, footerLabel, footerResponse, footerBtn } from "../Nav&Footer_Blueprint.js";
import LinkedList from "../LinkedList.js";
import { HTML } from "../HTML.js";

// Dynamic Store HTML Page
export const main = document.getElementsByTagName('main');
const ad = `/IMG/Ads/Sale_ad_1.jpg`;
main[0].innerHTML = `
    <header>
        <h1 id="Store-Title"></h1>
    </header>
    <aside style="text-align: center;">
        <img src="${ad}" alt="Sale ad" style="margin-top: 50px;">
    </aside>
    
    <section class="Product-Main-Container">
        <div class="title">
            <div>
                <h1>Products | <span id="Store-Title"></span></h1>
            </div>
            <div>
                <select name="Filter" id="Filter">
                    <option value="sort by">Sort by</option>
                    <option value="Best Selling">Best Selling</option>
                    <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                    <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                    <option value="Price, low to high">Price, low to high</option>
                    <option value="Price, high to low">Price, high to low</option>
                </select>
                <span class="counter"><span id="Products-Count"></span> Products</span>
            </div>
            <div><hr></div>
        </div>
    </section>
    
    <!-- Store Navigation -->
    <div id="nav-2">
</div>`;

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
export let price = new LinkedList();
export let productLink = new LinkedList();
export let description = new LinkedList();
export let img = new LinkedList();
export const myProductArray = new LinkedList();
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

// ID Generator
export function* generateId(i) {
    let id = 4381971 + (i * 27385);
    while(true) yield id;
}

// Creating Store Products
export function createProducts(array, randomNum) {
    for(let i = 0; i < array.length; i++) {
        const itemImage = img.getIndex(i).value;
        const itemPrice = price.getIndex(i).value;
        const itemDescription = description.getIndex(i).value;
        const itemPageLink = productLink.getIndex(i).value;
        let id = generateId(i).next().value + randomNum;
        const object = new Product(itemImage, itemDescription, itemPrice, rating[4], itemPageLink, id);
        myProductArray.insertAtHead(object);
        // Displaying Each Products Attributes
        productMainContainer.innerHTML += HTML.Store;
    }
}

export function displayProducts() {
    for(let i = 0; i < myProductArray.length; i++) {
        const itemImage = img.getIndex(i).value;
        const itemRegularPrice = price.getIndex(i).value;
        const itemDescription = description.getIndex(i).value;
        const itemPageLink = productLink.getIndex(i).value;
        const id = myProductArray.getIndex(i).value.id;
        
        const itemImages = document.querySelectorAll('.itemImage');
        const itemRegularPrices = document.querySelectorAll('.itemRegularPrice');
        const itemDiscountPrices = document.querySelectorAll('.itemDiscount');
        const itemPercentagesOff = document.querySelectorAll('.itemPercentageOff');
        const itemDiscriptions = document.querySelectorAll('.itemDiscription');
        const itemPageLinks = document.querySelectorAll('.itemPageLink');

        itemImages[i].setAttribute('src', itemImage);
        itemImages[i].setAttribute('alt', itemDescription);
        itemPageLinks[i].setAttribute('href', itemPageLink);
        itemRegularPrices[i].textContent = `$${itemRegularPrice}`;
        itemDiscriptions[i].textContent = itemDescription;
        itemDiscountPrices[i].textContent = getDiscount(itemRegularPrice, itemPercentagesOff[i],  id);

        // Non Discounted Products Condition
        if(itemDiscountPrices[i].textContent == itemRegularPrice) {
            itemDiscountPrices[i].textContent = `$${itemRegularPrice}`;
            itemRegularPrices[i].textContent = '';
            itemPercentagesOff[i].innerHTML = '';
        }
    }
}

// Getting Discounts
function getDiscount(price, percentageOff, id) {
    if(price <= 20 && price > 10) {
        let discount = 30 / 100;
        let total = price - (price * discount);
        percentageOff.textContent = "30% OFF!";
        return `$${parseFloat(total).toFixed(2)}`;
    }
    else if(price >= 100) {
        let discount = 50 / 100;
        let total = price - (price * discount);
        percentageOff.textContent = "50% OFF!";
        return `$${parseFloat(total).toFixed(2)}`;
    }
    else if(id == 5097827) {
        let discount = 20 / 100;
        let total = price - (price * discount);
        percentageOff.textContent = "20% OFF!";
        return `$${parseFloat(total).toFixed(2)}`;
    }
    return price;
}

// Creating Functions
export function setStoreName(storeName) {
    storeTitle.forEach(element => {
        element.innerHTML = storeName;
    });
}

export function setDocName(docName) {
    pageName.forEach(element => {
        element.innerHTML = docName;
    });
}

export function setNumProducts(num) {
    const numberOfProducts = document.querySelector('#Products-Count');
    numberOfProducts.innerHTML = `${num}`;
}

export function validateNav(index) {
    const nextPage = document.querySelector('#Next-Page');
    const backButton = document.querySelector('#Previous-Page');
    if(index === 0) {
        nextPage.addEventListener('click', () => {
            location.replace(`${pageLink[1]}`);
        });
    }

    if(index === 1) {
        nextPage.addEventListener('click', () => {
            location.replace(`${pageLink[2]}`);
        });
    
        backButton.addEventListener('click', () => {
            location.replace(`${pageLink[0]}`);
        });
    }

    if(index === 2) {
        backButton.addEventListener('click', () => {
            location.replace(`${pageLink[1]}`);
        });
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
        if(userSelection == f[1].value) getBestSellers();
        else if(userSelection == f[2].value) sortAtoZ();
        else if(userSelection == f[3].value) sortZtoA();
        else if(userSelection == f[4].value) sortLowToHigh();
        else if(userSelection == f[5].value) sortHighToLow();
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

hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});