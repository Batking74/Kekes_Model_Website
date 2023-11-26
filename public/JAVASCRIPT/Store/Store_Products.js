import { } from "../utils/Nav&Footer_utils.js";
import { sendGETRequestToSever } from "../utils/utils1.js";
let record = await sendGETRequestToSever(`/Store/Products`);
const description = document.getElementById('description');
const rating = document.getElementById('Rating');
const numberOfReviews = document.getElementById('Number-of-Reviews');
const discountedPrice = document.querySelector('.Price');
const orignalPrice = document.querySelector('.Product-Old-Price');
const image = document.querySelector('.Product-image');
const targetID = parseInt(new URLSearchParams(window.location.search).get('id'));


console.log(targetID)
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
// numberOfReviews.textContent = record.Description;

if(record.PercentageOff !== '0%') {
    orignalPrice.textContent = record.Price;
    discountedPrice.textContent = record.DiscountedPrice;
}
else {
    orignalPrice.textContent = '';
    discountedPrice.textContent = record.Price;
}