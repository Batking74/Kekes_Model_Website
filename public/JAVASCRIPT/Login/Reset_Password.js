import { sendDELETERequestToSever, sendPOSTRequestToSever, sendPUTRequestToSever } from '../helpers/request_methods.js';
const submitBtn = document.getElementById('submit-btn');
const email = document.getElementById('email');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
})


console.log(btoa('HELLLLOOO'))

async function validate() {
    if(valid(email.value)) {
        const cred = {
            id: 0,
            keyword: 'reset',
            Email: email.value,
            RandomNum: ((Math.random() * 9000) + 1000).toFixed(0)
        };
        const response = await sendPOSTRequestToSever('/ResetPassword', cred);
        if(localStorage.getItem(response.Name)) localStorage.removeItem(response.Name);
        localStorage.setItem(response.Name, response.Hash);
        localStorage.setItem('PasswordReset', JSON.stringify({
            Email:  cred.Email,
            Title: "Reset Password"
        }));
        location.replace('../../HTML/Login/Send_Verification_Code.html');
    }
}

console.log(atob('SEVMTExMT09P'));

function valid(input) {
    if(input === '') {
        email.classList.add('error');
        setTimeout(() => { email.classList.remove('error'); }, 4000);
        return false;
    }
    else return true;
}