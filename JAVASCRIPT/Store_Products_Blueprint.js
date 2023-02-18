import { bluePrint, i } from "./Store_Blueprint.mjs";
import {  } from "./Store_1.js"
bluePrint[i.body][0].style.backgroundImage = "none";

const head = document.getElementsByTagName('head');
const styleLink1 = document.createElement('link');
const styleLink2 = document.createElement('link');
const attr = ['rel', 'stylesheet', 'href', '/CSS/Nav&Footer.css', '/CSS/Store_Products.css'];
styleLink1.setAttribute(attr[0], attr[1]);
styleLink1.setAttribute(attr[2], attr[4]);
styleLink2.setAttribute(attr[0], attr[1]);
styleLink2.setAttribute(attr[2], attr[3]);
head[0].append(styleLink1, styleLink2);

for(let index = 0; index < bluePrint[i.link].length; index++) {
    bluePrint[i.mainTag][0].innerHTML = `
    <div class="Product-Main-Container">
        <div>
            <img src="${bluePrint[i.img][index]}" class="Product-image" alt="${bluePrint[i.des][index]}">
        </div>
        <div class="Product-Details">
            <h1>${bluePrint[i.des][index]}</h1>
            <a href="#" class="Ratings">
                <p>${bluePrint[i.rate][4]}</p>
                <p>2 reviews</p>
            </a>
            <h2 class="rPrice">$${bluePrint[i.price][index]} <span class="Product-Old-Price"></span></h2>
            <div>
            <input type="color">
            <input type="color">
        </div>
        <div>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
        </div>
        <div class="Product-Detail-text">
            <p><img src="/IMG/Social Media Icons & Logos/Palmer_Studios_Icon.png"> and shipped by Palmer Studios</p>
            <p><img src="/IMG/Social Media Icons & Logos/Return_Icon.png"> Free 14-Day returns</p>
        </div>
        <button class="AddToCart">Add to Cart</button>
    </div>
    <div class="Product-Discription-Container">
        <h1>About this item</h1>
        <br>
        <hr>
        <br>
        <h3>Product Details</h3>
        <br>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vitae sequi modi quam voluptatum ipsa dicta suscipit praesentium sapiente ipsum placeat id earum rerum natus, sunt nesciunt veniam illum eos voluptate exercitationem eaque ducimus ut perspiciatis quod? Rerum.</p>
        <br>
        <br>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <br>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem</li>
            <br>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
            <br>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem</li>
            <br>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem</li>
        </ul>
    </div>
    <p>We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it.  See our disclaimer</p>
</div>`
}