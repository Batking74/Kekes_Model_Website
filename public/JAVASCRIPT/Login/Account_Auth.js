import { sendPOSTRequestToSever } from '../ExtraTools.js'
const inputs = document.getElementsByTagName('input');
const verifyBtn = document.getElementById('verify-btn');
const resendBtn = document.getElementById('resend-btn');
document.getElementById('message').textContent = localStorage.getItem('PasswordReset').Email;
verifyBtn.addEventListener('click', async () => {
    console.log('test')
})

resendBtn.addEventListener('click', async () => {
    console.log('hi')
    const a = await sendPOSTRequestToSever('/ResetPassword', localStorage.getItem('PasswordReset'))
})

// localStorage.removeItem('PasswordReset');
