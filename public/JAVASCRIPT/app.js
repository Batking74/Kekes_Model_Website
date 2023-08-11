const database = require('./database.js');
const express = require('express');
const mailgen = require('mailgen');
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express();

const query = ['SELECT * FROM companyinfo'];

// Routing is how an application/websites end points respond to client/computer requests
app.use(express.static('./public'));
app.use(express.json());

app.get('/companyinfo', (req, res) => {
    database.pool.query(query[0], (err, results) => {
        res.json(results[0]);
    });
})

// Home Page Routings
app.get('/', (req, res) => {
    fs.readFile('./public/HTML/index.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

function d() {
    const d = database.connection.query(query[0])
    console.log(d.RowDataPacket())
    // return results;
}

d()

let mailGenerator = new mailgen({
    theme: 'default',
    product: {
        name: 'g',
        link: 'ge'
    }
});

app.get('/companyInfo', (req, res) => {
    database.connection.query(query[0], (err, results) => {
        if(err) throw err;
        res.json(results[0]);
    })
});

// About Page Routings
app.get('/About', (req, res) => {
    fs.readFile('./public/HTML/About.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// FAQ Page Routings
app.get('/FAQ', (req, res) => {
    fs.readFile('./public/HTML/FAQ.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Contact Page Routings
app.route('/Contact')
.post((req, res) => {
    const userData = req.body;
    bcrypt.hash(userData[0].Email, 10)
    .then(encryptedData => { res.send(JSON.stringify(encryptedData)); })
    .catch(err => { console.log(err); });
})
.get((req, res) => {
    fs.readFile('./public/HTML/Contact.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Store Page Routings
app.get('/Palmerstore', (req, res) => {
    fs.readFile('./public/HTML/Store/Store_1.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Store2 Page Routings
app.get('/Palmerstore/Page2', (req, res) => {
    fs.readFile('./public/HTML/Store/Store_2.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Store3 Page Routings
app.get('/Palmerstore/Page3', (req, res) => {
    fs.readFile('./public/HTML/Store/Store_3.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Login Page Routings
app.get('/Login', (req, res) => {
    fs.readFile('./public/HTML/Login/Login.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Register Account Page Routings
app.route('/Register')
.post((req, res) => {
    const userData = req.body;
    console.log(userData);
    res.send(JSON.stringify('GOT UR DATA!'));
})
.get((req, res) => {
    fs.readFile('./public/HTML/Login/Registration.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Register Account Page Conformation
app.get('/Register/Conformation', (req, res) => {
    fs.readFile('./public/HTML/Login/Account_Created_Conformation.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
});

// Reset Password Page Routings/Conformation
app.route('/ResetPassword')
.get((req, res) => {
    fs.readFile('./public/HTML/Login/Reset_Password.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
})
.post((req, res) => {
    const userData = req.body;
    console.log(userData);
    res.send(JSON.stringify('GOT UR DATA!'));
});

// Reset Password Page Conformation
app.get('/ResetPassword/Conformation', (req, res) => {
    fs.readFile('./public/HTML/Login/Email_Recieved_Conformation.html', 'utf8', (err, HTML) => {
        if(err) throw err;
        res.send(HTML);
    });
})

// Palmer Studios Server
app.listen(process.env.COMPANY_PORT, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${process.env.COMPANY_PORT} SUCCESS!!!`);
});

function sendMailToCompany(userData) {
    const mailFromUser = {
        from: userData[1],
        to: process.env.SMTP_EMAIL_3,
        subject: 'User Contact Message',
        html: mailGenerator.generate({
            body: {
                name: userData[0],
                intro: 'Your bill has arrived booty',
                table: {
                    data: [
                        {
                            item: 'White T-Shirt',
                            description: 'White T-Shirt size 32',
                            price: '$10.99'
                        }
                    ]
                },
                outro: 'looking for to do more business'
            }
        })
    };
    return mailFromUser;
}

function sendMailToUser(userData) {
    const mailFromCompany = {
        from: process.env.SMTP_EMAIL_3,
        to: 'UsersEmail@gmail.com',
        subject: 'Thank You For Your Order',
        html: mailGenerator.generate({
            body: {
                name: 'Naz',
                intro: 'Your bill has arrived booty',
                table: {
                    data: [
                        {
                            item: 'White T-Shirt',
                            description: 'White T-Shirt size 32',
                            price: '$10.99'
                        }
                    ]
                },
                outro: 'looking for to do more business'
            }
        }),
        attachments: [
            {
                filename: 'Product_1.jpg',
                path: 'public/IMG/Store Products/Store 1/Product_1.jpg'
            }
        ]
    };
    return mailFromCompany;
}

database.transporter.sendMail(sendMailToCompany(['Nazir', 'te@gmail.com']))
.then(res => console.log(`Email Sent!: ${res.messageId}`))
.catch(err => console.log(err))