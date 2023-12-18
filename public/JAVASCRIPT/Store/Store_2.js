// Importing Modules
import { setDocName, setNumProducts } from "./helpers/helpers.js";
import * as store from "./Store_Blueprint.js";
import "../Nav_and_Footer/Nav&Footer.js";


// Modifying Store UI
store.storeName[0].remove();
store.storeAd[0].remove();
store.body[0].classList.add("changeBody");
store.productMainContainer.classList.add('positionMain');
store.storeNavigation.innerHTML = store.getNavigator(1);

// Retreiving Products From database
store.instantiateProducts(25, 52);

// Setting Store Title
setDocName("Palmer Studios Store | Page 2");

// Displaying all products
store.displayProducts(store.productArray.length);
setNumProducts(store.productArray.length);

// Setting New Navigations
store.newNavigations(1);
store.sortList();