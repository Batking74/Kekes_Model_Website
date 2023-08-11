const submitBtn = document.getElementById('submit-btn');
const email = document.getElementById('email');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(valid(email.value)) {
        console.log("Hi!");
        sendToServer();
    }
})

function valid(input) {
    if(input == '') {
        email.classList.add('error');
        setTimeout(() => { email.classList.remove('error'); }, 4000);
        return false;
    }
    else { return true; }
}

function sendToServer() {
    fetch('http://localhost:5000/ResetPassword', {
        method: 'POST',
        body: JSON.stringify(email.value)
    })
    .then(res => {
        console.log("res")
        return res.json();
    })
    .catch(err => { console.log(err); });
}