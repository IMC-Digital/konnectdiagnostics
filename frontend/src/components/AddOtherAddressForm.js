import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const AddOtherAddressForm = () => {
    const [formData, setFormData] = useState({
        user_id: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3210/user/add-new-address", formData)
            .then((response) => {
                console.log("Address added successfully:", response.data);
                // Handle success, e.g., redirect to another page
            })
            .catch((error) => {
                console.error("Error adding address:", error.response.data);
                // Handle error, e.g., display an error message
            });
    };


    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="border p-5">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <div className="d-flex">
                                    <div className="w-50">
                                        <Form.Group controlId="addressType" className="m-1">
                                            <Form.Control
                                                as="select"
                                                name="address_type"
                                                value={formData.address_type}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select an Address Type</option>
                                                <option value="Home">Home</option>
                                                <option value="Office">Office</option>
                                                <option value="Other">Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="w-50">
                                        <Form.Group controlId="pincode" className="m-1">
                                            <Form.Control
                                                type="text"
                                                name="pincode"
                                                placeholder="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                </div>

                                <Form.Group controlId="locality" className="m-1">
                                    <Form.Control
                                        as="select"
                                        name="address_type"
                                        value={formData.address_type}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Locality</option>
                                        <option value="Area1">Area1</option>
                                        <option value="Area2">Area2</option>
                                        <option value="Area3">Area3</option>
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
                                        value={formData.address_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="city" className="m-1">
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        placeholder="Enter City"
                                        value={formData.city}
                                    />
                                </Form.Group>

                                <Form.Group controlId="state" className="m-1">
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        placeholder="Enter State"
                                        value={formData.state}
                                    />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.523434507499!2d78.45764861435773!3d17.426632888084933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98673c27a2bb%3A0xe7e6a045c1095c04!2sPunjagutta%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1639045574805!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </Col>
                        </Row>


                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddOtherAddressForm;
