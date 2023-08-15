export function sendPOSTRequestToSever(api, data) {
    return fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export function sendPUTRequestToSever(api, data) {
    fetch(api, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => { return res.json(); })
    .then(data => { return data; })
    .catch(err => { return err; });
}
export function sendDELETERequestToSever(api, data) {
    fetch(api, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => { return res.json(); })
    .then(data => { return data; })
    .catch(err => { return err; });
}
export function setFalse(gender1, gender2) {
    gender1.checked = false;
    gender2.checked = false;
}
export function hasGender(arr) {
    let statis = false;
    arr.forEach(gen => { if(gen.checked === true) statis = true; });
    return statis;
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