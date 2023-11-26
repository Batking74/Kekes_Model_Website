import {instantiateProducts, displayProducts, getNavigator, newNavigations, sortList, storeNavigation, productArray } from "./Store_Blueprint.js";
import { setDocName, setNumProducts } from "./helpers.js";
import {} from "../utils/Nav&Footer_utils.js";

storeNavigation.innerHTML = getNavigator(0);
newNavigations(0);
instantiateProducts(0, 25);
setNumProducts(productArray.length);
displayProducts(productArray.length);
sortList();
setDocName("Palmer Studios Store | Page 1");