const resMsg = [
    [`New Account Verification Code`,
    '',
    '',
    'To reset your',
    'Password enter in this code',
    '',
    'Thank you enjoy the rest of your evening! Outro2 Reset Password',
    'Test okaayyy'],
    ['Thank You for signing up with',
    'Welcome to',
    `we're very excited to have you on board!`,
    'Autro for created acount'],
    'Thank You For Your Order, Your bill has arrived!',
    'Contacted You From'
];
const sendEmail = [sendCodeVerification, AccountCreatedConformation, sendPurcheseConfirmation, sendEmailToCompany, sendNewsLetter]

function email(companyinfo, userData) {
    for(let i = 0; i < sendEmail.length; i++) {
        if(parseInt(userData.id) == i) return sendEmail[i](companyinfo, userData, i);
    }
}

function sendEmailToCompany(companyinfo, userData, i) {
    return ({
        body: {
            name: 'Nazir',
            intro: `${userData.Firstname} ${userData.Lastname} ${resMsg[resMsg.length-1]} ${companyinfo.CompanyName}`,
            action: {
                instructions: `Message: ${userData.UserMessage}`
            }
        }
    })
}

function sendCodeVerification(companyinfo, userData, i) {
    return ({
        body: {
            name: userData.Firstname,
            action: [
                {
                    instructions: `To enhance the security of your ${companyinfo.CompanyName} account, we require a two-step verification. Please enter the following code to complete the setup:`
                },
                {
                    instructions: `Verification Code: ${userData.RandomNum}`,
                    button: {
                        color: '#000',
                        text: 'Verify',
                        link: 'http://localhost:5000/HTML/Login/Authentication.html'
                    }
                },
                {
                    instructions: `If you did not initiate this process or have any concerns, please contact our support team immediately at ${companyinfo.Email}.`
                }
            ],
        }
    })
}

function AccountCreatedConformation(companyinfo, userData, i) {
    return ({
        body: {
            gretting: `Hi, ${userData.Firstname}`,
            intro: `${resMsg[i][0]} ${companyinfo.CompanyName}!`,
            body: {
                instructions: `${resMsg[i][1]} ${companyinfo.CompanyName} ${resMsg[i][2]}`
            },
            outro: resMsg[i][3],
        }
    })
}

function sendPurcheseConfirmation(companyinfo, userData, i) {
    return ({
        body: {
            name: userData.FirstName,
            intro: resMsg[2],
            table: {
                data: [{
                    ID: companyinfo.id,
                        description: 'Product Description',
                        price: 'Product Price'
                    }]
                },
            outro: 'Shop again at Palmer Studios!'
        }
    })
}

function sendNewsLetter(companyinfo, userData, i) {
    return ({
        body: {
            intro: 'News Letter',
            body: {
                instructions: 'Welcome to my news letter'
            },
            outro: 'looking for to do more business'
        }
    })
}

module.exports = { resMsg, email }