import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
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
                    city: postOfficeData[0].District,
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

        axios.post("http://localhost:3210/user/add-new-address", formData)
            .then((response) => {
                console.log("Address added successfully:", response.data);
            })
            .catch((error) => {
                console.error("Error adding address:", error.response.data);
            });
    };


    return (
        <Container className="p-4">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <h3 className="text-k-secondary">Add New Address</h3>
                        <p className="text-k-text small text-danger"> <strong>Note:</strong> All fields are mandatory</p>
                        <div className="d-flex">
                            <Form.Group controlId="addressType" className="mx-1">
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

                            <Form.Group controlId="pincode" className="me-1">
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


                        <Form.Group controlId="locality" className="m-1">
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

                        <Form.Group controlId="addressName" className="m-1">
                            <Form.Control
                                type="text"
                                name="address_name"
                                placeholder="Address Name"
                                value={formData.address_name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="addressline1" className="m-1">
                            <Form.Control
                                type="text"
                                name="address_line_1"
                                placeholder="Address line 1"
                                value={formData.address_line_1}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>


                        <Form.Group controlId="addressline2" className="m-1">
                            <Form.Control
                                type="text"
                                name="address_line_2"
                                placeholder="Address line 2"
                                value={formData.address_line_2}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <div className="d-flex">
                            <Form.Group controlId="city" className="mx-1 w-50 float-left">
                                <Form.Control
                                    type="text"
                                    name="city"
                                    placeholder="Enter City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="state" className="me-1 w-50 float-left">
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

                        <Button variant="primary" type="submit" className="btn m-1 w-100">Submit</Button>
                    </Col>
                    <Col md={6}>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.523434507499!2d78.45764861435773!3d17.426632888084933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98673c27a2bb%3A0xe7e6a045c1095c04!2sPunjagutta%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1639045574805!5m2!1sen!2sin"
                            width="100%"
                            height="370"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </Col>
                </Row>


            </Form>
        </Container>
    );
};

export default AddOtherAddressForm;
