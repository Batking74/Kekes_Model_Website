import { products, productArray } from "./Store_Blueprint.js";

export function getProductsFromDB(i) {
    const UPC = products[i].id;
    const img = products[i].Image;
    const price = products[i].Price;
    const descrip = products[i].Description;
    const productLink = products[i].link;
    const storeNumber = products[i].StorePage;
    return [img, price, descrip, productLink, UPC, storeNumber];
}

export function getProductInstance(i) {
    const UPC = productArray.getIndex(i).value.getId();
    const img = productArray.getIndex(i).value.getImage();
    const price = productArray.getIndex(i).value.getPrice();
    const descrip = productArray.getIndex(i).value.getDescription();
    const productLink = productArray.getIndex(i).value.getLink();
    const storeNumber = productArray.getIndex(i).value.getStoreNumber();
    return [img, price, descrip, productLink, UPC, storeNumber];
}

export function getProductElements() {
    const itemImages = document.querySelectorAll('.itemImage');
    const itemRegularPrices = document.querySelectorAll('.itemRegularPrice');
    const itemDiscountPrices = document.querySelectorAll('.itemDiscount');
    const itemPercentagesOff = document.querySelectorAll('.itemPercentageOff');
    const itemDiscriptions = document.querySelectorAll('.itemDiscription');
    const itemPageLinks = document.querySelectorAll('.itemPageLink');
    return [itemImages, itemRegularPrices, itemDiscountPrices, itemPercentagesOff, itemDiscriptions, itemPageLinks]
}

export function calculateDiscount(percent, price, percentageOff) {
    if(price.includes('$')) price = parseFloat(price.substring(1));
    let discount = percent / 100;
    let total = price - (price * discount);
    percentageOff.textContent = `${percent}% OFF!`;
    return `$${parseFloat(total).toFixed(2)}`;
}