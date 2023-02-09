import Product, { bluePrints, setStoreName, setDocName, setCompanyName, getAllLengths } from "./Store_Blueprint.mjs";
import { navStoreBlueprint, getHTMLDOC, validate } from "./Nav&Footer_Blueprint.mjs";

const ad = document.querySelector('#aside');
const header = document.querySelector('#header');
const body = document.getElementsByTagName('body');
ad.remove()
header.remove();
body[0].classList.add('changeBody')
bluePrints[5].classList.add('positionMain')

console.log(bluePrints);

bluePrints[7].innerHTML = `
    <img id="Previous-Page" src="/IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.png" alt="Back">
    <h2>Page 3 of 3</h2>
`

let b = document.getElementById('Previous-Page');

b.addEventListener('click', () => {
    location.replace(`${bluePrints[10][1]}`)
})