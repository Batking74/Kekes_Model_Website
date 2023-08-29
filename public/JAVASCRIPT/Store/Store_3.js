import {instantiateProducts, displayProducts, setDocName, setNumProducts, getNavigator, newNavigations, body, storeName, storeAd, productMainContainer, storeNavigation, sortList, productArray } from "../Store/Store_Blueprint.js";
import {} from "../Nav&Footer_Blueprint.js";

storeName[0].remove();
storeAd[0].remove();
body[0].classList.add("changeBody");
productMainContainer.classList.add('positionMain');
storeNavigation.innerHTML = getNavigator(2);
instantiateProducts(52, 78);
setDocName("Palmer Studios Store | Page 3");
displayProducts(productArray.length);
setNumProducts(productArray.length);
newNavigations(2);
sortList();