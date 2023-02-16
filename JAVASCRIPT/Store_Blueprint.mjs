import { navStoreBlueprint } from "./Nav&Footer_Blueprint.mjs";

// Targeting Elements & Creating Arrays
export const companyName = document.querySelectorAll('#Company-Name');
export const productCount = document.querySelector('#Products-Count');
export const productMainContainer = document.querySelector('.Product-Main-Container');
export const sideNavigation = document.querySelector('.nav-container');
export const storeNavigation = document.querySelector('#nav-2');
export const ad = document.querySelector('#aside');
export const header = document.querySelector('#header');
export const body = document.getElementsByTagName('body');
export const openMenu = document.querySelector('#menu-open');
export let pageName = document.querySelectorAll('#Page-Name');
export let storeTitle = document.querySelectorAll('#Store-Title');
export let pageLink = [];
export let price = [];
export let productLink = [];
export let description = [];
export let img = [];
export const myProductArray = [];
export const rating = new Array(5);

rating[0] = '&#8902';
rating[1] = '&#8902 &#8902';
rating[2] = '&#8902 &#8902 &#8902';
rating[3] = '&#8902 &#8902 &#8902 &#8902';
rating[4] = '&#8902 &#8902 &#8902 &#8902 &#8902';

// Dynamic Indexes
export const i = {
    p: 12,
    rate: 17,
    img: 16,
    des: 15,
    link: 14,
    pageL: 11,
    productArr: 13
}

// Store Pages
pageLink[0] = '/HTML/Store/Page 1/Store_1.html';
pageLink[1] = '/HTML/Store/Page 2/Store_2.html';
pageLink[2] = '/HTML/Store/Page 3/Store_3.html';

// Dynamic Elements
setStoreName("Palmer Store");
setDocName("Palmer Studios Store");
setCompanyName("Palmer Studios");

// Creating Dynamic Project Card/Classes
export default class Product {
    constructor(image, description, price, rating, link) {
        this.image = image;
        this.imageAlt = description;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.link = link;
    }

    getImage() {
        return this.image;
    }

    getAlt() {
        return this.imageAlt;
    }

    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    getLink() {
        return this.link;
    }
}

// Creating Store
export function setProducts(array) {
    let temp = [];
    bluePrint[13].push(temp);

    for(let index = 0; index < array.length; index++) {
        const objects = new Product(bluePrint[i.img][index], bluePrint[i.des][index], bluePrint[i.p][index], bluePrint[i.rate][4], bluePrint[i.link][index]);
        temp.push(objects);
        const percent = new Array(0);

        // Displaying Each Products Attributes
        bluePrint[2].innerHTML += `
            <div class="Product-Container">
                <a href="${bluePrint[i.link][index]}">
                <img src="${bluePrint[i.img][index]}" alt="${bluePrint[16][index]}">
                <div class="Product-Card">
                    <span class="Price-Container">
                        <p class="Product-Price">${getDiscount()}</p>
                        <p class="Product-Old-Price">$${bluePrint[i.p][index]}</p>
                    </span>
                    <p class="Product-description">${bluePrint[i.des][index]}</p>
                    <br>
                    <p class="Percent-Off">${percent[0]}</p>
                    <p class="Product-Rating">${bluePrint[i.rate][4]}</p>
                    <span>
                        <a class="AddToList" href="">Add to List</a>
                    </span>
                </div>
            </a>
        </div>`

        // Getting Discounts
        function getDiscount() {
            const prcnt = document.querySelector('.Percent-Off');
            if(bluePrint[i.p][index] <= 20 && bluePrint[i.p][index] > 10) {
                let discount = 15 / 100;
                let total = bluePrint[i.p][index] - (bluePrint[i.p][index] * discount);
                percent.push("15% OFF!");
                return "$" + parseFloat(total).toFixed(2);
            }
            else if(bluePrint[i.p][index] <= 30) {
                let discount = 25 / 100;
                let total = bluePrint[i.p][index] - (bluePrint[i.p][index] * discount);
                percent.push("25% OFF!");
                return "$" + parseFloat(total).toFixed(2);
            }
            else if(bluePrint[i.p][index] <= 50) {
                let discount = 30 / 100;
                let total = bluePrint[i.p][index] - (bluePrint[i.p][index] * discount);
                percent.push("30% OFF!");
                return "$" + parseFloat(total).toFixed(2);
            }
            else if(bluePrint[i.p][index] >= 100) {
                let discount = 50 / 100;
                let total = bluePrint[i.p][index] - (bluePrint[i.p][index] * discount);
                percent.push("50% OFF!");
                return "$" + parseFloat(total).toFixed(2);
            }
            else {
                console.log("Nothing");
            }
        }
    }
}


// Creating Functions
export function setStoreName(storeName) {
    storeTitle.forEach(element => {
        element.innerHTML = storeName;
    })
}

export function setDocName(docName) {
    pageName.forEach(element => {
        element.innerHTML = docName;
    })
}

export function setCompanyName(name) {
    companyName.forEach(element => {
        element.innerHTML = name;
    })
}

export function setNumProducts(num) {
    const productCount = document.querySelector('#Products-Count');
    productCount.innerHTML = `${num}`;
}

export function validateNav(index) {
    const nextPage = document.querySelector('#Next-Page');
    const backButton = document.querySelector('#Previous-Page');
    if(index === 0) {
        nextPage.addEventListener('click', () => {
            location.replace(`${bluePrint[i.pageL][1]}`);
        })
    }

    if(index === 1) {
        nextPage.addEventListener('click', () => {
            location.replace(`${bluePrint[i.pageL][2]}`);
        })
    
        backButton.addEventListener('click', () => {
            location.replace(`${bluePrint[i.pageL][0]}`);
        })
    }

    if(index === 2) {
        backButton.addEventListener('click', () => {
            location.replace(`${bluePrint[i.pageL][1]}`);
        })
    }
}

export function getNavigator(index) {
    const attribute = new Array(4);
    attribute[0] = "/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png";
    attribute[1] = "/IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.png"
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

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('active');
});

export const bluePrint = [companyName, productCount, productMainContainer, sideNavigation, storeNavigation, ad, header, body, openMenu, pageName, storeTitle, pageLink, price, myProductArray, productLink, description, img, rating, i];