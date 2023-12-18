const resMsg = [
    [`New Account Verification Code`,
    'To get started with',
    'please enter this code',
    'To reset your',
    'Password enter in this code',
    'Thank you enjoy the rest of your evening! Outro1 Verify Account',
    'Thank you enjoy the rest of your evening! Outro2 Reset Password',
    'Test butt'],
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
    resMsg[i][0] = `${resMsg[i][0]}`;
    if(userData.keyword === 'reset') {
        resMsg[i][0] = `${companyinfo.CompanyName} Reset Verification Code`;
        resMsg[i][1] = resMsg[i][3];
        resMsg[i][2] = resMsg[i][4];
        resMsg[i][5] = resMsg[i][6];
    }
    return ({
        body: {
            title: `${resMsg[i][1]} ${companyinfo.CompanyName} ${resMsg[i][2]}`,
            name: userData.Firstname,
            intro: resMsg[7],
            action: {
                instructions: `${userData.RandomNum}`
            },
            outro: resMsg[i][5]
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