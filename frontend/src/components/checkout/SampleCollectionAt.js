import React, { useState } from 'react'
import SampleCollHomeTab from './SampleCollHomeTab';
import SampleCollClinicTab from './SampleCollClinicTab';

function SampleCollectionAt({ setShowAddNewAddressPopup, userId }) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    const renderTabs = () => {
        const tabs = ['Home Address', 'Diagnostic Centre'];
    
        return tabs.map((tab, index) => (
          <button
            key={index}
            className={`btn me-2 ${activeTab === index + 1 ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => handleTabClick(index + 1)}
          >
            {tab}
          </button>
        ));
    };

    return (
        <div className="tabs-container">
          <h2 className="text-k-secondary">Sample Collection At</h2>
          <hr />
          {renderTabs()}
          <div className="tab-content">
            { activeTab === 1 && <SampleCollHomeTab setShowAddNewAddressPopup={setShowAddNewAddressPopup} userId={userId} /> }
            { activeTab === 2 && <SampleCollClinicTab /> }
          </div>
        </div>
      );

}

export default SampleCollectionAt
