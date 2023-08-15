const resMsg = [
    'Thank You For Your Order',
    'User Contact Message',
    'Thank You for signing up with',
    'Thank you enjoy the rest of your evening!',
    'Password Reset Request'
];

function userEmailConformation(companyInfo, userData) {
    // Registration: Verification Emails
    if(parseInt(userData.id) === 1) {
        return (
            {
                body: {
                    // gretting: `Hi, ${userData.Firstname}`,
                    name: userData.Firstname,
                    intro: `Welcome to ${companyInfo.CompanyName} we're very excited to have you on board!`,
                    action: {
                        instructions: `To get started with ${companyInfo.CompanyName}, please click to verify your account`,
                        button: {
                            color: 'red',
                            text: 'Verify Acoount',
                            link: 'http://localhost:5000/Register/Account_Verification/Account_Conformation'
                        }
                    },
                }
            }
        )
    }
    // Registration: Account Created Successfully
    else if(parseInt(userData.id) === 2) {
        return (
            {
                body: {
                    gretting: `Hi, ${userData.Firstname}`,
                    name: userData.Firstname,
                    intro: `${resMsg[2]} ${companyInfo.CompanyName}!`,
                    outro: resMsg[3],
                }
            }
        )
    }
    // Reset Credentials Emails: PUT REQUEST
    else if(parseInt(userData.id) === 3) {
        return (
            {
                body: {
                    name: userData.Firstname,
                    intro: `${resMsg[4]} ${companyInfo.CompanyName}!`,
                    action: {
                        instructions: 'Click the button to reset password',
                        button: {
                            color: 'red',
                            text: 'Reset Password',
                            link: 'bcps.org'
                        }
                    },
                    outro: resMsg[3],
                }
            }
        )
    }
    // Users contacting palmer studios Emails
    else if(parseInt(userData.id) === 4) {
        return (
            {
                body: {
                    name: userData.Firstname,
                    intro: `${resMsg[1]}: ${userData.Firstname} ${userData.Lastname}`,
                    action: {
                        instructions: 'Click the button to reset password',
                    },
                    outro: resMsg[3],
                }
            }
        )
    }
    // Product Conformation Email
    else if(parseInt(userData.id) === 5) {
        return (
            {
                body: {
                    name: userData.FirstName,
                    intro: 'Your bill has arrived!',
                    table: {
                        data: [
                            {
                                ID: companyInfo.id,
                                description: 'Product Description',
                                price: 'Product Price'
                            }
                        ]
                    },
                    outro: 'looking for to do more business'
                }
            }
        )
    }
    // Palmer Studios newsletter/updates
    else {
        return (
            {
                body: {
                    name: userData.FirstName,
                    intro: 'Your bill has arrived!',
                    table: {
                        data: [
                            {
                                ID: companyInfo.id,
                                description: 'Product Description',
                                price: 'Product Price'
                            }
                        ]
                    },
                    outro: 'looking for to do more business'
                }
            }
        )
    }
}
function emailForCompany() {
    return (
        {
            body: {
                name: "Naz",
                intro: 'You have received a message from a user',
                text: "Hello World",
                outro: 'looking for to do more business'
            }
        }
    )
}
module.exports = { userEmailConformation, emailForCompany, resMsg }