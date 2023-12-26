import React, { useState } from 'react'
import SampleCollHomeTab from './SampleCollHomeTab';
import SampleCollClinicTab from './SampleCollClinicTab';

function SampleCollectionAt({ setShowAddNewAddressPopup }) {
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
          {renderTabs()}
          <div className="tab-content">
            { activeTab === 1 && <SampleCollHomeTab setShowAddNewAddressPopup={setShowAddNewAddressPopup} /> }
            { activeTab === 2 && <SampleCollClinicTab /> }
          </div>
        </div>
      );

}

export default SampleCollectionAt
