const nodemailer = require('nodemailer')
const creds = require('../config/config')
const router = require('express').Router()


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
			user: creds.USER,
			pass: creds.PASS
		}
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.route('/').post((req, res, next) => {
	let name = req.body.name
	let email = req.body.email
	let message = req.body.message
	let content = `name: ${name} \n email: ${email} \n message: ${message}`

	let mail = {
		from: name,
		to: 'cassielevett@gmail.com',
		subject: 'New Message from Emerald Productions Contact Form',
		text: content
	}

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				msg: 'fail'
			})
		} else {
			res.json({
				msg: 'success'
			})
		}
	})
})

module.exports = router