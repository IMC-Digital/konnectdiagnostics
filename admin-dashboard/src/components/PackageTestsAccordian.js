import { styled } from "styled-components";
import Accordion from 'react-bootstrap/Accordion';

function PackageTestsAccordian({ item, index }) {
    return (
        <Wrapper>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={index}>
                    <Accordion.Header className="border-none">
                        <i className="fa-regular fa-circle-check me-2"></i>
                        {item.test_name}
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <p className="text-k-text small"><strong>Price:</strong> {item.price} </p>
                            <p className="text-k-text small"><strong>Sample type:</strong> {item.sample_type} </p>
                            <p className="text-k-text small"><strong>Fasting:</strong> {item.fasting} </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Wrapper>
    );
}

export default PackageTestsAccordian;

const Wrapper = styled.div`
.accordion-header{
    border-radius: 0 !important;
    border: 1px solid transparent;
    button.accordion-button{
        padding: 8px 10px;
        border: 1px solid transparent;
    }
    button.accordion-button.collapsed{
        border: 1px solid transparent;
        padding: 8px 10px;

    }

}
`