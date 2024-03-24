const userService = require("../../services/userService");
const nodemailer = require('nodemailer');

const sendOrderPlacedMail = (orderPlacedResponse, orderData) => {

    const { fullname, mobile_number, email } = orderPlacedResponse.userProfile;
    const { orderId } =  orderPlacedResponse;
    // const { checkOutFormData, paymentDetails, cart } = orderData;



    // console.log(checkOutFormData, paymentDetails, cart);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shaikmahmoodsameer@gmail.com',
            pass: 'wxpzwnsdwarqbilu'
        }
    });

    const emailTemplate = `
        Dear ${fullname}

        Thank you for choosing Konnect Diagnostics.

        Your Order has been placed successfully, with  Order Id : #ORKDC${orderId}
        Payment ID: #PMTOKDC{paymentDetails.payment_id} - {paymentDetails.id}
        Of User Id : ${mobile_number}
        Check your order details at https://konnectdiagnostics.com/dashboard

        From: Konnect Diagnostics
        Email: info@konnectdiagnostics.com
        Customer Care No: 040 - 4123 5555
    `;

    const mailOptions = {
        from: 'shaikmahmoodsameer@gmail.com',
        to: email,
        subject: `Order #ORKDC${orderId} Placed Successfully - Konnect`,
        text: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return ( error );
        }
        // console.log("email sent");
        return ({ emailSent: true, message: `Email sent: ${info.response}` });
    });
};

module.exports = {
    sendOrderPlacedMail
};
