import { navStoreBlueprint } from "./Nav&Footer_Blueprint.mjs";

// Dynamic HTML Page
export const main = document.getElementsByTagName('main');
export const head = document.getElementsByTagName('head');
export const styleLink1 = document.createElement('link');
export const styleLink2 = document.createElement('link');
export const attr = ['rel', 'stylesheet', 'href', '/CSS/Nav&Footer.css', '/CSS/Store.css'];
styleLink1.setAttribute(attr[0], attr[1]);
styleLink1.setAttribute(attr[2], attr[4]);
styleLink2.setAttribute(attr[0], attr[1]);
styleLink2.setAttribute(attr[2], attr[3]);
head[0].append(styleLink1, styleLink2);
const ads = '/IMG/Ads/Sale_ad_1.jpg';

main[0].innerHTML = `
    <header>
        <h1 id="Store-Title"></h1>
    </header>
    <aside style="text-align: center;">
        <img src="${ads}" alt="Sale ad" style="margin-top: 50px;">
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
    <div id="nav-2"></div>`

// Targeting Elements & Creating Arrays
export const body = document.getElementsByTagName('body');
export const header = document.getElementsByTagName('header');
export const ad = document.getElementsByTagName('aside');
export const productCount = document.querySelector('#Products-Count');
export const productMainContainer = document.querySelector('.Product-Main-Container');
export const storeNavigation = document.querySelector('#nav-2');
export const sideNavigation = document.querySelector('.nav-container');
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
export let isDiscounted = [];

rating[0] = '&#8902';
rating[1] = '&#8902 &#8902';
rating[2] = '&#8902 &#8902 &#8902';
rating[3] = '&#8902 &#8902 &#8902 &#8902';
rating[4] = '&#8902 &#8902 &#8902 &#8902 &#8902';

// Store Pages
pageLink[0] = '/HTML/Store/Page 1/Store_1.html';
pageLink[1] = '/HTML/Store/Page 2/Store_2.html';
pageLink[2] = '/HTML/Store/Page 3/Store_3.html';

// Dynamic Elements
setStoreName("Palmer Store");
setDocName("Palmer Studios Store");

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
    bluePrint[i.productArr].push(temp);
    for(let index = 0; index < array.length; index++) {
        const objects = new Product(bluePrint[i.img][index], bluePrint[i.des][index], bluePrint[i.price][index], bluePrint[i.rate][4], bluePrint[i.link][index]);
        const percent = new Array(0);
        let discounted = new Array(0);
        temp.push(objects);

        // Displaying Each Products Attributes
        bluePrint[i.productMain].innerHTML += `
            <div class="Product-Container">
                <a href="${bluePrint[i.link][index]}">
                <img src="${bluePrint[i.img][index]}" alt="${bluePrint[i.des][index]}">
                <div class="Product-Card">
                    <span class="Price-Container">
                        <p class="Product-Price">$${getDiscount()}</p>
                        <p class="Product-Old-Price">$${bluePrint[i.price][index]}</p>
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

        // Non Discounted Products Condition
        const oldPrice = document.querySelectorAll(".Product-Old-Price");
        const prcnt = document.querySelectorAll('.Percent-Off');
        if(getDiscount() === bluePrint[i.price][index]) {
            oldPrice[index].innerHTML = "";
            prcnt[index].innerHTML = "";
        }

        bluePrint[i.isDiscounted].push(discounted);
        
        // Getting Discounts
        function getDiscount() {
            if(bluePrint[i.price][index] <= 20 && bluePrint[i.price][index] > 10) {
                let discount = 30 / 100;
                let total = bluePrint[i.price][index] - (bluePrint[i.price][index] * discount);
                percent.push("30% OFF!");
                discounted = true;
                return parseFloat(total).toFixed(2);
            }
            else if(bluePrint[i.price][index] >= 100) {
                let discount = 50 / 100;
                let total = bluePrint[i.price][index] - (bluePrint[i.price][index] * discount);
                percent.push("50% OFF!");
                discounted = true;
                return parseFloat(total).toFixed(2);
            }
            else {
                discounted = false;
                return bluePrint[i.price][index];
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

// Dynamic Indexes
export const i = {
    mainTag: 0,
    headTag: 1,
    styleLink1: 2,
    styleLink2: 3,
    body: 4,
    header: 5,
    ad: 6,
    productCount: 7,
    productMain: 8,
    storeNav: 9,
    sideNav: 10,
    openMenu: 11,
    pageName: 12,
    storeTitl: 13,
    pageL: 14,
    price: 15,
    link: 16,
    des: 17,
    productArr: 18,
    img: 19,
    rate: 20,
    isDiscounted: 21,
    store1: 22,
    store2: 23,
    store3: 24,
}

// BluePrint Array
export const bluePrint = new Array(23);
bluePrint[i.mainTag] = main;
bluePrint[i.headTag] = head;
bluePrint[i.styleLink1] = styleLink1;
bluePrint[i.styleLink2] = styleLink2;
bluePrint[i.body] = body;
bluePrint[i.header] = header;
bluePrint[i.ad] = ad;
bluePrint[i.productCount] = productCount;
bluePrint[i.productMain] = productMainContainer;
bluePrint[i.storeNav] = storeNavigation;
bluePrint[i.sideNav] = sideNavigation;
bluePrint[i.openMenu] = openMenu;
bluePrint[i.pageName] = pageName;
bluePrint[i.storeTitl] = storeTitle;
bluePrint[i.pageL] = pageLink;
bluePrint[i.price] = price;
bluePrint[i.link] = productLink;
bluePrint[i.des] = description;
bluePrint[i.productArr] = myProductArray;
bluePrint[i.img] = img;
bluePrint[i.rate] = rating;
bluePrint[i.isDiscounted] = isDiscounted;