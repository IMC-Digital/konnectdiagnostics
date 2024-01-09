// import React, { useState } from 'react';
// import { Button, ProgressBar } from 'react-bootstrap';
// import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
// import SessionSelection from '../../components/checkout/SessionSelection';
// import SampleCollectionAt from '../../components/checkout/SampleCollectionAt';
// // import SelectMember from '../../components/checkout/SelectMember';
// import SelectMember2 from './SelectMember2';

// const steps = [
//     { title: 'Step 1', icon: <FaUser /> },
//     { title: 'Step 2', icon: <FaEnvelope /> },
//     { title: 'Step 3', icon: <FaLock /> },
// ];

// export default function MultiStepForm3({ cart, setCart, userId, profileData, setShowAddNewAddressPopup, setShowAddNewMemberPopup, checkOutFormData, setCheckOutFormData }) {
//     const [currentStep, setCurrentStep] = useState(0);

//     const nextStep = () => {
//         setCurrentStep((prevStep) => prevStep + 1);
//     };

//     const prevStep = () => {
//         setCurrentStep((prevStep) => prevStep - 1);
//     };

//     const renderForm = () => {
//         switch (currentStep) {
//             case 0:
//                 return <SampleCollectionAt
//                     cart={cart}
//                     setCart={setCart}
//                     userId={userId}
//                     profileData={profileData}
//                     checkOutFormData={checkOutFormData}
//                     setCheckOutFormData={setCheckOutFormData}
//                     setShowAddNewAddressPopup={setShowAddNewAddressPopup}
//                 />;
//             case 1:
//                 return <SelectMember2
//                     cart={cart}
//                     setCart={setCart}
//                     userId={userId}
//                     profileData={profileData}
//                     checkOutFormData={checkOutFormData}
//                     setCheckOutFormData={setCheckOutFormData}
//                     setShowAddNewMemberPopup={setShowAddNewMemberPopup}
//                 />;
//             case 2:
//                 return <SessionSelection
//                     checkOutFormData={checkOutFormData}
//                     setCheckOutFormData={setCheckOutFormData}     
//                 />;
//             default:
//                 return null;
//         }
//     };

//     const handleCheckoutSubmission = () => {
//         console.log(checkOutFormData);
//     }

//     return (
//         <div>
//             <ProgressBar now={(currentStep + 1) * (100 / steps.length)} />

//             <div className="mb-4 mt-4">
//                 {/* <h3>{steps[currentStep].title}</h3> */}
//                 {renderForm()}
//             </div>

//             <Button variant="primary" onClick={prevStep} disabled={currentStep === 0}>
//                 Previous
//             </Button>{' '}
//             { currentStep === steps.length - 1 ? 
//                 <Button variant="primary" onClick={nextStep} disabled={currentStep === steps.length - 1}> Next </Button> 
//                 : <Button variant="primary" onClick={handleCheckoutSubmission}> Submit </Button>
//              }
//         </div>
//     );
// };


import React, { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import SessionSelection from '../../components/checkout/SessionSelection';
import SampleCollectionAt from '../../components/checkout/SampleCollectionAt';
import SelectMember2 from './SelectMember2';

const steps = [
    { title: 'Step 1', icon: <FaUser /> },
    { title: 'Step 2', icon: <FaEnvelope /> },
    { title: 'Step 3', icon: <FaLock /> },
];

export default function MultiStepForm3({ 
    cart, 
    setCart, 
    userId, 
    profileData, 
    setShowAddNewAddressPopup, 
    setShowAddNewMemberPopup, 
    setShowPopupConfirmCheckout,
    checkOutFormData, 
    setCheckOutFormData 
}) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const renderForm = () => {
        switch (currentStep) {
            case 0:
                return <SampleCollectionAt
                    cart={cart}
                    setCart={setCart}
                    userId={userId}
                    profileData={profileData}
                    checkOutFormData={checkOutFormData}
                    setCheckOutFormData={setCheckOutFormData}
                    setShowAddNewAddressPopup={setShowAddNewAddressPopup}
                />;
            case 1:
                return <SelectMember2
                    cart={cart}
                    setCart={setCart}
                    userId={userId}
                    profileData={profileData}
                    checkOutFormData={checkOutFormData}
                    setCheckOutFormData={setCheckOutFormData}
                    setShowAddNewMemberPopup={setShowAddNewMemberPopup}
                />;
            case 2:
                return <SessionSelection
                    checkOutFormData={checkOutFormData}
                    setCheckOutFormData={setCheckOutFormData}
                />;
            default:
                return null;
        }
    };

    const handleCheckoutSubmission = () => {
        console.log(checkOutFormData);
        setShowPopupConfirmCheckout(true)
    }

    return (
        <div>
            <ProgressBar now={(currentStep + 1) * (100 / steps.length)} />

            <div className="mb-4 mt-4">
                {renderForm()}
            </div>

            {currentStep === steps.length - 1 ? (
                <>
                    <Button variant="primary" className='me-1' onClick={prevStep} disabled={currentStep === 0}>
                        Previous
                    </Button>
                    <Button variant="success" onClick={handleCheckoutSubmission}>
                        Submit
                    </Button>
                </>
            ) : (
                <>
                    <Button variant="primary" onClick={prevStep} disabled={currentStep === 0}>
                        Previous
                    </Button>{' '}
                    <Button variant="primary" onClick={nextStep} disabled={currentStep === steps.length - 1}>
                        Next
                    </Button>
                </>
            )}
        </div>
    );
};
