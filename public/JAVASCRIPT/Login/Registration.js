const input = document.querySelectorAll('#input');
const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('#form');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const list = document.querySelector('#states-dropdown-list');
const option = document.querySelectorAll('option');
const policy = document.getElementById('policy-conformation');
let gender = '';

male.addEventListener('click',(e) => {
    if(e.srcElement.checked) {
        female.checked = false;
        gender = 'Male';
    }
})
female.addEventListener('click',(e) => {
    if(e.srcElement.checked) {
        male.checked = false;
        gender = 'Female';
    }
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(valid()) {
        const newUser = {
            Date: Date(),
            Firstname: input[3].value,
            Lastname: input[4].value,
            Email: input[0].value,
            Password: input[1].value,
            Gender: gender,
            From: list.value,
        }
        console.log(newUser);
        sendToBackend(newUser);
        form.reset()
    }
});

function valid() {
    let count = 0;
    for(let i = 0; i < input.length; i++) {
        if(input[i].value == '') {
            input[i].classList.add('error');
            setTimeout(() => {
                input[i].classList.remove('error'); 
            }, 5000);
            count++;
        }
    }
    if(count >= 1) { return false; }
    else if(input[1].value != input[2].value) {
        alert('Passwords dont match');
        input[1].classList.add('error');
        input[2].classList.add('error');
        setTimeout(() => { input[1].classList.remove('error'); }, 5000);
        setTimeout(() => { input[2].classList.remove('error'); }, 5000);
    }
    else if(input[1].value.length < 10) {
        alert('Password must be at least 10 characters');
        input[1].classList.add('error');
        input[2].classList.add('error');
        setTimeout(() => { input[1].classList.remove('error'); }, 5000);
        setTimeout(() => { input[2].classList.remove('error'); }, 5000);
    }
    else if(male.checked == false && female.checked == false) {
        alert(`Please select if you're a male or female`);
    }
    else if(male.checked == false && female.checked == false) {
        alert(`Please select if you're a male or female`);
    }
    else if(list.value == option[0].textContent) {
        alert(`Please select a state`);
    }
    else if(policy.checked == false) {
        alert(`Must agree to terms and conditions`);
    }
    else { return true; }
}

function sendToBackend(data) {
    fetch('http://localhost:5000/Register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => { return res.json(); })
    .then(data => {
        console.log(data);
        // location.replace('http://localhost:5000/Register/Conformation');
    })
    .catch(err => { console.log(err); })
}