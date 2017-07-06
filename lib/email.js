/**
 * Created by axetroy on 17-7-6.
 */
const nodemailer = require('nodemailer');

const SMTP_CONFIG = {
  host: 'smtp.163.com',
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: process.env.auth_user,
    pass: process.env.auth_pass
  }
};

class Email {
  constructor(config) {
    this.transporter = nodemailer.createTransport(config);
  }
  send(options) {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(options, function(err, info) {
        if (err) return reject(err);
        resolve(info);
      });
    });
  }
}

module.exports = new Email(SMTP_CONFIG);
