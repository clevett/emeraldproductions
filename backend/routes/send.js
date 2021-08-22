const nodemailer = require('nodemailer')
const router = require('express').Router()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
			user: process.env.mailerUSER,
			pass: process.env.mailerPASS
		}
});

transporter.verify((error) => {
	const message = error  ? error : 'Server is ready to take messages'
  console.log(message)
});

router.route('/').post((req, res) => {
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
		const msg = err ? "Send mail generated an error" : 'Success'
		res.json({
			msg
		})
	})
})

module.exports = router