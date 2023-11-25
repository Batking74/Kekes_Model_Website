export const date = new Date();
export async function sendGETRequestToSever(api) {
    return (await fetch(api)).json();
}

export async function sendPOSTRequestToSever(api, data) {
    return (await fetch(api, options('POST', data))).json();
}

export async function sendPUTRequestToSever(api, data) {
    try { const res = await fetch(api, options('PUT', data)); return await res.json(); }
    catch (err) { return err; }
}

export async function sendDELETERequestToSever(api, data) {
    try { const res = await fetch(api, options('DELETE', data)); return await res.json(); }
    catch (err) { return err; }
}

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

let count1 = [0,0];
export function setLinks(element, attr, link, index) {
    let count2 = 1;
    for(let i = 0; i < element.length; i++) {
        if(i > 0 && i < 7) {
            element[i].setAttribute('class', `${attr[j(count2 - 1, 2)]} ${attr[2]}`);
            setLink(element, link, i, i - 1);
            count2++;
        }
        else { if(i > 11) { setLink(element, link, i + count1[0], index); count1[0]++; return; }
        else { setLink(element, link, i, j(i, 1) - 1); count2++; }
    }
    }
}

export function setImgs(element, attr, icon) {
    for(let i = 0; i < element.length; i++) {
        const num = [0,1];
        const bool = [(i + 1) - 1 == num[i], (i + 1) - 1];
        if(bool[0]) { element[bool[1]].setAttribute('src', `${icon[0]}`); }
        else {
            element[i].setAttribute('src', `${icon[i + 1]}`);
            element[i].setAttribute('class', `${attr[3]}`);
        }
    }
}
export function setLink(ele, link, index1, index2) { ele[index1].setAttribute('href', `${link[index2]}`); }
export function j(count, select) {
    if(select === 1) if(count === 0) return 1; else return count;
    else if(count > 0 && count < 4) return 0; else return 1;
}
function options(method, data) {
    return {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
}