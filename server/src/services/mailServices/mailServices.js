const nodemailer = require('nodemailer');
const { calculateAge } = require("../../utils/calculateAge");

const sendOrderPlacedMail = (orderPlacedResponse, orderData) => {
    const { fullname, mobile_number, email } = orderPlacedResponse.userProfile;
    const { orderId } = orderPlacedResponse;
    const { paymentDetails } = orderData;

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'corporatesales@konnectdiagnostics.com',
            pass: 'Ashwin@1234'
        }
    });

    const emailTemplate = `Dear ${fullname}

Thank you for choosing Konnect Diagnostics.

Your Order has been placed successfully, with  Order Id : #ORKDC${orderId}
Payment ID: ${paymentDetails.razorpay_payment_id}#PMTOKDC
Mobile Number : ${mobile_number}
Check your order details at https://konnectdiagnostics.com/dashboard

From: Konnect Diagnostics
Email: corporatesales@konnectdiagnostics.com
Customer Care No: 040 - 4123 5555
    `;

    const mailOptions = {
        from: 'corporatesales@konnectdiagnostics.com',
        to: email,
        subject: `Order #ORKDC${orderId} Placed Successfully - Konnect`,
        text: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return (error);
        }
        // console.log(`order #ORKDC${orderId} placed email sent`);
        return ({ emailSent: true, message: `Email sent: ${info.response}` });
    });
};

const orderPlaceMailToAdmin = (orderPlacedResponse, orderData) => {
    const { fullname, mobile_number, alternate_mobile_number, email, gender } = orderPlacedResponse.userProfile;
    const userAge = calculateAge(orderPlacedResponse.userProfile.date_of_birth)
    const { orderId } = orderPlacedResponse;
    const { checkOutFormData, paymentDetails, cart } = orderData;
    const { amount, sampleCollection, selectedMember, selectedSession } = checkOutFormData;

    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'corporatesales@konnectdiagnostics.com',
            pass: 'Ashwin@1234'
        }
    });

    let sampleCollectionDetails;
    if (sampleCollection.sampleCollectionAt === 0) {
        sampleCollectionDetails = `Home Collection Address:
${sampleCollection.homeSampleCollection.address_line_1} ${sampleCollection.homeSampleCollection.address_line_2}
${sampleCollection.homeSampleCollection.locality} ${sampleCollection.homeSampleCollection.city} - ${sampleCollection.homeSampleCollection.pincode} ${sampleCollection.homeSampleCollection.state}`;
    } else {
        sampleCollectionDetails = `Clinic Visit:
${sampleCollection.clinicSampleCollection.name}, ${sampleCollection.clinicSampleCollection.city} - ${sampleCollection.clinicSampleCollection.pincode}
${sampleCollection.clinicSampleCollection.address}, ${sampleCollection.clinicSampleCollection.telephone_number}, ${sampleCollection.clinicSampleCollection.email}`;
    }

      let cartDetails = cart.map((item, index) => {
        const members = selectedMember[index].join(', ');
        const itemName = item.test_name || item.package_name;
        const itemType = item.test_name ? 'Test' : 'Package';
        return `${itemType}: ${itemName}
Members: ${members}
Price: ${item.price} - Quantity: ${item.quantity}
        `;
      }).join('\n');

    const emailTemplate = `
Order Id : #ORKDC${orderId}

User Details:- ${fullname} (${userAge} - ${gender})
Mobile Number: ${mobile_number} / ${alternate_mobile_number}
Email: ${email}

Billing Details:-
Subtotal Amount: ${amount.subTotalAmount},
Coupon Code: ${amount.couponCode}
Coupon Code Disocunt Amount: ${amount.couponCodeDiscount}
Total Amount: ${amount.totalAmount}

Payment Details:-
Razorpay Payment ID: ${paymentDetails.razorpay_payment_id},
Razorpay Order ID: ${paymentDetails.razorpay_payment_id},
Razorpay Signature: ${paymentDetails.razorpay_signature}

${sampleCollectionDetails}

Preferred Session: ${ selectedSession.time }, ${ selectedSession.date.date } ${ selectedSession.date.month } ${ selectedSession.date.day }

${cartDetails}

From: Konnect Diagnostics - Orders
Email: corporatesales@konnectdiagnostics.com
`;

    const mailOptions = {
        from: 'corporatesales@konnectdiagnostics.com',
        to: 'corporatesales@konnectdiagnostics.com',
        subject: `Order #ORKDC${orderId} Placed by ${fullname}(${mobile_number})`,
        text: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return (error);
        }
        // console.log(`order #ORKDC${orderId} placed email sent`);
        return ({ emailSent: true, message: `Email sent: ${info.response}` });
    });
};

module.exports = {
    sendOrderPlacedMail,
    orderPlaceMailToAdmin
};
