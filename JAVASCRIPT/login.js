import { navStoreBlueprint, i } from "./Nav&Footer_Blueprint.mjs";
const submitBtn = document.getElementById('submit-btn');
const inputElement = document.querySelectorAll('#userInput');
const checkbox = document.getElementById('checkbox');
const errorElement = document.getElementById('error');
const errorMsg = ['Username is Required!', 'Password is Required!', 'Username and Password is Required'];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
    form.reset();
    // location.replace('/HTML/Contact_Submission.html');

})

function validate() {
    const seconds = 5000;
    for(let i = 0; i < inputElement.length; i++) {
        if(inputElement[0].value == '' && inputElement[1].value == '') {
            getError(2, 0);
            setTimeout(() => getError(0,1), seconds);
        }
        else if(inputElement[i].value == '') {
            getError(i, 0);
            setTimeout(() => getError(0, 1), seconds);
        }
        else {
            const userCredentials = [{
                Date: Date(),
                Username: inputElement[0].value,
                Password: inputElement[1].value
            }]
            console.log(userCredentials)
        }
    }
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

navStoreBlueprint[i.footer][0].remove();
console.log(navStoreBlueprint)