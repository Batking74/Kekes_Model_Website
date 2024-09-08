// Importing Modules
import { sendPOSTRequestToSever } from "../../helpers/request_methods.js";
import { companyNameElements, footerResponse } from "../Nav&Footer.js";
import { handleAndLogError } from "../../helpers/helper.js";
import { HTML } from "../../HTML.js";



export function setFalse(gender1, gender2) {
    gender1.checked = false;
    gender2.checked = false;
}



export function hasGender(arr) {
    let status = false;
    arr.forEach(gen => { if(gen.checked === true) status = true; });
    return status;
}



export function displayError(element, addClassName, removeClassName, select) {
    if(select === 0) {
        element.classList.add(addClassName);
        setTimeout(() => element.classList.remove(removeClassName), 4000);
    }
    else {
        element.classList.add(addClassName);
        element.classList.remove(removeClassName);
    }
}



export function setLinks(element, attr, link, index) {
    let count1 = [0,0];
    let count2 = 1;
    for(let i = 0; i < element.length; i++) {
        if(i > 0 && i < 7) {
            element[i].setAttribute('class', `${attr[j(count2 - 1, 2)]} ${attr[2]}`);
            setLink(element, link, i, i - 1);
            count2++;
        }
        else {
            if(i > 11) {
                setLink(element, link, i + count1[0], index);
                count1[0]++;
                return;
            }
        else {
            setLink(element, link, i, j(i, 1) - 1);
            count2++;
        }
    }
    }
}



export function setImgs(element, attr, icon) {
    for(let i = 0; i < element.length; i++) {
        const num = [0, 1];
        const bool = [(i + 1) - 1 == num[i], (i + 1) - 1];
        if(bool[0]) {
            element[bool[1]].setAttribute('src', `${icon[0]}`);
        }
        else {
            element[i].setAttribute('src', `${icon[i + 1]}`);
            element[i].setAttribute('class', `${attr[3]}`);
        }
    }
}



export function setLink(ele, link, index1, index2) {
    ele[index1].setAttribute('href', `${link[index2]}`);
}



export function j(count, select) {
    if(select === 1) if(count === 0) return 1; else return count;
    else if(count > 0 && count < 4) return 0; else return 1;
}


// Displays newsletter sign up confirmation
export async function displayResponse(userData) {
    try {
        const res = await sendPOSTRequestToSever('/Register/ReceiveEmails', userData);
        footerResponse.innerHTML = HTML.FooterInputResponse + res;
    }
    catch (error) {
        handleAndLogError('validate', error);
    }
}


// Displays Company Name on all targeted elements in the Website
export function setCompanyName(name) {
    companyNameElements.forEach(element => {
        element.textContent = name;
    })
}