import React, { useState } from 'react';
import { organImages } from "../../assets/data/AllData";
import axios from 'axios';
import SearchBar from '../requiredPages/SearchBar';
import { BASE_API_URL } from '../../api';

function TestsOrgFilterLeft({ setSearchResults }) {
    const [activeOrg, setActiveOrg] = useState(organImages[0].alt);

    const handleOrgSel = async (event) => {
        const selectedOrg = event.currentTarget.querySelector('img').alt;
        try {
            // const response = await axios.get(`https://konnectserver.infocusrx.work/orgsel?selectedorgan=${selectedOrg}`);
            const response = await axios.get(`${BASE_API_URL}/orgsel?selectedorgan=${selectedOrg}`);
            setSearchResults(response.data);
            setActiveOrg(selectedOrg);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="box-left">
            <div className="categories box-mb">
                <SearchBar setSearchResults={setSearchResults} />
                <div className="organs d-flex gap-2 flex-wrap">
                    {organImages.map((image, index) => (
                        <div className={`org-item ${activeOrg === image.alt ? 'active' : ''}`} key={index} onClick={handleOrgSel}>
                            <img src={image.src} alt={image.alt} />
                            <p className='mb-0 ps-2'>{image.alt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestsOrgFilterLeft;
