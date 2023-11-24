
async function sendMailToCompany(userData) { prepareEmail(userData) }
async function sendMailToUser(userData) { prepareEmail(userData) }
async function prepareEmail(userData) {
    const companyinfo = await getTablesFrom(process.env.TABLE_NAME1, companyDB);
    if(userData.id == 3) sendEmail(getEmailForCompany(companyinfo[0], userData));
    else sendEmail(getEmailForUser(companyinfo[0], userData));
}

async function sendEmail(email) {
    const response = await transporter.sendMail(email);
    console.log(`${resMsg[5]} ${response.messageId}`);
}
function sendResponse(res, msg) { res.send(JSON.stringify(msg)); }

async function encryptData(data) { return await bcrypt.hash(data, 10); }



function initMailGen(name, companyinfo) {
    let mailGenerator = new mailgen({
        theme: 'default',
        product: {
            name: name,
            link: companyinfo.Website,
            logo: '/IMG/Tiki.jpg',
            copyright: `copyright 2022 Nazir Knuckles Inc | ${date.getFullYear()} | ${companyinfo.CompanyName}`
        }
    });
    return mailGenerator;
}


export function getEmailForUser(companyinfo, userData) {
    const mailGenerator = initMailGen(companyinfo.CompanyName, companyinfo);
    return ({
        from: `${companyinfo.CompanyName} <${process.env.SMTP_EMAIL_1}>`,
        to: userData.Email,
        subject: `Message From ${companyinfo.CompanyName}`,
        html: mailGenerator.generate(email(companyinfo, userData)),
        attachments: [{
            filename: 'Product_1.jpg',
            path: 'public/IMG/Store Products/Store 1/Product_1.jpg'
        }]
    })
}

export function getEmailForCompany(companyinfo, userData) {
    const mailGenerator = initMailGen(userData.Firstname, companyinfo);
    return ({
        from: `${userData.Email} <${process.env.SMTP_EMAIL_1}>`,
        to: process.env.SMTP_EMAIL_2,
        subject: `Message From ${userData.Firstname} on ${companyinfo.CompanyName} Contact Page!`,
        html: mailGenerator.generate(email(companyinfo, userData))
    });
}