import React, { useEffect, useState } from 'react'
import SampleCollHomeTab from './SampleCollHomeTab';
import SampleCollClinicTab from './SampleCollClinicTab';

function SampleCollectionAt({ setShowAddNewAddressPopup, userId, profileData, checkOutFormData, setCheckOutFormData }) {
    const [activeTab, setActiveTab] = useState(checkOutFormData.sampleCollection.sampleCollectionAt);
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    const renderTabs = () => {
        const tabs = ['Home Address', 'Diagnostic Centre'];
        return tabs.map((tab, index) => (
          <button
            key={index}
            className={`btn me-2 ${activeTab === index ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ));
    };

    useEffect(() => {
      setCheckOutFormData((prevData) => ({
        ...prevData,
        sampleCollection: {
            ...prevData.sampleCollection,
            sampleCollectionAt: activeTab,
        },
      }));
    }, [activeTab, setCheckOutFormData])

    return (
        <div className="tabs-container">
          <h2 className="text-k-secondary">Sample Collection At</h2>
          <hr />
          {renderTabs()}
          <div className="tab-content">
            { activeTab === 0 && 
              <SampleCollHomeTab 
                profileData={profileData} 
                userId={userId}
                checkOutFormData={checkOutFormData}
                setCheckOutFormData={setCheckOutFormData}
                setShowAddNewAddressPopup={setShowAddNewAddressPopup} 
              /> 
            }
            { activeTab === 1 && 
              <SampleCollClinicTab 
                userId={userId}
                profileData={profileData}
                checkOutFormData={checkOutFormData}
                setCheckOutFormData={setCheckOutFormData}
            /> }
          </div>
        </div>
      );

}

export default SampleCollectionAt
