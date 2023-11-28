import * as store from "../Store/Store_Blueprint.js";
import {} from "../utils/Nav&Footer_utils.js";

// Modifying Store UI
store.storeName[0].remove();
store.storeAd[0].remove();
store.body[0].classList.add("changeBody");
store.productMainContainer.classList.add('positionMain');
store.storeNavigation.innerHTML = store.getNavigator(2);

// Retreiving Products From database
store.instantiateProducts(52, 78);

// Setting Store Title
store.setDocName("Palmer Studios Store | Page 3");

// Displaying all products
store.displayProducts(store.productArray.length);
store.setNumProducts(store.productArray.length);

// Setting New Navigations
store.newNavigations(2);
store.sortList();