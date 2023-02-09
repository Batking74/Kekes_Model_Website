import Product, { bluePrints, setStoreName, setDocName, setCompanyName, getAllLengths } from "./Store_Blueprint.mjs";
import { navStoreBlueprint, getHTMLDOC, validate } from "./Nav&Footer_Blueprint.mjs";

const ad = document.getElementsByTagName('aside');
const header = document.getElementsByTagName('header');
const body = document.getElementsByTagName('body');
ad[0].remove()
header[0].remove();
body[0].classList.add('changeBody')
bluePrints[4].classList.add('positionMain')


console.log(bluePrints);
setDocName("Palmer Studios Store | Page 2");

bluePrints[7].innerHTML = `
    <img id="Previous-Page" src="/IMG/Social Media Icons & Logos/Store_Navigation_Left_Arrow.png" alt="Back">
    <h2>Page 2 of 3</h2>
    <img id="Next-Page" src="/IMG/Social Media Icons & Logos/Store_Navigation_Right_Arrow.png" alt="Next Page">
`

let backButton = document.getElementById('Previous-Page');

backButton.addEventListener('click', () => {
    location.replace(`${bluePrints[10][0]}`)
})

// bluePrints[11][0] = 30.00
// bluePrints[11][1] = 15.99;
// bluePrints[11][2] = 34.99;
// bluePrints[11][3] = 34.99;
// bluePrints[11][4] = 13.99;
// bluePrints[11][5] = 11.99;
// bluePrints[11][6] = 10.25;
// bluePrints[11][7] = 15.99;
// bluePrints[11][8] = 39.99;
// bluePrints[11][9] = 5.99;
// bluePrints[11][10] = 3.99;
// bluePrints[11][11] = 5.65;
// bluePrints[11][12] = 15.25;
// bluePrints[11][13] = 23.45;
// bluePrints[11][14] = 10.25;
// bluePrints[11][15] = 6.99;
// bluePrints[11][16] = 12.99;
// bluePrints[11][17] = 12.82;
// bluePrints[11][18] = 15.59;
// bluePrints[11][19] = 14.99;
// bluePrints[11][20] = 35.99;
// bluePrints[11][21] = 20.00;
// bluePrints[11][22] = 6.40;
// bluePrints[11][23] = 13.99;
// bluePrints[11][24] = 25.89;

// bluePrints[13][0] = '/IMG/Store Products/Store 2/Product_1.jpg';
// bluePrints[13][1] = '/IMG/Store Products/Store 2/Product_2.jpg';
// bluePrints[13][2] = '/IMG/Store Products/Store 2/Product_3.jpg';
// bluePrints[13][3] = '/IMG/Store Products/Store 2/Product_4.jpg';
// bluePrints[13][4] = '/IMG/Store Products/Store 2/Product_5.jpg';
// bluePrints[13][5] = '/IMG/Store Products/Store 2/Product_6.jpg';
// bluePrints[13][6] = '/IMG/Store Products/Store 2/Product_7.jpg';
// bluePrints[13][7] = '/IMG/Store Products/Store 2/Product_8.jpg';
// bluePrints[13][8] = '/IMG/Store Products/Store 2/Product_9.jpg';
// bluePrints[13][9] = '/IMG/Store Products/Store 2/Product_10.jpg';
// bluePrints[13][10] = '/IMG/Store Products/Store 2/Product_11.jpg';
// bluePrints[13][11] = '/IMG/Store Products/Store 2/Product_12.jpg';
// bluePrints[13][12] = '/IMG/Store Products/Store 2/Product_13.jpg';
// bluePrints[13][13] = '/IMG/Store Products/Store 2/Product_14.jpg';
// bluePrints[13][14] = '/IMG/Store Products/Store 2/Product_15.jpg';
// bluePrints[13][15] = '/IMG/Store Products/Store 2/Product_16.jpg';
// bluePrints[13][16] = '/IMG/Store Products/Store 2/Product_17.jpg';
// bluePrints[13][17] = '/IMG/Store Products/Store 2/Product_18.jpg';
// bluePrints[13][18] = '/IMG/Store Products/Store 2/Product_19.jpg';
// bluePrints[13][19] = '/IMG/Store Products/Store 2/Product_20.jpg';
// bluePrints[13][20] = '/IMG/Store Products/Store 2/Product_21.jpg';
// bluePrints[13][21] = '/IMG/Store Products/Store 2/Product_22.jpg';
// bluePrints[13][22] = '/IMG/Store Products/Store 2/Product_23.jpg';
// bluePrints[13][23] = '/IMG/Store Products/Store 2/Product_24.jpg';
// bluePrints[13][24] = '/IMG/Store Products/Store 2/Product_25.jpg';

// bluePrints[14][0] = 'Light Gray Palmer Hoodie';
// bluePrints[14][1] = 'White Palmer T-Shirt - Hustlers';
// bluePrints[14][2] = 'Keke Palmer Duvet Set (Purple)';
// bluePrints[14][3] = 'Keke Palmer Duvet Set (Tan)';
// bluePrints[14][4] = 'Keke Palmer T-Shirt (White)';
// bluePrints[14][5] = 'Keke Do You Love Me T-Shirt';
// bluePrints[14][6] = 'Black and Brown Exfoliating Cleanser';
// bluePrints[14][7] = 'African Clarifying Mud Mask Oils and Spray';
// bluePrints[14][8] = 'Skin Safe Manscaping Trimmer';
// bluePrints[14][9] = 'Hair Sponge Brush for Twists and Locks (Black)';
// bluePrints[14][10] = 'Classic Styling Essential Compact Comb (Black)';
// bluePrints[14][11] = 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush';
// bluePrints[14][12] = 'Savanna Grass - Album By Kes';
// bluePrints[14][13] = 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)';
// bluePrints[14][14] = 'Blueberry Bliss Curl Control Jelly';
// bluePrints[14][15] = 'African  Black Soap 6 fl oz';
// bluePrints[14][16] = 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)';
// bluePrints[14][17] = 'Hair Picks (3 Count)';
// bluePrints[14][18] = 'Conditioner, Treatment, Detangling Spray, and Shampoo';
// bluePrints[14][19] = 'Buttah AHA | BHA Rosewater Toner';
// bluePrints[14][20] = 'Champion Adult Mens Everyday Comfort Boxer Underwear';
// bluePrints[14][21] = 'Womens Comfort Stretch Brief Panties (Black)';
// bluePrints[14][22] = 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)';
// bluePrints[14][23] = 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)';
// bluePrints[14][24] = 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear';

// bluePrints[15][0] = '/HTML/Store/Page 2/product_1.html';
// bluePrints[15][1] = '/HTML/Store/Page 2/product_2.html';
// bluePrints[15][2] = '/HTML/Store/Page 2/product_3.html';
// bluePrints[15][3] = '/HTML/Store/Page 2/product_4.html';
// bluePrints[15][4] = '/HTML/Store/Page 2/product_5.html';
// bluePrints[15][5] = '/HTML/Store/Page 2/product_6.html';
// bluePrints[15][6] = '/HTML/Store/Page 2/product_7.html';
// bluePrints[15][7] = '/HTML/Store/Page 2/product_8.html';
// bluePrints[15][8] = '/HTML/Store/Page 2/product_9.html';
// bluePrints[15][9] = '/HTML/Store/Page 2/product_10.html';
// bluePrints[15][10] = '/HTML/Store/Page 2/product_11.html';
// bluePrints[15][11] = '/HTML/Store/Page 2/product_12.html';
// bluePrints[15][12] = '/HTML/Store/Page 2/product_13.html';
// bluePrints[15][13] = '/HTML/Store/Page 2/product_14.html';
// bluePrints[15][14] = '/HTML/Store/Page 2/product_15.html';
// bluePrints[15][15] = '/HTML/Store/Page 2/product_16.html';
// bluePrints[15][16] = '/HTML/Store/Page 2/product_17.html';
// bluePrints[15][17] = '/HTML/Store/Page 2/product_18.html';
// bluePrints[15][18] = '/HTML/Store/Page 2/product_19.html';
// bluePrints[15][19] = '/HTML/Store/Page 2/product_20.html';
// bluePrints[15][20] = '/HTML/Store/Page 2/product_21.html';
// bluePrints[15][21] = '/HTML/Store/Page 2/product_22.html';
// bluePrints[15][22] = '/HTML/Store/Page 2/product_23.html';
// bluePrints[15][23] = '/HTML/Store/Page 2/product_24.html';
// bluePrints[15][24] = '/HTML/Store/Page 2/product_25.html';