import { sendDELETERequestToSever, sendPOSTRequestToSever, sendPUTRequestToSever, setFalse, hasGender, displayError } from '../ExtraTools.js';
const input = document.querySelectorAll('.input');
const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('#form');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const other = document.querySelector('#other');
const list = document.querySelector('#states-dropdown-list');
const option = document.querySelectorAll('option');
const policy = document.getElementById('policy-conformation');
const sex = [male, female, other];
const errorClassName = 'error';
const errorMsg = [
    'Passwords dont match',
    'Password must be at least 10 characters',
    `Please select if you're a male or female`,
    `Please select a state`,
    `Must agree to terms and conditions`,
    `Email already used`,
    `Password already used`,
    `Username already used`
];
let gender;
sex.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.id === 'male') { setFalse(female, other); gender = 'Male'; }
        else if(e.target.id === 'female') { setFalse(male, other); gender = 'Female'; }
        else { setFalse(male, female); gender = 'Other'; }
    })
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(valid()) {
        const newUser = {
            id: 1,
            Date: Date(),
            Firstname: input[0].value,
            Lastname: input[1].value,
            Email: input[2].value,
            Username: input[3].value,
            Password: input[4].value,
            Gender: gender,
            From: list.value,
        }
        localStorage.setItem('NewUserData', JSON.stringify(newUser));
        sendPOSTRequestToSever('/Register', newUser)
        .then(res => { return res.json(); })
        .then(data => { return data; })
        .then(res => { console.log(res); })
        .catch(err => { console.log(err); });
        location.replace('/Register/Account_Verification');
    }
});

function valid() {
    let count = 0;
    const isDuplicate = isADuplicate();
    for(let i = 0; i < input.length; i++) {
        if(input[i].value === '') {
            displayError(input[i], errorClassName, errorClassName, 0);
            count++;
        }
    }
    if(count >= 1) return false;
    else if(input[4].value != input[5].value) { alert(errorMsg[0]); error(input); }
    else if(input[4].value.length < 10) { alert(errorMsg[1]); error(input); }
    else if(!(hasGender(sex))) { alert(errorMsg[2]) }
    else if(list.value === option[0].textContent) alert(errorMsg[3]);
    else if(!(policy.checked)) alert(errorMsg[4]);
    else if(isDuplicate[0]) {
        if(isDuplicate[1] === 2) { console.log('butt'); alert(errorMsg[5]); }
        else if(isDuplicate[1] === 3) alert(errorMsg[6]);
        else alert(errorMsg[7]);
    }
    // else return true;
}

function error(element) {
    displayError(element[4], errorClassName, errorClassName, 0);
    displayError(element[5], errorClassName, errorClassName, 0);
}

function isADuplicate() {
    let arr = [];
    fetch('/users')
    .then(res => { return res.json(); })
    .then(DB => {
        for(let i = 0; i < DB.length; i++) {
            if(input[2].value === DB[i].Email) return getDupInfo(arr, true, 2);
            else if(input[3].value === DB[i].Username) return getDupInfo(arr, true, 3);
            else if(input[4].value === DB[i].Password) return getDupInfo(arr, true, 4);
        }
    })
    .catch(err => { console.log(err); });
    return arr;
}
function getDupInfo(arr, boolean, i) {
    const f = {hi: boolean, d: i};
    arr.push(f);
}