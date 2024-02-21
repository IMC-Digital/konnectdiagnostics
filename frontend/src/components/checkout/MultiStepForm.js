import React, { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import SessionSelection from './SessionSelection';
import SampleCollectionAt from './SampleCollectionAt';
import SelectMember2 from './SelectMember2';

const steps = [
    { title: 'Step 1', icon: <FaUser /> },
    { title: 'Step 2', icon: <FaEnvelope /> },
    { title: 'Step 3', icon: <FaLock /> },
];

export default function MultiStepForm({
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
        setShowPopupConfirmCheckout(true)
    }

    return (
        <div>
            <ProgressBar now={(currentStep + 1) * (100 / steps.length)} />

            <div className="mb-4 mt-4">
                {renderForm()}
            </div>

            <div>
                <Button variant="outline-secondary" onClick={prevStep} disabled={currentStep === 0} className='me-1'>
                    Previous
                </Button>

                <Button
                    variant={currentStep === steps.length - 1 ? "success" : "primary"}
                    onClick={currentStep === steps.length - 1 ? handleCheckoutSubmission : nextStep}
                    disabled={
                        // (currentStep === 0 &&
                        //     (!checkOutFormData.sampleCollection.homeSampleCollection.address_name && !checkOutFormData.sampleCollection.clinicSampleCollection.name)
                        // ) ||
                        (currentStep === 0 &&
                            ((!checkOutFormData.sampleCollection.homeSampleCollection.address_name && checkOutFormData.sampleCollection.sampleCollectionAt === 0) ||
                                (!checkOutFormData.sampleCollection.clinicSampleCollection.name && checkOutFormData.sampleCollection.sampleCollectionAt === 1))
                        ) ||
                        (currentStep === 1 && checkOutFormData.selectedMember.length === 0) ||
                        (currentStep === steps.length - 1 && !checkOutFormData.selectedSession?.date?.date)
                    }
                >
                    {currentStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>

            </div>
        </div>

    );
};
