const sendOrderPlacedMail = (orderData) => {
    const { checkOutFormData, paymentDetails, cart } = orderData;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shaikmahmoodsameer@gmail.com',
            pass: 'wxpzwnsdwarqbilu'
        }
    });

    var emailTemplate = `
        <h1>${formData.subject}</h1>
        ${formData.message}

        From: ${formData.name}
        Email: ${formData.email}
        Contact Number: ${formData.email}
    `

    var mailOptions = {
        // from: formData.email,
        from: 'shaikmahmoodsameer@gmail.com',
        to: formData.email,
        subject: "Konnect - Order Placed Successfully.",
        text: emailTemplate
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
        } else {
            return res.json({ emailSent: true, message: `Email sent: ${info.response}` });
        }
    });
}

module.exports = {
    sendOrderPlacedMail
}