const form = document.querySelector('#form');
const firstName = document.querySelector('#first_Name');
const lastName = document.querySelector('#last_Name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#Phone_number');
const button = document.querySelector('#btn');
const userMessage = document.querySelector('#textAreaMessage');
const error = document.querySelector('#error');

const userDataArray = [];

const collectData = (e) => {
    e.preventDefault();
    validate();
    const userData = {
        id: Date.now(),
        First_name: firstName.value,
        Last_name: lastName.value,
        Email: email.value,
        Phone_Number: phoneNumber.value,
        User_Message: userMessage.value
    };
    userData.push(userDataArray);
    console.log(userDataArray);
    localStorage.setItem('New contact message', JSON.stringify(userDataArray));
    form.reset();
};

const errorText = 'Form must be completely filled out!'

const validate = () => {
    if(form.value === '' || form.value === null) {
        error.innerHTML = errorText;
    }
}

button.addEventListener('click', () => collectData);