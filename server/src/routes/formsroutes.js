const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/contact-form-submission', (req, res) => {
    const { formData } = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shaikmahmoodsameer@gmail.com',
            pass: 'wxpzwnsdwarqbilu'
        }
    });

    var emailTemplate = `
        ${formData.subject}
        ${formData.message}

        From: ${formData.name}
        Email: ${formData.email}
        Contact Number: ${formData.email}
    `

    var mailOptions = {
        // from: formData.email,
        from: 'shaikmahmoodsameer@gmail.com',
        to: formData.email,
        subject: "Konnect - Contact Form",
        text: emailTemplate
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
        } else {
            return res.json({ emailSent: true, message: `Email sent: ${info.response}` });
        }
    });
})

module.exports = router;