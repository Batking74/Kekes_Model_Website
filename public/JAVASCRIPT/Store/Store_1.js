// Importing Modules
import { setDocName, setNumProducts } from "./helpers/helpers.js";
import * as store from "./Store_Blueprint.js";
import "../Nav_and_Footer/Nav&Footer.js";

// Changing Navigations
store.storeNavigation.innerHTML = store.getNavigator(0);

// Setting New Navigations
store.newNavigations(0);

// Retreiving Products From database
store.instantiateProducts(0, 25);

// Displaying all products
store.displayProducts(store.productArray.length);
setNumProducts(store.productArray.length);

// Setting Store Title
setDocName("Palmer Studios Store | Page 1");

// Sorts Products
store.sortList();