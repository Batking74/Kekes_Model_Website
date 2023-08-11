import { companyInfo, navLinks, icons, attribute, navbar, footer, footerForm, footerInput, footerLabel, footerResponse, footerBtn } from "../Nav&Footer_Blueprint.js";

const submitBtn = document.getElementById('submit-btn');
const signUpBtn = document.querySelector('.signup-btn');
const inputElement = document.querySelectorAll('#userInput');
const checkbox = document.getElementById('checkbox');
const errorElement = document.getElementById('error');
const errorMsg = ['Username is Required!', 'Password is Required!', 'Username and Password is Required'];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(valid()) {
        const userCredentials = [{
            Date: Date(),
            Username: inputElement[0].value,
            Password: inputElement[1].value
        }]
        console.log(userCredentials)
        form.reset();
    }
})

function valid() {
    let count = 0;
    const seconds = 5000;
        for(let i = 0; i < inputElement.length; i++) {
            if(inputElement[i].value == '') {
                getError(i, 0);
                setTimeout(() => getError(0, 1), seconds);
                count++;
            }
        }
    if(!(count >= 1)) { return true; }
    else if (count == inputElement.length) {
        getError(2, 0);
        setTimeout(() => getError(0,1), seconds);
        return false;
    } 
    else { return false; }
}

function getError(index, select) {
    if(select == 0) {
        errorElement.classList.remove('Hide-Error-Style');
        errorElement.classList.add('Error-Style');
        errorElement.innerHTML = errorMsg[index];
    }
    else {
        errorElement.classList.remove('Error-Style')
        errorElement.classList.add('Hide-Error-Style');
    }
}

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.replace('http://localhost:5000/Register');
})

footer[0].remove();