// Importing Modules
import { sendGETRequestToSever } from "../helpers/request_methods.js";
import { handleAndLogError } from "../helpers/helper.js";
import "../Nav_and_Footer/Nav&Footer.js";


// Delcaring and Initalizing Variables | Targeting DOM Elements
const targetID = parseInt(new URLSearchParams(window.location.search).get('id'));
const numberOfReviews = document.getElementById('Number-of-Reviews');
const orignalPrice = document.querySelector('.Product-Old-Price');
const description = document.getElementById('description');
const discountedPrice = document.querySelector('.Price');
const image = document.querySelector('.Product-image');
const rating = document.getElementById('Rating');
let record;

try {
    record = await sendGETRequestToSever(`/Store/Products`);
}
catch(error) {
    handleAndLogError('Getting Product records', error);
}


for(let i = 0; i < record.length; i++) {
    if(parseInt(record[i].id) == targetID) {
        record = record[i];
        break;
    }
}


console.log(record)

image.setAttribute('src', record.Image);

description.textContent = record.Description;
rating.textContent = record.Rating;
numberOfReviews.textContent = `Reviews: ${record.numberOfReviews}`;

if(record.PercentageOff !== '0%') {
    orignalPrice.textContent = record.Price;
    discountedPrice.textContent = record.DiscountedPrice;
}
else {
    orignalPrice.textContent = '';
    discountedPrice.textContent = record.Price;
}