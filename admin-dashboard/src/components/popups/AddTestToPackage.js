import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import BASE_API_URL from '../../api/index';
import TestsSearchBar from '../TestsSearchBar';

function AddTestToPackage({ selectedPackage, show, onHide }) {
  const [packageTests, setPackageTests] = useState([]);
  const [packagePrice, setPackagePrice] = useState(null);

  function calculatePackagePrice(pckg) {
    let totalPrice = 0;
    pckg.forEach(test => {
      totalPrice += test.price;
    });
    return totalPrice;
  }


  const getTests = useCallback(async (packageId) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/admin/get-tests`, { params: { packageId: packageId } });
      setPackageTests(response.data);
      setPackagePrice(calculatePackagePrice(response.data)); // Calculate package price using response.data
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  useEffect(() => {
    selectedPackage && getTests(selectedPackage.package_id);
  }, [selectedPackage, getTests]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="text-k-secondary">
            <span className="text-k-clr-primary">
            {selectedPackage && selectedPackage.package_name}
            </span>- &#8377; {packagePrice}
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">

          <div className="p-3">
            <p className="text-k-accent">
              Total Tests Found
              <span className='small'> {`(${packageTests && packageTests.length})`} </span>
            </p>
            <div className="d-flex flex-wrap">
              {
                packageTests.map((test, index) => (
                  <p key={index} className="m-1 small fw-bold shadow-sm bg-light1 rounded px-3 py-1">
                    {test.test_name}
                  </p>
                ))
              }
            </div>
          </div>
          <hr />
          <div className="p-3" style={{height: "350px"}}>
            <p className="text-k-accent"> Add Tests </p>
            <TestsSearchBar packageTests={packageTests} getTests={getTests} packageId={selectedPackage.package_id} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddTestToPackage;
