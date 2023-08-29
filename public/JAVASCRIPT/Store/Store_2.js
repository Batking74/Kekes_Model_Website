import {instantiateProducts, displayProducts, setDocName, setNumProducts, getNavigator, newNavigations, body, storeName, sortList, storeAd, productMainContainer, storeNavigation, productArray } from "../Store/Store_Blueprint.js";
import {} from "../Nav&Footer_Blueprint.js";

storeName[0].remove();
storeAd[0].remove();
body[0].classList.add("changeBody");
productMainContainer.classList.add('positionMain');
storeNavigation.innerHTML = getNavigator(1);
newNavigations(1);
instantiateProducts(25, 52);
setDocName("Palmer Studios Store | Page 2");
setNumProducts(productArray.length);
displayProducts(productArray.length);
sortList();