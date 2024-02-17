import React, { useState } from "react";
import { styled } from "styled-components";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_API_URL } from "../api";

const AddOtherAddressForm = ({ userId }) => {
    const [invalidPincode, setInvalidPincode] = useState(false);
    const [localityOptions, setLocalityOptions] = useState([]);
    const [formData, setFormData] = useState({
        user_id: userId,
        address_type: "",
        pincode: "",
        locality: "",
        address_name: "",
        address_line_1: "",
        address_line_2: "",
        googlemap: "-",
        city: "",
        state: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLocalityChange = async (e) => {
        const { value } = e.target;
        try {
            const response = await axios.get(`${BASE_API_URL}/getPincodeData/${value}`);
            if (response.data.Status === "Error") {
                setInvalidPincode(true);
            } else {
                const postOfficeData = response.data[0].PostOffice;
                setFormData((prevData) => ({
                    ...prevData,
                    city: postOfficeData[0].Region,
                    state: postOfficeData[0].State,
                }));
                setLocalityOptions(response.data[0].PostOffice.map((office) => office.Name))
            }
        } catch (err) {
            console.error("Error fetching locality data:", err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        axios.post(`${BASE_API_URL}/user/add-new-address`, formData)
            .then((response) => {
                console.log("Address added successfully:", response.data);
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // Refresh after 2 seconds
            })
            .catch((error) => {
                console.error("Error adding address:", error.response.data);
            });
    };

    return (
        <Wrapper>
            {formSubmitted ? (
                <div className="formSubmittedBox d-flex-cc flex-column">
                    <img src="/images/completed.png" alt="completed" className="mb-4 ms-4" style={{width: "200px"}} />
                    <p className="text-success">
                        New address has been added to profile.
                    </p>
                </div>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="addressName" className="my-1">
                        <Form.Control
                            type="text"
                            name="address_name"
                            placeholder="Name this address for reference..."
                            value={formData.address_name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <div className="d-flex my-1">
                        <div className="w-50">
                            <Form.Group controlId="addressType" className="">
                                <Form.Control
                                    as="select"
                                    name="address_type"
                                    value={formData.address_type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Address Type</option>
                                    <option value="Home">Home</option>
                                    <option value="Office">Office</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="w-50">
                            <Form.Group controlId="pincode" className="ms-1">
                                <Form.Control
                                    type="text"
                                    name="pincode"
                                    placeholder="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    onBlur={handleLocalityChange}
                                    required
                                />
                            </Form.Group>
                            {invalidPincode && <p className="small text-danger"> Invalid Pincode </p>}
                        </div>
                    </div>

                    <Form.Group controlId="locality" className="my-1">
                        <Form.Control
                            as="select"
                            name="locality"
                            value={formData.locality}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Locality</option>
                            {localityOptions.map((option) => (
                                <option value={`${option}`}>{option}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="addressline1" className="my-1">
                        <Form.Control
                            type="text"
                            name="address_line_1"
                            placeholder="Address line 1"
                            value={formData.address_line_1}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>


                    <Form.Group controlId="addressline2" className="my-1">
                        <Form.Control
                            type="text"
                            name="address_line_2"
                            placeholder="Address line 2"
                            value={formData.address_line_2}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className="d-flex my-1">
                        <Form.Group controlId="city" className="w-50 float-left">
                            <Form.Control
                                type="text"
                                name="city"
                                placeholder="Enter City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="state" className="ms-1 w-50 float-left">
                            <Form.Control
                                type="text"
                                name="state"
                                placeholder="Enter State"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <Button variant="primary" type="submit" className="btn w-100">Submit</Button>
                </Form>
            )}
        </Wrapper>
    );
};

export default AddOtherAddressForm;

const Wrapper = styled.div`
    width: 100%;
    .formSubmittedBox{
        width: 100%;
        height: 300px;
    }
`