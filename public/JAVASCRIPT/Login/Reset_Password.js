import { sendDELETERequestToSever, sendPOSTRequestToSever, sendPUTRequestToSever } from '../ExtraTools.js';
const submitBtn = document.getElementById('submit-btn');
const email = document.getElementById('email');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(valid(email.value)) {
        const cred = [email.value];
        sendPOSTRequestToSever('/ResetPassword', cred)
        .then(res => { return res.json(); })
        .then(data => { return data; })
        .then(res => { console.log(res) })
        .catch(err => { console.log(err); });
    }
})

function valid(input) {
    if(input === '') {
        email.classList.add('error');
        setTimeout(() => { email.classList.remove('error'); }, 4000);
        return false;
    }
    else return true;
}