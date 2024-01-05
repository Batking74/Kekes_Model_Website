import { sendDELETERequestToSever, sendPOSTRequestToSever, sendPUTRequestToSever } from '../helpers/request_methods.js';
const submitBtn = document.getElementById('submit-btn');
const email = document.getElementById('email');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
})

async function validate() {
    if(valid(email.value)) {
        const cred = {
            id: 0,
            keyword: 'reset',
            Email: email.value,
            RandomNum: ((Math.random() * 10000) + 1001).toFixed(0)
        };
        const response = await sendPOSTRequestToSever('/ResetPassword', cred);
        localStorage.setItem('PasswordReset', response);
        location.replace('/ResetPassword/Email_Conformation');
    }
}

function valid(input) {
    if(input === '') {
        email.classList.add('error');
        setTimeout(() => { email.classList.remove('error'); }, 4000);
        return false;
    }
    else return true;
}