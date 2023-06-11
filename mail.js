var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: '10.65.1.64',
  auth: {
    user: 'helpdesk@fuyucorp2.com',
    pass: 'Welcome2021'
  }
});

var mailOptions = {
  from: 'no-reply@fuyucorp.com',
  to: 'mathimugan@fuyucorp.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});