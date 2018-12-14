var nodemailer = require('nodemailer');

var PASSWORD = process.env.MY_VARIABLE;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sambndongo@gmail.com',
    pass: PASSWORD
  }
});

var mailOptions = {
  from: 'sambndongo@gmail.com',
  to: 'ndongo.samb@orange-sonatel.com',
  subject: 'Sending Email using Node.js',
  text: 'Academie : Debuter avec Node.Js'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
