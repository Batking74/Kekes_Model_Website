import { sendGETRequestToSever, sendPOSTRequestToSever, setFalse, hasGender,displayError } from '../ExtraTools.js';
const input = document.querySelectorAll('.input');
const form = document.querySelector('#form');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const other = document.querySelector('#other');
const list = document.querySelector('#states-dropdown-list');
const option = document.querySelectorAll('option');
const policy = document.getElementById('policy-conformation');
const sex = [male, female, other];
const errorClassName = 'error';
let gender;
const errorMsg = [
    'Passwords dont match',
    'Password must be at least 10 characters',
    `Please select if you're a male or female`,
    `Please select a state`,
    `Must agree to terms and conditions`,
    `Email already used`,
    `Username already used`,
    `Use another password`
];
sex.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.id === 'male') { setFalse(female, other); gender = 'Male'; }
        else if(e.target.id === 'female') { setFalse(male, other); gender = 'Female'; }
        else { setFalse(male, female); gender = 'Other'; }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

async function validate() {
    if(await valid()) {
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
        const res = await sendPOSTRequestToSever('/Register', newUser)
        console.log(res)
    }
}

async function valid() {
    let count = 0;
    let status = true;
    for(let i = 0; i < input.length; i++) {
        if(input[i].value === '') {
            displayError(input[i], errorClassName, errorClassName, 0);
            status = false;
            count++;
        }
    }
    if(status === false) return status;
    else status = await isOtherInputsValid(status);
    return status;
}

async function isOtherInputsValid(status) {
    if(input[4].value != input[5].value) { alert(errorMsg[0]); error(input); status = false; }
    else if(input[4].value.length < 10) { alert(errorMsg[1]); error(input); status = false; }
    else if(!(hasGender(sex))) { alert(errorMsg[2]); status = false; }
    else if(list.value === option[0].textContent) { alert(errorMsg[3]); status = false; }
    else if(!(policy.checked)) { alert(errorMsg[4]); status = false; }
    else if(await isADuplicate(status)) return !(status);
    else return status;
}

function error(element) {
    displayError(element[4], errorClassName, errorClassName, 0);
    displayError(element[5], errorClassName, errorClassName, 0);
}

async function isADuplicate(status) {
    try {
        const res = await fetch('/users');
        const DB = await res.json();
        for(let i = 0; i < DB.length; i++) {
            if(input[2].value === DB[i].Email) { alert(errorMsg[5]); status = true; }
            else if(input[3].value === DB[i].Username) { alert(errorMsg[6]); status = true; }
            else if(input[4].value === DB[i].Password) { alert(errorMsg[7]); status = true; }
            else status = false;
        }
    }
    catch (error) { console.log(error) }
    return status;
}